# packages/utils

Pure shared utility functions. No side effects, no framework dependencies.

## Rules

- Can import from: `core`
- Every function must be pure — same input always produces same output
- No side effects (no I/O, no DOM, no network calls)
- No framework-specific code (no React hooks, no NestJS decorators)
- Every function must have a corresponding unit test

## Structure

```
src/
  index.ts         ← barrel export
  validation.ts    ← shared validation helpers
  formatting.ts    ← string/number formatting
  dates.ts         ← date manipulation utilities
```

## Commands

```bash
pnpm --filter utils build
pnpm --filter utils test
```
