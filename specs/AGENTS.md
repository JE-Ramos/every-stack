# specs/

Shared API contract. Source of truth for types between frontend, backend, and mobile.

## Rules

- `api.openapi.yaml` is jointly owned by frontend and backend teams (see CODEOWNERS)
- Changes to the spec MUST be followed by `pnpm generate:api` to regenerate the frontend SDK
- All endpoints must be documented with request/response schemas
- Use OpenAPI 3.1 format
- `openapi-generator-kotlin.yaml` is the config for generating the Kotlin/KMP client

## Workflow

1. Edit `api.openapi.yaml`
2. Run `pnpm generate:api` (regenerates `packages/frontend/src/lib/api.gen.ts`)
3. Commit both the spec and the generated file together
