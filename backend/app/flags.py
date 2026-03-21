from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class FeatureFlags:
    enable_upload: bool = True
    enable_semantic_search: bool = False
    enable_analytics: bool = False
    enable_debug_panel: bool = False
    max_upload_size_bytes: int = 10 * 1024 * 1024


def _parse_bool(value: str, fallback: bool) -> bool:
    if not value:
        return fallback
    return value.lower() in ("true", "1")


def load_flags() -> FeatureFlags:
    return FeatureFlags(
        enable_upload=_parse_bool(os.environ.get("FLAG_ENABLE_UPLOAD", ""), True),
        enable_semantic_search=_parse_bool(os.environ.get("FLAG_ENABLE_SEMANTIC_SEARCH", ""), False),
        enable_analytics=_parse_bool(os.environ.get("FLAG_ENABLE_ANALYTICS", ""), False),
        enable_debug_panel=_parse_bool(os.environ.get("FLAG_ENABLE_DEBUG_PANEL", ""), False),
        max_upload_size_bytes=int(os.environ.get("FLAG_MAX_UPLOAD_SIZE_BYTES", str(10 * 1024 * 1024))),
    )


flags = load_flags()
