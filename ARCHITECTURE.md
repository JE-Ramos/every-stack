# Multi-Modal Knowledge Base

## 1. Context & Problem Statement

Engineers need a single search interface to find knowledge across multiple content types (docs, PDFs, diagrams, video, API specs) and configurable domains. Today this knowledge is fragmented across wikis, shared drives, Slack threads, and tribal memory.

**Goal:** A local-first, AI-powered knowledge base with semantic search that understands telco concepts, supports multi-modal content, and is configurable for any telco domain via a pluggable schema.

**Non-goals (v1):** Multi-tenant auth, cloud deployment, real-time collaboration, RBAC.

---

## 2. Tech Stack Evaluation

### Frontend Framework

| Option              | Pros                                                               | Cons                                                         | Verdict                                                    |
| ------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **React 19 + Vite** | Largest ecosystem, Stitch exports React, hooks for state, fast HMR | Bundle size larger than alternatives                         | **CHOSEN** — Stitch generates React, no reason to fight it |
| Next.js 15          | SSR, file routing, API routes built-in                             | Overkill for local app, adds server complexity we don't need | Rejected — we're local-first, no SSR benefit               |
| Svelte 5            | Smallest bundle, fastest runtime                                   | Stitch doesn't export Svelte, smaller ecosystem              | Rejected — incompatible with Stitch output                 |
| Vue 3               | Good DX, smaller than React                                        | Stitch doesn't export Vue                                    | Rejected                                                   |

### Styling

| Option              | Pros                                                                  | Cons                              | Verdict                                                            |
| ------------------- | --------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------ |
| **Tailwind CSS v4** | Utility-first, fast iteration, easy to map brand tokens, zero runtime | Class soup in JSX                 | **CHOSEN** — best fit for rapid prototyping with brand constraints |
| Panda CSS           | Stitches spiritual successor, type-safe tokens, zero-runtime          | Newer ecosystem, slower adoption  | Strong alternative — revisit if Tailwind becomes limiting          |
| CSS Modules         | Scoped, zero runtime, simple                                          | Verbose, no design token system   | Rejected — too manual for brand token mapping                      |
| Styled-components   | Popular CSS-in-JS                                                     | Runtime cost, deprecated patterns | Rejected — moving away from runtime CSS-in-JS industry-wide        |

### Backend

| Option                        | Pros                                                 | Cons                                                               | Verdict                                                  |
| ----------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| **Express 5**                 | Battle-tested, huge middleware ecosystem, simple     | Callback-heavy (mitigated with async/await)                        | **CHOSEN** — simplicity wins for local app               |
| Fastify                       | 2-3x faster than Express, schema validation built-in | Smaller ecosystem, plugin system learning curve                    | Strong alternative — switch if perf matters              |
| Hono                          | Ultra-lightweight, edge-first, fast                  | Very new, less middleware                                          | Overkill for local                                       |
| No backend (client-side only) | Simplest architecture                                | Can't protect API key, no file system access, no chunking pipeline | **Rejected** — GEMINI_API_KEY exposure is a hard blocker |

### Vector Store

| Option                    | ANN          | Scale | Latency @100K | Cloud Path                           | Verdict                                  |
| ------------------------- | ------------ | ----- | ------------- | ------------------------------------ | ---------------------------------------- |
| **PostgreSQL + pgvector** | Yes (HNSW)   | 10M+  | <10ms         | Supabase/Neon/RDS — zero code change | **CHOSEN** — battle-tested, cloud-ready  |
| LanceDB                   | Yes (IVF_PQ) | 10M+  | <10ms         | LanceDB Cloud (unproven)             | Rejected — young Node SDK, no cloud path |
| sqlite-vec                | No           | 500K  | 100-500ms     | None                                 | Rejected — no ANN, no cloud              |
| ChromaDB                  | Yes          | Any   | ~20ms         | Chroma Cloud                         | Rejected — needs separate process        |
| Pinecone                  | Yes          | Any   | ~20ms         | Already cloud                        | Rejected — vendor lock-in                |
| Qdrant                    | Yes          | Any   | <10ms         | Qdrant Cloud                         | Strong alt — Docker required locally     |

### Embedding Provider

