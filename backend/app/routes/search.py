from __future__ import annotations

import logging
from typing import List, Optional

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from sqlalchemy import select, or_, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.db.models import Document as DocumentModel
from app.data.documents import documents as mock_documents

logger = logging.getLogger("everystack.search")

router = APIRouter()


class SearchRequest(BaseModel):
    query: str
    domain: Optional[str] = None


class SearchResultItem(BaseModel):
    id: str
    title: str
    domain: str
    modality: str
    summary: str
    tags: List[str]


class SearchResponse(BaseModel):
    query: str
    domain: Optional[str]
    count: int
    results: List[SearchResultItem]
    source: str


async def search_db(query: str, domain: Optional[str], db: AsyncSession) -> Optional[List[SearchResultItem]]:
    try:
        stmt = select(DocumentModel).where(
            or_(
                func.lower(DocumentModel.title).contains(query.lower()),
                func.lower(DocumentModel.summary).contains(query.lower()),
                func.lower(DocumentModel.content).contains(query.lower()),
            )
        )
        if domain:
            stmt = stmt.where(func.lower(DocumentModel.domain) == domain.lower())

        result = await db.execute(stmt)
        rows = result.scalars().all()

        if not rows:
            return None

        return [
            SearchResultItem(
                id=str(r.id),
                title=r.title,
                domain=r.domain,
                modality=r.modality,
                summary=r.summary,
                tags=r.tags or [],
            )
            for r in rows
        ]
    except Exception:
        return None


def search_mock(query: str, domain: Optional[str]) -> List[SearchResultItem]:
    terms = query.lower().split()

    results = [
        doc
        for doc in mock_documents
        if any(
            term in f"{doc.title} {doc.summary} {doc.content} {' '.join(doc.tags)}".lower()
            for term in terms
        )
    ]

    if domain:
        results = [d for d in results if d.domain.lower() == domain.lower()]

    def score(doc):
        haystack = f"{doc.title} {doc.summary} {doc.content} {' '.join(doc.tags)}".lower()
        return sum(haystack.count(term) for term in terms)

    results.sort(key=score, reverse=True)

    return [
        SearchResultItem(
            id=doc.id,
            title=doc.title,
            domain=doc.domain,
            modality=doc.modality,
            summary=doc.summary,
            tags=doc.tags,
        )
        for doc in results
    ]


@router.post("/search", response_model=SearchResponse)
async def search(body: SearchRequest, request: Request, db: AsyncSession = Depends(get_db)):
    db_results = await search_db(body.query, body.domain, db)

    if db_results is not None:
        source = "database"
        items = db_results
    else:
        source = "mock"
        items = search_mock(body.query, body.domain)

    logger.info(
        "search executed query=%s domain=%s results=%d source=%s",
        body.query,
        body.domain,
        len(items),
        source,
    )

    return SearchResponse(
        query=body.query,
        domain=body.domain,
        count=len(items),
        results=items,
        source=source,
    )


@router.get("/search/domains")
async def get_domains(db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(func.distinct(DocumentModel.domain)).order_by(DocumentModel.domain))
        db_domains = [row[0] for row in result.all()]
        if db_domains:
            return {"domains": db_domains}
    except Exception:
        pass

    domains = sorted({d.domain for d in mock_documents})
    return {"domains": domains}
