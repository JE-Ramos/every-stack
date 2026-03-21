from __future__ import annotations

import logging
import uuid

from fastapi import APIRouter, Depends, UploadFile, File, Form, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.db.models import Document
from app.storage import upload_file

logger = logging.getLogger("everystack.upload")

router = APIRouter()


@router.post("/upload")
async def upload_document(
    request: Request,
    file: UploadFile = File(...),
    title: str = Form(...),
    domain: str = Form("General"),
    tags: str = Form(""),
    db: AsyncSession = Depends(get_db),
):
    file_data = await file.read()
    file_id = str(uuid.uuid4())
    s3_key = f"documents/{file_id}/{file.filename}"

    upload_file(s3_key, file_data, content_type=file.content_type or "application/octet-stream")

    doc = Document(
        title=title,
        domain=domain,
        modality=file.content_type or "unknown",
        summary=f"Uploaded file: {file.filename} ({len(file_data)} bytes)",
        content=file_data.decode("utf-8", errors="replace")[:5000],
        tags=tags.split(",") if tags else [],
        s3_key=s3_key,
    )

    db.add(doc)
    await db.commit()
    await db.refresh(doc)

    logger.info("document uploaded id=%s title=%s s3_key=%s", doc.id, title, s3_key)

    return {
        "id": str(doc.id),
        "title": doc.title,
        "domain": doc.domain,
        "s3_key": s3_key,
        "size": len(file_data),
    }