| Option                  | Multimodal                 | Dims           | Free Tier         | Cost/1M tok | Verdict                                                       |
| ----------------------- | -------------------------- | -------------- | ----------------- | ----------- | ------------------------------------------------------------- |
| **Gemini Embedding 2**  | Text+Image+Video+Audio+PDF | 768-3072 (MRL) | 100 RPM / 1K RPD  | $0.20       | **CHOSEN** — only multimodal option, best price               |
| OpenAI text-embedding-3 | Text only                  | 256-3072 (MRL) | None              | $0.13       | Rejected — no multimodal, no free tier                        |
| Cohere embed-v4         | Text+Image                 | 256-1024       | 1K RPM trial      | $0.10       | Strong alt — but no video/audio/PDF embedding                 |
| Ollama (local)          | Text only (nomic-embed)    | 768            | Unlimited (local) | $0          | Rejected for v1 — no multimodal. Good offline fallback for v2 |

### Key Dependencies

```
Shared (packages/shared):          Frontend (packages/frontend):
  typescript 5.7 (strict)            react 19
  @types/node                        react-dom
                                     react-router 7
Backend (packages/backend):          tailwindcss 4
  express 5                          lucide-react (icons)
  @types/express                     @tailwindcss/vite
  pg + @types/pg
  pgvector (npm package)           Dev:
  drizzle-orm + drizzle-kit          vite 6
  multer + @types/multer             tsx (TS execution for backend)
  pdf-parse                          concurrently
  dotenv                             docker-compose (Postgres local)
  uuid                               vitest
                                     @testing-library/react
                                     playwright
                                     supertest + @types/supertest
```

**Language:** TypeScript everywhere. `strict: true` in all `tsconfig.json`. Shared types in `packages/shared/` for domain models (`SearchResult`, `Config`, `ChunkMetadata`, etc.).

---

## 3. System Context Diagram (Level 0 DFD)

```
┌─────────────┐         ┌──────────────────────────────┐         ┌──────────────────┐
│             │  query   │                              │  embed  │                  │
│  User       │────────→ │    Knowledge Base            │────────→│  Google Gemini   │
│  Engineer   │←──────── │       (Local App)            │←────────│  Embedding 2 API │
│             │ results  │                              │ vectors │                  │
└─────────────┘         └──────────────┬───────────────┘         └──────────────────┘
                                       │
                                       │ read/write
                                       ▼
                               ┌───────────────┐
                               │  Local        │
                               │  - PostgreSQL │
                               │  - /content/  │
                               │  - config.json│
                               └───────────────┘
```

**External dependencies:** Only Google Gemini Embedding 2 API. Everything else runs locally.

---

## 4. Data Flow Diagram — Level 1

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                           Knowledge Base System                              │
│                                                                              │
│  ┌─────────┐    ┌──────────┐    ┌──────────────┐    ┌──────────────────┐    │
│  │ React   │───→│ Express  │───→│ Ingestion    │───→│ Gemini Embed 2   │    │
│  │ Frontend│    │ API      │    │ Pipeline     │    │ (External)       │    │
│  │         │    │          │    │              │    └────────┬─────────┘    │
│  │ D1: UI  │    │ D2: API  │    │ D3: Chunker │             │              │
│  │ State   │    │ Routes   │    │ + Metadata   │             │ vectors      │
│  └────┬────┘    └────┬─────┘    │ Extractor   │             ▼              │
│       │              │          └──────────────┘    ┌──────────────────┐    │
│       │              │                              │ PostgreSQL       │    │
│       │              │          ┌──────────────┐    │ + pgvector       │    │
│       │              │          │ Search       │───→│                  │    │
│       │              └─────────→│ Service      │←───│ D4: Vector Store │    │
│       │                         │              │    │ + Metadata       │    │
│       │              results    │ D5: Ranking  │    └──────────────────┘    │
│       │←────────────────────────│ + Filtering  │                           │
│       │                         └──────────────┘                           │
│       │                                                                    │
│       │              ┌──────────────┐                                      │
│       │              │ Config       │                                      │
│       └─────────────→│ Service      │                                      │
│         fetch config │ D6: Schema   │                                      │
│                      └──────────────┘                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Data Stores

