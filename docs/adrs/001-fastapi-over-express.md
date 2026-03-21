---
title: "ADR-001: FastAPI over Express for backend"
date: 2026-03-21
status: accepted
tags: [everystack, backend, fastapi, python]
---

# ADR-001: FastAPI over Express for backend

## Status

Accepted

## Context

EveryStack needs a backend API. The frontend is React (TypeScript). The original architecture chose Express 5 (TypeScript) for a unified language stack. However, the team may need Python for AI/ML workloads and internal APIs.

## Options Considered

### Express 5 (TypeScript)

- Pros: Same language as frontend, shared types natively, pnpm workspace integration
- Cons: Weaker AI/ML ecosystem, would need a separate Python service anyway

### FastAPI (Python)

- Pros: Best-in-class for AI/ML, Pydantic for validation, async native, auto-generated OpenAPI docs
- Cons: Different language from frontend, need OpenAPI codegen to share types

### Both (Express BFF + FastAPI internal)

- Pros: Best of both worlds
- Cons: Two backends to maintain, deploy, and version

## Decision

FastAPI as the single backend. Types are shared via OpenAPI spec + orval (frontend) and openapi-generator (mobile). One backend is simpler to maintain than two.

## Consequences

- Backend code is Python, frontend is TypeScript — no shared runtime types
- OpenAPI spec at `specs/api.openapi.yaml` is the contract between teams
- `pnpm generate:api` regenerates the frontend SDK from the spec
- Python backend lives at `backend/` (outside pnpm workspace), managed via Docker
