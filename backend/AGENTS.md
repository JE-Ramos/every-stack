# backend/

FastAPI backend. Python 3.9+, async, Pydantic models.

## Rules

- Can import from: only Python packages (no TS workspace packages)
- Types shared with frontend via OpenAPI spec at `specs/api.openapi.yaml`
- Every route module registers in `app/main.py` with `app.include_router()`
- Pydantic models for all request/response schemas
- Logging via `logging.getLogger("everystack.<module>")` — trace IDs injected by middleware
- Feature flags via `app.flags` — read from `FLAG_*` env vars

## Structure

```
app/
  main.py            FastAPI app, middleware, router registration
  config.py          Pydantic settings (env vars)
  flags.py           Feature flags (env-driven)
  storage.py         S3/LocalStack client (boto3)
  routes/            API route modules
  db/
    base.py          SQLAlchemy declarative base
    models.py        ORM models (Document, etc.)
    session.py       Async session factory
    migrations/      Alembic migrations
  data/              Mock/seed data
scripts/
  seed.py            Database seeder
```

## Commands

```bash
pnpm dev:backend                         # Start uvicorn with reload
cd backend && alembic upgrade head       # Run migrations
cd backend && python -m scripts.seed     # Seed mock data
```