| ID  | Store         | Technology                     | Purpose                                 |
| --- | ------------- | ------------------------------ | --------------------------------------- |
| D1  | UI State      | React useState/context         | Active query, filters, results          |
| D2  | API Routes    | Express router                 | Request routing, validation             |
| D3  | Chunker       | In-process service             | Split docs → chunks + metadata          |
| D4  | Vector Store  | PostgreSQL + pgvector (Docker) | Persist embeddings + metadata, HNSW ANN |
| D5  | Ranker        | In-process service             | Cosine similarity + re-ranking          |
| D6  | Config Schema | config.json (disk)             | Domains, modalities, search params      |

---

## 5. Search Flow — Sequence Diagram

```
Engineer       React Frontend      Express API       Search Service      Gemini API        PostgreSQL
   │                │                   │                   │                 │                │
   │  type query    │                   │                   │                 │                │
   │───────────────→│                   │                   │                 │                │
   │                │  POST /api/search │                   │                 │                │
   │                │  {query, domain,  │                   │                 │                │
   │                │   modality}       │                   │                 │                │
   │                │──────────────────→│                   │                 │                │
   │                │                   │  embedQuery(text) │                 │                │
   │                │                   │──────────────────→│                 │                │
   │                │                   │                   │  embedContent() │                │
   │                │                   │                   │  task=RETRIEVAL │                │
   │                │                   │                   │  _QUERY         │                │
   │                │                   │                   │────────────────→│                │
   │                │                   │                   │  768-dim vector │                │
   │                │                   │                   │←───────────────│                │
   │                │                   │                   │                 │                │
   │                │                   │                   │  SELECT ... ORDER BY             │
   │                │                   │                   │  embedding <=> $1                │
   │                │                   │                   │  WHERE domain = $2               │
   │                │                   │                   │────────────────────────────────→│
   │                │                   │                   │  top-K results  │                │
   │                │                   │                   │←───────────────────────────────│
   │                │                   │                   │                 │                │
   │                │                   │  ranked results   │                 │                │
   │                │                   │←─────────────────│                 │                │
   │                │  JSON response    │                   │                 │                │
   │                │←─────────────────│                   │                 │                │
   │  render results│                   │                   │                 │                │
   │←──────────────│                   │                   │                 │                │
```

---

## 6. Ingestion Flow — Sequence Diagram

```
Engineer       React Frontend      Express API     Ingestion Pipeline   Gemini API        PostgreSQL
   │                │                   │                   │                 │                │
   │  upload file   │                   │                   │                 │                │
   │───────────────→│                   │                   │                 │                │
   │                │  POST /api/ingest │                   │                 │                │
   │                │  multipart/form   │                   │                 │                │
   │                │──────────────────→│                   │                 │                │
   │                │                   │  detectType(file) │                 │                │
   │                │                   │──────────────────→│                 │                │
   │                │                   │                   │                 │                │
   │                │                   │   ┌───────────────┤                 │                │
   │                │                   │   │ IF text/md:   │                 │                │
   │                │                   │   │   parse md    │                 │                │
   │                │                   │   │   chunk(512t, │                 │                │
   │                │                   │   │     10%ovlp)  │                 │                │
   │                │                   │   │ IF pdf:       │                 │                │
   │                │                   │   │   extract text│                 │                │
   │                │                   │   │   chunk/page  │                 │                │
   │                │                   │   │ IF image:     │                 │                │
   │                │                   │   │   base64      │                 │                │
   │                │                   │   │   1 chunk     │                 │                │
   │                │                   │   │ IF video:     │                 │                │
   │                │                   │   │   metadata    │                 │                │
   │                │                   │   │   only (v1)   │                 │                │
   │                │                   │   └───────────────┤                 │                │
   │                │                   │                   │                 │                │
   │                │                   │                   │  FOR each chunk:│                │
   │                │                   │                   │  embedContent() │                │
   │                │                   │                   │  task=RETRIEVAL │                │
   │                │                   │                   │  _DOCUMENT      │                │
   │                │                   │                   │────────────────→│                │
   │                │                   │                   │  768-dim vector │                │
   │                │                   │                   │←───────────────│                │
   │                │                   │                   │                 │                │
   │                │                   │                   │  INSERT INTO    │                │
   │                │                   │                   │  knowledge ...  │                │
   │                │                   │                   │────────────────────────────────→│
   │                │                   │                   │  ack            │                │
   │                │                   │                   │←───────────────────────────────│
   │                │                   │                   │                 │                │
   │                │  {chunks: N,      │                   │                 │                │
   │                │   doc_id: "..."}  │                   │                 │                │
   │                │←─────────────────│                   │                 │                │
   │  "Indexed 12   │                   │                   │                 │                │
   │   chunks"      │                   │                   │                 │                │
   │←──────────────│                   │                   │                 │                │
```

