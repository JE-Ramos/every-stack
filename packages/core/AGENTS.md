# packages/core

Domain types, DTOs, interfaces, and enums shared across all packages. This is the API contract between frontend and backend.

## Rules

- **Leaf package** — must not import from any other workspace package
- Every exported type must be documented with JSDoc
- Prefer string enums for domain values (ContentType, Domain, Modality, etc.)
- Use discriminated unions for complex state (e.g. `SearchResult` variants by content type)
- All changes here affect every other package — review carefully

## Structure

```
src/
  index.ts         ← barrel export
  domain.ts        ← Domain, Modality, ContentType enums
  search.ts        ← SearchQuery, SearchResult, SearchFilters
  content.ts       ← Chunk, ChunkMetadata
  config.ts        ← AppConfig, Branding, DomainConfig
  api.ts           ← API request/response DTOs
```

## Commands

```bash
pnpm --filter core build
pnpm --filter core test
```
