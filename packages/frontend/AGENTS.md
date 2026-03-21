# packages/frontend

React 19 + Vite 8 + Tailwind 4 main application. Single app with feature-based folder structure.

## Rules

- Can import from: `core`, `utils`, `config`, `content`, `ui`
- Must not import from: `backend`, `ai`
- Organize by feature: `src/features/search/`, `src/features/ingest/`, etc.
- SEO utilities live here (not shared — admin doesn't need them)
- React Compiler handles memoization — do not use `useMemo`/`useCallback`/`React.memo`

## Structure

```
src/
  features/
    search/          ← search-related components, hooks, types, tests
    ingest/          ← upload/ingestion UI
  hooks/             ← shared hooks
  lib/               ← API client, utilities
  pages/             ← route-level page components (default exports allowed here)
  App.tsx            ← router setup
  main.tsx           ← StrictMode + root render
  index.css          ← Tailwind imports
public/
  logo.svg
index.html
vite.config.ts
```

## Commands

```bash
pnpm --filter frontend dev          # Start Vite dev server (:5173)
pnpm --filter frontend build        # Production build
pnpm --filter frontend preview      # Preview production build
pnpm --filter frontend lint         # Lint frontend files
```

## Dev Server

- Frontend: `http://localhost:5173`
- API proxy: `/api/*` → `http://localhost:3001` (configured in vite.config.ts)