---

## 7. Infrastructure Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Local Machine (macOS)                        │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                     pnpm Monorepo                             │  │
│  │                                                               │  │
│  │  ┌─────────────────────┐     ┌─────────────────────────────┐ │  │
│  │  │  packages/frontend  │     │  packages/backend            │ │  │
│  │  │                     │     │                              │ │  │
│  │  │  Vite Dev Server    │     │  Express Server              │ │  │
│  │  │  :5173              │     │  :3001                       │ │  │
│  │  │                     │     │                              │ │  │
│  │  │  React 19           │     │  Drizzle ORM                 │ │  │
│  │  │  Tailwind CSS v4    │     │          │                   │ │  │
│  │  │  React Router       │     │          ▼                   │ │  │
│  │  │                     │     │  ┌────────────────────────┐ │ │  │
│  │  │  Google Fonts:      │     │  │  PostgreSQL + pgvector │ │ │  │
│  │  │  - Space Grotesk    │     │  │  Docker :5432          │ │ │  │
│  │  │  - Poppins          │     │  │  HNSW cosine index     │ │ │  │
│  │  │                     │     │  └────────────────────────┘ │ │  │
│  │  └────────┬────────────┘     │                              │ │  │
│  │           │ proxy             │  ┌────────────────────────┐ │ │  │
│  │           │ /api → :3001      │  │  File Storage          │ │ │  │
│  │           └──────────────────→│  │  ./content/            │ │ │  │
│  │                              │  └────────────────────────┘ │ │  │
│  │                              └──────────────┬───────────────┘ │  │
│  └──────────────────────────────────────────────┼────────────────┘  │
│                                                 │                   │
│                                                 │ HTTPS (API key)   │
└─────────────────────────────────────────────────┼───────────────────┘
                                                  │
                                                  ▼
                                    ┌──────────────────────────┐
                                    │  Google Cloud             │
                                    │  generativelanguage       │
                                    │  .googleapis.com          │
                                    │                           │
                                    │  gemini-embedding-2       │
                                    │  -preview                 │
                                    │                           │
                                    │  Free: 100 RPM / 1K RPD  │
                                    │  Paid: $0.20/1M tokens    │
                                    └──────────────────────────┘
```

---

## 8. Component Architecture (Frontend)

```
App.tsx
 ├── Layout.tsx ─────────────────── App shell, nav, branding
 │    ├── <header>
 │    │    └── Logo + app name (from config)
 │    └── <main>
 │         └── {children} ←─── React Router outlet
 │
 ├── Landing.tsx ────────────────── "/" route
 │    ├── SearchBar.tsx              Big centered input
 │    │    ├── search icon (Lucide)
 │    │    ├── <input> (Poppins, 18px)
 │    │    └── ⌘K shortcut hint
 │    ├── DomainPills.tsx            Filterable domain tags
 │    │    └── maps config.domains → <button> pills
 │    ├── ModalityTabs.tsx           Content type filter
 │    │    └── maps config.modalities → <button> tabs
 │    └── FeaturedCards.tsx          Recent/popular items
 │         └── 4x ResultCard.tsx
 │
 └── Results.tsx ────────────────── "/search?q=..." route
      ├── SearchBar.tsx              Compact top bar variant
      ├── FilterSidebar.tsx          Domain + modality filters
      │    ├── DomainPills.tsx (vertical)
      │    └── ModalityTabs.tsx (vertical)
      └── ResultGrid.tsx             Search results
           └── ResultCard.tsx[]      Individual result cards
                ├── type icon (doc/img/video/api)
                ├── title (Space Grotesk)
                ├── domain pill
                ├── snippet/preview (Poppins)
                └── metadata (date, source)
