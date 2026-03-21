from __future__ import annotations

from dataclasses import asdict

from fastapi import APIRouter

from app.flags import flags

router = APIRouter()


@router.get("/flags")
async def get_flags():
    return asdict(flags)
