import logging
import platform
import time

from fastapi import APIRouter, Request

logger = logging.getLogger("everystack.stack")

router = APIRouter()

_start_time = time.monotonic()

PACKAGES = [
    {"name": "core", "description": "Domain types, DTOs, interfaces, enums"},
    {"name": "utils", "description": "Shared utilities + structured logger"},
    {"name": "config", "description": "Zod env schemas + validation"},
    {"name": "content", "description": "Static UI text/copy"},
    {"name": "ai", "description": "Embeddings, Gemini client, vector utils"},
    {"name": "ui", "description": "Shared React component library"},
    {"name": "frontend", "description": "React 19 + Vite 8 + Tailwind 4"},
    {"name": "backend", "description": "FastAPI + Pydantic"},
]

CI_CHECKS = [
    {"name": "ESLint", "description": "TypeScript strict + React Hooks + jsx-a11y"},
    {"name": "Prettier", "description": "4-space indent, 120 char width, Tailwind sorting"},
    {"name": "TypeScript", "description": "strict, noUncheckedIndexedAccess, composite refs"},
    {"name": "Vitest", "description": "Workspace-aware test runner + v8 coverage"},
    {"name": "Build", "description": "Vite production build + bundle size budget"},
    {"name": "Lighthouse CI", "description": "Performance, a11y, SEO, best-practices > 0.9"},
    {"name": "CodeQL", "description": "Static security analysis for JS/TS"},
    {"name": "pnpm audit", "description": "Known vulnerability scanning"},
    {"name": "Dependabot", "description": "Weekly grouped dependency updates"},
]

TECH_STACK = {
    "frontend": ["React 19", "Vite 8", "Tailwind 4", "React Router 7", "lucide-react"],
    "backend": ["FastAPI", "Pydantic", "uvicorn"],
    "shared": ["TypeScript 5.9 (strict)", "Zod (FE env validation)", "pnpm workspaces"],
    "devtools": ["Vitest", "ESLint 9 (flat config)", "Prettier", "Husky + lint-staged", "Commitlint"],
    "ci": ["GitHub Actions", "CodeQL", "Lighthouse CI", "Dependabot", "size-limit"],
    "infra": ["Docker (Postgres + pgvector)", "Vercel (frontend)", "Railway/Render (backend)"],
}


@router.get("/stack")
async def get_stack(request: Request):
    logger.info("stack info requested")
    return {
        "name": "everystack",
        "description": "Full-stack monorepo template — React 19 + FastAPI + TypeScript",
        "packages": PACKAGES,
        "ciChecks": CI_CHECKS,
        "techStack": TECH_STACK,
        "uptime": int(time.monotonic() - _start_time),
        "pythonVersion": platform.python_version(),
    }
