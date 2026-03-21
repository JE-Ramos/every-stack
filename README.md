# EveryStack

Full-stack monorepo template — React 19 frontend + FastAPI backend. TypeScript for the frontend packages, Python for the backend, pnpm workspaces for the monorepo. Pre-configured with CI/CD, security scanning, structured logging, Firebase Analytics, and Docker.

## Prerequisites

- **Node.js** 22+
- **pnpm** 10+
- **Python** 3.12+
- **Docker** (for local PostgreSQL with pgvector)

## Quick Start

```bash
# Clone and install frontend deps
git clone <repo-url> && cd everystack
pnpm install

# Set up Python backend
cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && cd ..

# Set up environment
cp .env.example .env
# Edit .env with your values (see Environment Setup below)

# Start Postgres
docker compose up -d postgres

# Start dev servers (frontend + backend)
pnpm dev
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:3001`.

## Environment Setup

Copy `.env.example` to `.env` and fill in the values:

| Variable                       | Side     | Required | Description                                                    |
| ------------------------------ | -------- | -------- | -------------------------------------------------------------- |
| `NODE_ENV`                     | Shared   | No       | `development` / `production` / `test` (default: `development`) |
| `LOG_LEVEL`                    | Shared   | No       | `debug` / `info` / `warn` / `error` (default: `info`)          |
| `PORT`                         | Backend  | No       | FastAPI server port (default: `3001`)                          |
| `DATABASE_URL`                 | Backend  | Yes      | PostgreSQL connection string                                   |
| `GEMINI_API_KEY`               | Backend  | Yes      | Google Gemini API key                                          |
| `VITE_API_BASE_URL`            | Frontend | No       | Backend URL (default: `http://localhost:3001`)                 |
| `VITE_FIREBASE_API_KEY`        | Frontend | Yes      | Firebase project API key                                       |
| `VITE_FIREBASE_PROJECT_ID`     | Frontend | Yes      | Firebase project ID                                            |
| `VITE_FIREBASE_APP_ID`         | Frontend | Yes      | Firebase app ID                                                |
| `VITE_FIREBASE_MEASUREMENT_ID` | Frontend | Yes      | Firebase Analytics measurement ID                              |

Frontend variables (`VITE_` prefix) are embedded at build time and are public. Backend variables are runtime secrets.

## Available Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `pnpm dev`           | Start frontend + FastAPI backend  |
| `pnpm dev:frontend`  | Start frontend only               |
| `pnpm dev:backend`   | Start FastAPI backend only        |
| `pnpm build`         | Build frontend for production     |
| `pnpm test`          | Run frontend tests (Vitest)       |
| `pnpm test:coverage` | Run tests with coverage report    |
| `pnpm lint`          | Lint TypeScript files (ESLint)    |
| `pnpm lint:fix`      | Lint and auto-fix                 |
| `pnpm format`        | Format all files (Prettier)       |
| `pnpm format:check`  | Check formatting without writing  |
| `pnpm typecheck`     | TypeScript type checking          |
| `pnpm size`          | Check frontend bundle size budget |

## Project Structure

```
packages/                  ← pnpm workspaces (TypeScript)
  core/                      Domain types, DTOs, interfaces, enums
  utils/                     Shared utilities + structured logger
  config/                    Zod env validation schemas
  content/                   Static UI text/copy
  ai/                        AI logic: embeddings, Gemini client
  ui/                        Shared React component library
  frontend/                  React 19 + Vite 8 + Tailwind 4

backend/                   ← Python (FastAPI)
  app/
    main.py                  FastAPI app with CORS + trace ID middleware
    routes/                  API route modules
    data/                    Mock data (replace with DB)
  requirements.txt
  Dockerfile
```

## Testing

Frontend tests use [Vitest](https://vitest.dev/) with workspace-aware configuration:

```bash
pnpm test                    # Run all tests
pnpm test:coverage           # Run with coverage (v8 provider)
pnpm --filter utils test     # Run tests for a specific package
```

Backend tests use pytest:

```bash
cd backend && pytest
```

## Logging

**Frontend**: Lightweight console logger with session-level trace IDs. The `x-trace-id` header is sent on every API call to correlate frontend and backend logs.

**Backend**: Python `logging` module with trace ID injected via middleware. Every log line includes the trace ID from the frontend request:

```
2026-03-21T16:04:00 INFO [everystack.search] [a1b2c3d4-...] search executed query=5G domain=None results=2
```

## Analytics

Firebase Analytics tracks MAU, DAU, and user navigation flow. Set up:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Add a web app and copy the config values
3. Set the `VITE_FIREBASE_*` environment variables

## CI/CD

GitHub Actions runs on every PR and push to `main`:

| Workflow       | Triggers                 | What it does                                                 |
| -------------- | ------------------------ | ------------------------------------------------------------ |
| **CI**         | PR, push to main         | Lint, format, typecheck, test + coverage, build, bundle size |
| **Security**   | PR, push to main, weekly | `pnpm audit`, CodeQL, license compliance                     |
| **Lighthouse** | PR only                  | Performance, a11y, SEO, best-practices > 0.9                 |

[Dependabot](.github/dependabot.yml) opens weekly PRs for dependency updates.

## Deployment

**Frontend**: Deploy to Vercel — set root directory to `packages/frontend`.

**Backend**: Deploy to Railway or Render — set root directory to `backend`. Both support Dockerfile-based deploys.

**Docker** (for AWS migration):

```bash
docker compose up -d                 # Postgres + backend
docker build -f packages/frontend/Dockerfile -t everystack-frontend .
docker build -f backend/Dockerfile -t everystack-backend .
```

## Contributing

- Branch naming: `feat/search-filters`, `fix/embedding-timeout`, `chore/update-deps`
- Commit messages: [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint
- All CI checks must pass before merge
