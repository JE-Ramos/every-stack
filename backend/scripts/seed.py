"""Seed the database with mock telco documents.

Usage:
    cd backend && source .venv/bin/activate
    python -m scripts.seed
"""

from __future__ import annotations

import asyncio
import logging

from sqlalchemy import select, func

from app.db.session import engine, async_session
from app.db.base import Base
from app.db.models import Document
from app.data.documents import documents as mock_documents

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("everystack.seed")


async def seed():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as session:
        result = await session.execute(select(func.count()).select_from(Document))
        count = result.scalar_one()

        if count > 0:
            logger.info("database already has %d documents, skipping seed", count)
            return

        for doc in mock_documents:
            session.add(
                Document(
                    title=doc.title,
                    domain=doc.domain,
                    modality=doc.modality,
                    summary=doc.summary,
                    content=doc.content,
                    tags=doc.tags,
                )
            )

        await session.commit()
        logger.info("seeded %d documents", len(mock_documents))

    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(seed())
