# TypeScript Conventions

Based on [mkosir/typescript-style-guide](https://mkosir.github.io/typescript-style-guide/) and enforced by `typescript-eslint/strict` + `typescript-eslint/stylistic`.

## Types

- Use `interface` for component props and object shapes (enforced by `typescript-eslint/stylistic`)
- Use `type` only for unions, intersections, and utility types
- Use `import type` for type-only imports (enforced by `verbatimModuleSyntax`)
- Prefer type inference — only annotate when narrowing a type
- Never use type assertions (`as`) — use type guards and proper type definitions
- Use discriminated unions over sprawling optional properties

## Enums

- String enums everywhere — one pattern across frontend and backend (matches NestJS idiom)
- All enum members must be literal values (enforced by `prefer-literal-enum-member`)
- Prefer string values over numeric values for readability and debuggability

```typescript
// Good
enum ContentType {
    Text = "text",
    Image = "image",
    Video = "video",
    Api = "api",
}

// Bad — numeric enum, no type safety
enum ContentType {
    Text,
    Image,
    Video,
    Api,
}
```

## Immutability

- Use `Readonly<T>` for object parameters that should not be mutated
- Use `ReadonlyArray<T>` (or `readonly T[]`) for array parameters
- Return new objects/arrays instead of mutating inputs
- Use `as const` for constant objects that need literal types

## Functions

- Functions should be pure and stateless where possible
- Single responsibility — one function does one thing
- Prefer named function declarations for top-level functions
- Use arrow functions for callbacks and inline expressions

## Naming

- `PascalCase` for types, interfaces, enums, classes, React components
- `camelCase` for variables, functions, methods, properties
- `SCREAMING_SNAKE_CASE` for true constants (compile-time values)
- Prefix boolean variables with `is`, `has`, `should`, `can`
- Prefix custom hooks with `use`

## Error Handling

- Use discriminated union result types over try/catch where practical
- Never silently swallow errors — always log or propagate
- Type error responses explicitly — no `catch (e: any)`