```

---

## 9. Backend Service Architecture

```
packages/backend/src/

index.ts ──── Express app entry
 ├── cors, json body parser, multer (file upload)
 ├── config loader (reads ../../config.json)
 └── route mounting

routes/
 ├── config.ts ────── GET  /api/config      → return config.json
 ├── search.ts ────── POST /api/search      → SearchService.search()
 └── ingest.ts ────── POST /api/ingest      → IngestionPipeline.ingest()

services/
 ├── embeddings.ts ── GeminiEmbeddingService
 │    ├── embedText(text) → float[768]
 │    ├── embedImage(buffer, mimeType) → float[768]
 │    ├── embedMultimodal(parts[]) → float[768]
 │    ├── normalizeVector(vec) → float[768]   (L2 norm for MRL truncation)
 │    └── config: model=gemini-embedding-2-preview, dims=768
 │
 ├── vectorStore.ts ── PgVectorService (Drizzle ORM)
 │    ├── init() → run migrations, create HNSW index
 │    ├── upsert(id, vector, metadata) → void
 │    ├── search(vector, topK, filters) → Result[]  (cosine distance + WHERE)
 │    ├── delete(id) → void
 │    └── stats() → {count, domains, modalities}
 │
 ├── ingestion.ts ── IngestionPipeline
 │    ├── ingest(file, metadata) → {chunks: n, id: string}
 │    ├── chunkText(text, opts) → Chunk[]
 │    ├── chunkPDF(buffer) → Chunk[]
 │    ├── processImage(buffer) → Chunk[]
 │    └── processVideo(buffer) → Chunk[]       (v2 — extract keyframes + transcript)
 │
 └── search.ts ──── SearchService
      ├── search(query, filters) → Result[]
      ├── embedQuery(text) → float[768]         (task_type=RETRIEVAL_QUERY)
      └── applyFilters(results, filters) → Result[]

db/
 ├── schema.ts ──── Drizzle schema (knowledge table + vector column)
 ├── index.ts ───── Drizzle client init
 └── migrate.ts ─── Migration runner
```

---

## 10. Data Model — PostgreSQL + pgvector

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Main knowledge table
CREATE TABLE knowledge (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id        UUID NOT NULL,                    -- Parent document
  embedding     vector(768) NOT NULL,             -- Gemini Embedding 2 (MRL 768-dim)
  content       TEXT NOT NULL,                     -- Raw chunk text
  content_type  VARCHAR(20) NOT NULL,             -- 'text'|'image'|'video'|'api'
  domain        VARCHAR(50) NOT NULL,             -- 'ran'|'core'|'bss'|'noc'
  title         TEXT NOT NULL,                     -- Document/section title
  source_file   TEXT NOT NULL,                     -- Original filename
  section_path  TEXT,                              -- 'Install > Prerequisites'
  chunk_index   INTEGER NOT NULL DEFAULT 0,       -- Position within doc
  total_chunks  INTEGER NOT NULL DEFAULT 1,       -- Total chunks in doc
  mime_type     VARCHAR(100) NOT NULL,            -- 'text/markdown', 'image/png'
  metadata      JSONB DEFAULT '{}',               -- Extensible key-value
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- HNSW index for fast ANN cosine search
CREATE INDEX ON knowledge
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- Metadata filter indexes
CREATE INDEX idx_knowledge_domain ON knowledge(domain);
CREATE INDEX idx_knowledge_content_type ON knowledge(content_type);
CREATE INDEX idx_knowledge_doc_id ON knowledge(doc_id);
```

**Search query pattern:**

```sql
SELECT *, 1 - (embedding <=> $1) AS similarity
FROM knowledge
WHERE domain = $2 AND content_type = $3
ORDER BY embedding <=> $1
LIMIT $4;
```

---

## 11. Pluggable Config Schema

