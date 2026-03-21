# packages/ui

Shared React component library consumed by `frontend` and future `admin` package.

## Rules

- Can import from: `core`, `utils`, `content`
- Must not import from: `frontend`, `backend`, `ai`, `config`
- Ships as source TypeScript — no pre-compilation (Vite resolves workspace deps directly)
- Every component must be accessible (keyboard navigable, proper ARIA)
- Components are styled with Tailwind — no inline styles

## Component Conventions

- One component per file, named export
- Props defined with `interface`
- Accept `className` prop for style overrides via Tailwind merge
- No internal state management — keep components presentational
- Document props with JSDoc

## Structure

```
src/
  index.ts           ← barrel export
  Button.tsx
  Input.tsx
  Card.tsx
  Layout.tsx
  SearchBar.tsx
  DomainPill.tsx
  ModalityTab.tsx
  ResultCard.tsx
```

## Commands

```bash
pnpm --filter ui build
pnpm --filter ui test
```
