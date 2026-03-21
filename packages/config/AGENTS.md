# packages/config

Config types and Zod validation schemas shared across frontend and backend.

## Rules

- Can import from: `core`
- All config schemas must be defined with Zod
- Export both the Zod schema and the inferred TypeScript type
- Config values are loaded from `config.json` at the repo root

## Structure

```
src/
  index.ts         ← barrel export
  app.ts           ← AppConfigSchema, AppConfig type
  branding.ts      ← BrandingSchema, Branding type
  search.ts        ← SearchConfigSchema, SearchConfig type
  ingestion.ts     ← IngestionConfigSchema, IngestionConfig type
```

## Commands

```bash
pnpm --filter config build
pnpm --filter config test
```