```jsonc
// config.json — the ONLY file you edit to reconfigure the app
{
    "app": {
        "name": "Knowledge Base",
        "tagline": "Multi-modal knowledge search for telecom engineers",
        "logo": "/logo.svg",
    },
    "branding": {
        "fonts": {
            "headline": "Space Grotesk",
            "body": "Poppins",
        },
        "colors": {
            "primary": "#802DC8",
            "navy": "#001C3D",
            "pink": "#EF50FF",
            "coral": "#FF4F59",
            "lilac": "#ECE1F0",
            "white": "#FFFFFF",
        },
    },
    "domains": [
        { "id": "ran", "label": "RAN / Radio", "icon": "tower-control", "color": "#802DC8" },
        { "id": "core", "label": "Core Network", "icon": "server", "color": "#001C3D" },
        { "id": "bss", "label": "BSS / OSS", "icon": "receipt", "color": "#EF50FF" },
        { "id": "noc", "label": "NOC / Operations", "icon": "monitor", "color": "#FF4F59" },
    ],
    "modalities": [
        { "id": "all", "label": "All", "icon": "layers" },
        {
            "id": "documents",
            "label": "Documents",
            "icon": "file-text",
            "extensions": [".md", ".pdf", ".docx", ".txt"],
        },
        {
            "id": "images",
            "label": "Images",
            "icon": "image",
            "extensions": [".png", ".jpg", ".jpeg", ".svg", ".webp"],
        },
        { "id": "video", "label": "Video", "icon": "video", "extensions": [".mp4", ".webm", ".mov"] },
        { "id": "api", "label": "APIs", "icon": "code", "extensions": [".yaml", ".yml", ".json", ".graphql"] },
    ],
    "search": {
        "provider": "gemini",
        "model": "gemini-embedding-2-preview",
        "dimensions": 768,
        "topK": 10,
        "taskTypes": {
            "query": "RETRIEVAL_QUERY",
            "document": "RETRIEVAL_DOCUMENT",
        },
    },
    "ingestion": {
        "chunkSize": 512,
        "chunkOverlap": 50,
        "maxFileSize": "50MB",
    },
}
```

**Why pluggable:** Change `domains` to adapt for energy, finance, or healthcare. Change `branding` to white-label. Change `search.provider` to swap Gemini for OpenAI or Ollama later.

---

## 12. Critical Technical Decisions

### Decision 1: PostgreSQL + pgvector

| Factor             | In-Memory + JSON      | PostgreSQL + pgvector (chosen) |
| ------------------ | --------------------- | ------------------------------ |
| Setup              | Zero deps             | Docker Compose + pg + pgvector |
| ANN search         | No (brute-force)      | Yes (HNSW)                     |
| Latency @ 100K     | ~7s                   | <10ms                          |
| Persistence        | Manual JSON serialize | Built-in (Postgres)            |
| Metadata filtering | Manual JS filter      | Native SQL WHERE               |
| Scale ceiling      | ~10K vectors          | 10M+ vectors                   |
| Cloud migration    | Rewrite everything    | Change DATABASE_URL — done     |

**Why Postgres:** Battle-tested, SQL you already know, HNSW indexing for ANN, and migrating to Supabase/Neon/RDS is a one-line config change. Drizzle ORM for type-safe queries.

**Local setup:** Docker Compose runs `pgvector/pgvector:pg17` on :5432.

### Decision 2: 768 dimensions (not 3072)

- 768 is 4x smaller storage, 4x faster similarity
- ~85-90% quality retention via Matryoshka
- **Requires manual L2 normalization** after truncation
- Upgrade to 3072 later if retrieval quality is insufficient

### Decision 3: REST API to Gemini (not SDK)

- No official `@google/genai` Node.js package for embeddings confirmed
- REST is stable, well-documented, zero dependency
- Thin service class with retry + rate limit backoff

### Decision 4: Semantic chunking with fixed fallback

- **Primary:** Split on markdown headings (H1→H2→H3) and paragraph boundaries
- **Fallback:** Fixed 512-token chunks with 50-token overlap for unstructured text
- **Images:** 1 chunk = 1 image (base64 → Gemini multimodal embed)
- **PDFs:** Extract text per page, then chunk

---

## 13. File Structure

