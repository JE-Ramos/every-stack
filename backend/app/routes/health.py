from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.storage import get_s3_client
from app.config import settings

router = APIRouter()


@router.get("/health")
async def health():
    return {"status": "ok", "timestamp": datetime.now(timezone.utc).isoformat()}


@router.get("/ready")
async def ready(db: AsyncSession = Depends(get_db)):
    checks = {}

    try:
        await db.execute(text("SELECT 1"))
        checks["database"] = "ok"
    except Exception as e:
        checks["database"] = f"error: {e}"

    try:
        get_s3_client().head_bucket(Bucket=settings.S3_BUCKET)
        checks["storage"] = "ok"
    except Exception:
        checks["storage"] = "unavailable"

    all_ok = all(v == "ok" for v in checks.values())

    return {
        "status": "ready" if all_ok else "degraded",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "checks": checks,
    }
