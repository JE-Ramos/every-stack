# Knowledgebase Monorepo

## Overview

Generic multi-modal knowledge base — React 19 frontend + NestJS backend, TypeScript everywhere. Modular monolith designed to scale into micro-frontends/microservices when needed.

## Package Manager

pnpm with workspaces. All packages live in `packages/`.

```bash
pnpm install                          # Install all deps
pnpm --filter <pkg> add <dep>         # Add dep to specific package
pnpm --filter frontend dev            # Run frontend dev server
pnpm --filter backend dev             # Run backend dev server
pnpm dev                              # Run frontend + backend concurrently
```

## Monorepo Structure

```
packages/
  core/       → Domain types, DTOs, interfaces, enums (FE↔BE contract)
  utils/      → Pure shared utility functions (validation, formatting, dates)
  config/     → Config types + Zod validation schemas
  content/    → Static UI text/copy (JSON, no DB relations)
  ai/         → AI logic: embeddings, Gemini client, vector utilities
  ui/         → Shared React component library (consumed by frontend + future admin)
  frontend/   → React 19 + Vite 8 + Tailwind 4 (main app)
  backend/    → NestJS modular monolith (future scope)
```

## Import Boundaries

| Package    | Can import from                       |
| ---------- | ------------------------------------- |
| `core`     | Nothing (leaf package)                |
| `utils`    | `core`                                |
| `config`   | `core`                                |
| `content`  | `core`                                |
| `ai`       | `core`, `utils`, `config`             |
| `ui`       | `core`, `utils`, `content`            |
| `frontend` | Everything except `backend` and `ai`  |
| `backend`  | Everything except `frontend` and `ui` |

## Pinned Versions

| Package                         | Version |
| ------------------------------- | ------- |
| react / react-dom               | 19.2.4  |
| react-router                    | 7.13.1  |
| typescript                      | 5.9.3   |
| vite                            | 8.0.1   |
| @vitejs/plugin-react            | 6.0.1   |
| babel-plugin-react-compiler     | 1.0.0   |
| tailwindcss / @tailwindcss/vite | 4.2.2   |
| eslint                          | 9.39.4  |
| typescript-eslint               | 8.57.1  |
| prettier                        | 3.8.1   |

## Commands

```bash
pnpm lint                  # Lint all packages
pnpm lint:fix              # Lint + auto-fix
pnpm format                # Format all files with Prettier
pnpm format:check          # Check formatting without writing
pnpm build                 # Build frontend
pnpm test                  # Run all tests
pnpm changeset             # Create a changeset for version bumps
pnpm version-packages      # Apply changesets and bump versions
```

## Conventional Commits

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/). Enforced by commitlint via a husky `commit-msg` hook.

Format: `<type>(<scope>): <description>`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Scopes:** `core`, `utils`, `config`, `content`, `ai`, `ui`, `frontend`, `backend`, `repo`, `deps`

Examples:

```
feat(frontend): add search results pagination
fix(core): correct DocumentType enum values
chore(deps): bump typescript to 5.9.3
refactor(backend): extract auth into standalone module
docs(repo): update ARCHITECTURE.md with API contract flow
```

## Changesets (Versioning)

This monorepo uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation.

1. After making changes, run `pnpm changeset` and follow the prompts to select affected packages and semver bump type.
2. Commit the generated `.changeset/*.md` file with your PR.
3. On merge to `main`, the Changesets GitHub Action opens a "Version Packages" PR that bumps `package.json` versions and updates `CHANGELOG.md` files.
4. Merging that PR finalizes the release.

## TypeScript

- `strict: true` with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`
- All packages extend `tsconfig.base.json` at the root
- Use `import type` for type-only imports (enforced by `verbatimModuleSyntax`)
- See `.claude/rules/typescript.md` for full conventions

## Formatting

- Prettier with 4-space indent, 120 char print width
- Tailwind class auto-sorting via `prettier-plugin-tailwindcss`
- ESLint handles linting only; Prettier handles formatting (no overlap via `eslint-config-prettier`)

## Protected Files (do not edit manually)

- `pnpm-lock.yaml`
- `dist/` directories
- Any file under `generated/` or `__generated__/`

## Forbidden Patterns

- Never use `any` — use `unknown` and narrow with type guards
- Never use `console.log` in production code — use a logger
- Never mutate function parameters — return new values
- Never use `eval()` or `Function()` constructor
- Never commit `.env` files
