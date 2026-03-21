# packages/content

Static UI text and copy. JSON data, no database relations. Consumed by frontend and UI packages.

## Rules

- Can import from: `core`
- Must not import from: `frontend`, `backend`, `ai`, `config`, `utils`
- All text is static — no runtime fetching, no i18n framework yet
- Export as typed constants, not raw JSON
