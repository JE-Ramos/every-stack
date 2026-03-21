---
title: Introducing EveryStack
date: 2026-03-21
author: ""
tags: [everystack, launch, template]
---

# Introducing EveryStack

EveryStack is a full-stack monorepo template for teams that want to ship fast without spending weeks on infrastructure.

## What's included

- **Frontend**: React 19 + Vite 8 + Tailwind 4 + React Query
- **Backend**: FastAPI + SQLAlchemy + pgvector
- **Infrastructure**: Docker Compose, LocalStack (S3), PostgreSQL
- **CI/CD**: GitHub Actions, Lighthouse CI, CodeQL, Dependabot
- **DX**: Nx build orchestrator, orval SDK codegen from OpenAPI, conventional commits, release-please
- **AI-first DX**: 36 role-based AI commands, project skills, MCP integrations (Stitch, GitHub, Playwright, Railway)

## Why we built it

Every new project starts with the same boilerplate: set up linting, configure CI, add Docker, wire up a database, figure out type sharing between frontend and backend. EveryStack does all of that upfront so you can focus on your product from day one.

## Get started

```bash
git clone <repo> && cd everystack
pnpm install
cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && cd ..
docker compose up -d postgres localstack
cd backend && alembic upgrade head && python -m scripts.seed && cd ..
pnpm dev
```

Open http://localhost:5173 and start building.
