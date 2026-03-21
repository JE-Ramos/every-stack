# packages/ai

AI logic — embedding client, vector utilities, L2 normalization, retry/rate-limit. Primarily consumed by the backend.

## Rules

- Can import from: `core`, `utils`, `config`
- Must not import from: `frontend`, `ui`, `backend`
- All external API calls must have retry logic with exponential backoff
- Rate limiting must respect Gemini free tier (100 RPM / 1K RPD)
- Vector operations must include L2 normalization for MRL-truncated embeddings

## Structure

```
src/
  index.ts           ← barrel export
  embeddings.ts      ← GeminiEmbeddingService (REST client)
  vectors.ts         ← L2 normalization, cosine similarity utilities
  retry.ts           ← retry with exponential backoff + rate limit
```

## Commands

```bash
pnpm --filter ai build
pnpm --filter ai test
```
