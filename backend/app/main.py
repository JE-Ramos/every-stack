from __future__ import annotations

import logging
import uuid
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

from app.routes import health, search, stack, upload, flags
from app.storage import ensure_bucket

logger = logging.getLogger("everystack")


class TraceFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        if not hasattr(record, "trace_id"):
            record.trace_id = "-"  # type: ignore[attr-defined]
        return super().format(record)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    handler = logging.StreamHandler()
    handler.setFormatter(
        TraceFormatter(
            fmt="%(asctime)s %(levelname)s [%(name)s] [%(trace_id)s] %(message)s",
            datefmt="%Y-%m-%dT%H:%M:%S",
        )
    )
    logging.root.handlers = [handler]
    logging.root.setLevel(logging.INFO)
    try:
        ensure_bucket()
        logger.info("S3 bucket ready")
    except Exception:
        logger.warning("S3 not available — uploads will fail until LocalStack/S3 is running")
    logger.info("server started")
    yield
    logger.info("server stopped")


app = FastAPI(title="EveryStack API", version="0.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["x-trace-id"],
)


@app.middleware("http")
async def trace_id_middleware(request: Request, call_next) -> Response:  # noqa: ANN001
    trace_id = request.headers.get("x-trace-id", str(uuid.uuid4()))
    request.state.trace_id = trace_id

    old_factory = logging.getLogRecordFactory()

    def record_factory(*args, **kwargs):  # noqa: ANN002, ANN003
        record = old_factory(*args, **kwargs)
        record.trace_id = trace_id  # type: ignore[attr-defined]
        return record

    logging.setLogRecordFactory(record_factory)

    response = await call_next(request)
    response.headers["x-trace-id"] = trace_id

    logging.setLogRecordFactory(old_factory)
    return response


app.include_router(health.router, prefix="/api")
app.include_router(search.router, prefix="/api")
app.include_router(stack.router, prefix="/api")
app.include_router(upload.router, prefix="/api")
app.include_router(flags.router, prefix="/api")
