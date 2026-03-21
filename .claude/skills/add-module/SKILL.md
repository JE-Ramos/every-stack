---
name: add-module
description: Add a new module to the EveryStack monorepo. Use when creating a new frontend feature, backend route module, shared package, or mobile feature. Handles all wiring — commit scopes, Nx targets, OpenAPI spec, CODEOWNERS, and codegen.
---

# Add Module to EveryStack

## Determine module type

Ask which type:

1. **Frontend feature** → `packages/frontend/src/features/<name>/`
2. **Backend route module** → `backend/app/routes/<name>.py`
3. **Shared TS package** → `packages/<name>/`
4. **Mobile feature** → `apps/mobile/` (KMP, placeholder)

---

## 1. Frontend Feature Module

Create at `packages/frontend/src/features/<name>/`.

### Files to create

```
packages/frontend/src/features/<name>/
  <Name>.tsx           ← Main component
  use<Name>.ts         ← Hook (uses generated API hooks from api.gen.ts)
  <Name>.test.tsx      ← Tests
```

### Checklist

- [ ] Components use generated SDK hooks from `@/lib/api.gen` (not manual fetch)
- [ ] If new API endpoints needed, update `specs/api.openapi.yaml` first, then `pnpm generate:api`
- [ ] Styles use Tailwind only, no CSS modules
- [ ] No `useMemo`/`useCallback` — React Compiler handles memoization

### Commit scope

```
feat(frontend/<name>): add <description>
```

---

## 2. Backend Route Module

Create at `backend/app/routes/<name>.py`.

### Template

```python
from __future__ import annotations

import logging
from fastapi import APIRouter, Request

logger = logging.getLogger("everystack.<name>")

router = APIRouter()


@router.get("/<name>")
async def get_<name>(request: Request):
    logger.info("<name> requested")
    return {"status": "ok"}
```

### Wiring checklist

- [ ] Create `backend/app/routes/<name>.py`
- [ ] Register in `backend/app/main.py`: `app.include_router(<name>.router, prefix="/api")`
- [ ] Add endpoints to `specs/api.openapi.yaml`
- [ ] Run `pnpm generate:api` to regenerate the frontend SDK
- [ ] Add Pydantic request/response models in the route file

### Commit scope

```
feat(backend/<name>): add <description>
```

---

## 3. Shared TypeScript Package

Create at `packages/<name>/`.

### Files to create

```
packages/<name>/
  package.json
  tsconfig.json
  src/
    index.ts
```

### package.json template

```json
{
    "name": "@everystack/<name>",
    "version": "0.0.0",
    "private": true,
    "type": "module",
    "exports": { ".": "./src/index.ts" },
    "scripts": {
        "build": "tsc --build",
        "test": "vitest run"
    },
    "dependencies": {},
    "devDependencies": {
        "typescript": "^5.9.3"
    }
}
```

### tsconfig.json template

```json
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "outDir": "dist",
        "rootDir": "src"
    },
    "include": ["src"],
    "references": []
}
```

### Wiring checklist (all required)

- [ ] Create `packages/<name>/package.json` with `@everystack/<name>` scope
- [ ] Create `packages/<name>/tsconfig.json` extending base, add references to deps
- [ ] Create `packages/<name>/src/index.ts` with barrel exports
- [ ] Add `{ "path": "packages/<name>" }` to root `tsconfig.json` references
- [ ] Add `"packages/<name>"` to `vitest.workspace.ts`
- [ ] Add `"<name>"` to the `ALLOWED_PREFIXES` array in `commitlint.config.ts`
- [ ] Add `packages/<name>/` ownership line in `.github/CODEOWNERS`
- [ ] Run `pnpm install` to link the new package
- [ ] Verify: `pnpm nx show projects` lists the new package
- [ ] Verify: `pnpm typecheck` passes
- [ ] Import boundary: update `AGENTS.md` table with what the new package can/cannot import

### Commit scope

```
feat(<name>): initial package scaffold
```

---

## 4. Mobile Feature (KMP)

Not yet scaffolded. See `apps/mobile/README.md` for setup instructions.

When ready, commit scope is:

```
feat(mobile/<feature>): add <description>
```

---

## After adding any module

1. **Commit scope**: Add the new scope to `ALLOWED_PREFIXES` in `commitlint.config.ts` if it's a new top-level package
2. **CODEOWNERS**: Add the new path to `.github/CODEOWNERS` with the owning team
3. **OpenAPI**: If the module adds API endpoints, update `specs/api.openapi.yaml` and run `pnpm generate:api`
4. **release-please**: If it's a new independently-versioned package, add it to `release-please-config.json` and `.release-please-manifest.json`
5. **Verify**: Run `pnpm lint && pnpm typecheck && pnpm test && pnpm build`
