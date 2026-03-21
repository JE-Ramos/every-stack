# React Conventions

Applies to `packages/frontend`, `packages/ui`, and any future React packages (e.g. `packages/admin`).

## Project Structure

Organize code by feature, not by file type:

```
src/
  features/
    search/
      SearchBar.tsx
      SearchResults.tsx
      useSearch.ts
      search.types.ts
      search.test.ts
    ingest/
      UploadForm.tsx
      useIngest.ts
      ingest.types.ts
  hooks/            ← shared hooks (not feature-specific)
  lib/              ← shared utilities (API client, etc.)
  pages/            ← route-level page components
  App.tsx
  main.tsx
  index.css
```

Collocate related code — a component, its hook, its types, and its tests live in the same feature folder.

## Components

- One component per file, named export matching the filename
- PascalCase for component names and filenames
- Named exports only (no `export default`) except for page components — required for react-refresh HMR
- Props defined with `interface`, not `type`
- Pure and stateless where possible — single responsibility

```typescript
// Good
export function SearchBar({ query, onSearch }: SearchBarProps) { ... }

// Bad — default export, anonymous
export default function ({ query, onSearch }: any) { ... }
```

## Memoization

- **Do not** use `useMemo`, `useCallback`, or `React.memo` manually
- The React Compiler (babel-plugin-react-compiler) handles all memoization automatically
- If the compiler skips a component, fix the underlying purity issue rather than adding manual memoization

## Hooks

- Custom hooks prefixed with `use` — placed in the feature folder or shared `hooks/` directory
- Hooks must be called at the top level only (enforced by `eslint-plugin-react-hooks`)
- Extract complex logic into custom hooks to keep components thin

## Styling

- Tailwind CSS for all styling — no inline `style` props, no CSS modules, no styled-components
- Class order is auto-sorted by `prettier-plugin-tailwindcss`
- Use Tailwind's design tokens for colors, spacing, typography — do not hardcode values

## State Management

- Start with React's built-in state (`useState`, `useReducer`, `useContext`)
- Lift state up before reaching for external state libraries
- Use URL state (search params via `react-router`) for state that should survive page refresh

## Accessibility

- All interactive elements must be keyboard accessible
- Images must have `alt` text
- Form inputs must have associated labels
- Enforced by `eslint-plugin-jsx-a11y/strict`

## StrictMode

- `<React.StrictMode>` wraps the entire app in `main.tsx`
- Double-renders in development catch impure components
- Zero cost in production