```
knowledgebase/
├── package.json                       # Monorepo root
├── pnpm-workspace.yaml
├── config.json                        # ★ Pluggable config
├── .env                               # GEMINI_API_KEY, DATABASE_URL
├── docker-compose.yml                 # PostgreSQL + pgvector
├── content/                           # User's knowledge files (git-ignored)
│
├── packages/
│   ├── shared/                        # Shared TypeScript types
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts
│   │       ├── config.ts              # Config, Domain, Modality, Branding
│   │       ├── search.ts              # SearchQuery, SearchResult, SearchFilters
│   │       ├── content.ts             # Chunk, ChunkMetadata, ContentType
│   │       └── api.ts                 # API request/response types
│   │
│   ├── frontend/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── index.html
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   ├── hooks/
│   │   │   │   ├── useSearch.ts
│   │   │   │   └── useConfig.ts
│   │   │   ├── components/
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   ├── ModalityTabs.tsx
│   │   │   │   ├── DomainPills.tsx
│   │   │   │   ├── ResultCard.tsx
│   │   │   │   ├── ResultGrid.tsx
│   │   │   │   ├── FeaturedCards.tsx
│   │   │   │   ├── FilterSidebar.tsx
│   │   │   │   └── Layout.tsx
│   │   │   └── pages/
│   │   │       ├── Landing.tsx
│   │   │       └── Results.tsx
│   │   └── public/
│   │       └── logo.svg
│   │
│   └── backend/
│       ├── package.json
│       ├── src/
│       │   ├── index.ts
│       │   ├── routes/
│       │   │   ├── config.ts
│       │   │   ├── search.ts
│       │   │   └── ingest.ts
│       │   └── services/
│       │       ├── embeddings.ts
│       │       ├── vectorStore.ts
│       │       ├── ingestion.ts
│       │       └── search.ts
│       ├── db/
│       │   ├── schema.ts
│       │   ├── index.ts
│       │   └── migrate.ts
│       └── data/
│           ├── migrations/
│           └── seed/
│               ├── ran-5g-handover.md
│               ├── core-eps-architecture.md
│               ├── bss-billing-flow.md
│               └── noc-alarm-runbook.md
```

---

## 14. Implementation Phases

### Phase 1 — Scaffold

- pnpm monorepo + workspace (packages/shared, packages/frontend, packages/backend)
- Vite + React 19 + Tailwind v4 + React Router (TypeScript)
- Express + Drizzle ORM + dotenv (TypeScript)
- docker-compose.yml with `pgvector/pgvector:pg17` on :5432
- Drizzle schema + migration for `knowledge` table with vector(768) + HNSW index
- config.json with default branding
- `pnpm dev` runs Postgres + frontend + backend via concurrently

### Phase 2 — Frontend Landing

- Layout with configurable branding (fonts via config.json)
- Landing page: centered search, domain pills, modality tabs
- Tailwind config with brand color tokens from config.json
- SearchBar with ⌘K shortcut, focus animation with purple ring

### Phase 3 — Backend Core

- Gemini Embedding 2 REST client with retry + rate limit
- L2 normalization utility for 768-dim vectors
- pgvector init + upsert + ANN search via Drizzle
- Ingestion pipeline: markdown chunker with heading-aware splitting

### Phase 4 — Search E2E

- POST /api/search wired to embed → pgvector ANN → return
- Results page with ResultGrid + ResultCard
- Domain + modality filtering (SQL WHERE clauses)
- Debounced search from frontend

### Phase 5 — Seed & Polish

- 4 telco seed documents (RAN, Core, BSS, NOC)
- Ingest seed data on first run
- Featured cards on landing from recent ingestions
- File upload UI for ingestion

---

## 15. Verification Plan

| #   | Test                                  | Expected                                                  |
| --- | ------------------------------------- | --------------------------------------------------------- |
| 1   | `pnpm dev`                            | Frontend :5173 + Backend :3001 + Postgres :5432 all start |
| 2   | `GET /api/config`                     | Returns config.json with domains, modalities, branding    |
| 3   | `POST /api/ingest` with .md file      | Returns `{chunks: N, doc_id: "..."}`                      |
| 4   | `POST /api/search` with "5G handover" | Returns ranked results from RAN domain                    |
| 5   | Landing page loads                    | Branding from config, search bar, pills, tabs visible     |
| 6   | Search "billing reconciliation"       | Results filtered to BSS domain                            |
| 7   | Click "Images" modality tab           | Only image results shown                                  |
| 8   | Edit config.json: add new domain      | UI reflects new domain pill without code change           |
| 9   | `GEMINI_API_KEY` missing              | Graceful error: "Configure API key in .env"               |

---

## 16. Risk Register

| Risk                                 | Impact | Likelihood | Mitigation                                            |
| ------------------------------------ | ------ | ---------- | ----------------------------------------------------- |
| Docker not installed on dev machine  | Medium | Low        | Fallback: `brew install postgresql` + manual pgvector |
| Gemini API rate limit (100 RPM free) | Medium | High       | Queue ingestion, batch embed, cache query vectors     |
| 768-dim quality insufficient         | Medium | Low        | Config flag to switch to 3072-dim                     |
| Large PDF text extraction            | Medium | Medium     | Use pdf-parse lib; fall back to page-level chunks     |
| Video processing complexity          | High   | High       | Defer to v2; v1 indexes metadata only                 |

---

## 17. Testing Strategy

### Test Pyramid

```
        ┌───────────┐
        │   E2E     │  3-5 tests   Playwright
        │  (slow)   │  Full user flows through browser
        ├───────────┤
        │Integration│  10-15 tests  Supertest + real Postgres
        │  (medium) │  API routes with actual vector store
        ├───────────┤
        │   Unit    │  30-50 tests  Vitest
        │  (fast)   │  Services, utils, hooks, components
        └───────────┘
```

### Unit Tests (Vitest)

**Backend:**

- `embeddings.test.ts` — Mock Gemini API, test L2 normalize, retry logic
- `ingestion.test.ts` — Chunking: markdown splitting, overlap, metadata extraction
- `vectorStore.test.ts` — Upsert/search with mocked DB
- `search.test.ts` — Filter application, ranking, empty results

**Frontend:**

- `SearchBar.test.tsx` — Renders, ⌘K focus, submit on Enter, debounce
- `DomainPills.test.tsx` — Renders from config, toggle active state
- `ModalityTabs.test.tsx` — Tab switching, "All" default
- `ResultCard.test.tsx` — Renders per content type
- `useSearch.test.ts` — Debounce timing, loading state, error handling
- `useConfig.test.ts` — Fetch, cache, fallback on failure

### Integration Tests (Supertest + Vitest)

| Test                | Action                                    | Assert                           |
| ------------------- | ----------------------------------------- | -------------------------------- |
| Ingest markdown     | `POST /api/ingest` with .md               | 200, chunks > 0, rows in DB      |
| Search after ingest | `POST /api/search {query: "5G handover"}` | results[0].domain === "ran"      |
| Filter by domain    | `POST /api/search {domain: "core"}`       | All results domain "core"        |
| Filter by modality  | `POST /api/search {modality: "images"}`   | All content_type "image"         |
| Config endpoint     | `GET /api/config`                         | 200, has domains[], modalities[] |
| Missing API key     | Unset GEMINI_API_KEY                      | 500, error message               |
| Empty query         | `POST /api/search {query: ""}`            | 400, "Query required"            |
| Large file reject   | `POST /api/ingest` 100MB                  | 413, "File exceeds limit"        |

**Infra:** Test-specific DB (`knowledgebase_test`), truncated before each suite. Gemini API mocked with deterministic seeded vectors.

### E2E Tests (Playwright)

| Flow               | Validates                                           |
| ------------------ | --------------------------------------------------- |
| Landing renders    | Title, search bar, 4 domain pills, 5 modality tabs  |
| Search happy path  | Navigate to results, cards with title + domain pill |
| Domain filtering   | Only RAN results, active pill styling               |
| Modality filtering | Only document results                               |
| ⌘K shortcut        | Search bar focuses                                  |
| Empty results      | "No results found" state                            |

### Test Commands

```bash
pnpm --filter backend test              # Unit
pnpm --filter frontend test             # Unit
pnpm --filter backend test:integration  # Integration (~30s)
pnpm test:e2e                           # E2E (~60s)
pnpm test                               # All
pnpm test:coverage                      # Coverage
```

### CI Pipeline (GitHub Actions)

```yaml
test:
    steps:
        - pnpm install
        - pnpm --filter backend test
        - pnpm --filter frontend test
        - pnpm --filter backend test:integration
        - pnpm build
        - pnpm test:e2e
```
