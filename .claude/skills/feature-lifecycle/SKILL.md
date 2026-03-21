---
name: feature-lifecycle
description: "End-to-end feature workflow: PRD → Technical Design → Test-Driven Development. Use when building a new feature from scratch, creating a PRD, writing a technical design document, or implementing with test-first methodology."
argument-hint: "[feature-name or problem statement]"
disable-model-invocation: true
---

# Feature Lifecycle

Three-phase workflow that takes a feature from idea to production-ready code.

**Input**: A feature name, problem statement, or user request via `$ARGUMENTS`.
**Output**: PRD doc, Technical Design doc, and implemented code with tests.

## Workflow

```
Phase 1: PRD              → docs/plans/YYYY-MM-DD-feature-name.md
Phase 2: Technical Design  → docs/rfcs/NNN-feature-name.md
Phase 3: TDD              → packages/*/src/** (tests first, then implementation)
```

Run phases sequentially. Confirm with the user before advancing to the next phase.

---

## Phase 1: Product Requirements Document

**Goal**: Define WHAT we're building and WHY.

1. Read the PRD template: `${CLAUDE_SKILL_DIR}/prd-template.md`
2. Ask the user for any missing context:
   - Who is the target user?
   - What problem are they experiencing?
   - How will we measure success?
   - What's explicitly out of scope?
3. Generate the PRD at `docs/plans/YYYY-MM-DD-$ARGUMENTS.md`
   - Replace `{{FEATURE_NAME}}`, `{{DATE}}`, `{{PERSONA}}` placeholders
   - Fill all sections — leave `—` for unknowns the user needs to resolve
   - Acceptance criteria must be specific and testable (Given/When/Then)
   - Success metrics must have current baselines and targets
4. Present the PRD to the user for review
5. Iterate until the user approves

**Quality gate**: Every user story has acceptance criteria. Success metrics are defined. Scope boundaries are explicit.

---

## Phase 2: Technical Design Document

**Goal**: Define HOW we're building it.

1. Read the approved PRD from Phase 1
2. Read the TDD template: `${CLAUDE_SKILL_DIR}/tdd-template.md`
3. Read the codebase to understand:
   - Existing patterns in `packages/` that this feature should follow
   - Import boundaries from the root `AGENTS.md`
   - Relevant rules from `.claude/rules/` (react.md, typescript.md)
4. Generate the Technical Design at `docs/rfcs/NNN-feature-name.md`
   - Architecture: C4 diagrams (Mermaid), component layout, data flow
   - API design: endpoints, request/response shapes, error codes
   - Data model: tables, migrations, rollback procedure
   - State management: server state vs. client state vs. URL state
   - Alternatives considered: at least two options with trade-offs
   - Test strategy: what to test at each layer, what NOT to test
   - Rollout plan: feature flags, canary %, monitoring, kill switch
5. Present the design to the user for review
6. If the design reveals architectural decisions worth preserving, offer to create an ADR at `docs/adrs/NNN-decision.md`

**Quality gate**: API contract is defined. Test strategy covers unit + integration + E2E. Rollout plan has a kill switch.

---

## Phase 3: Test-Driven Development

**Goal**: BUILD it, tests first.

Follow the Red-Green-Refactor cycle strictly:

### Step 1: Write Failing Tests (Red)

From the Technical Design's test strategy:

1. **Unit tests first** — Pure logic, utilities, transformers
   - Create test files before implementation files
   - Each test encodes one acceptance criterion from the PRD
   - Use `vitest` with descriptive `describe`/`it` blocks

2. **Integration tests** — Component behavior, API handlers
   - Frontend: Testing Library + MSW for API mocking
   - Backend: Supertest or similar for endpoint testing

3. **E2E tests for critical paths only** — Playwright
   - Only for flows listed as "critical path" in the Technical Design

Run tests to confirm they fail: `pnpm test`

### Step 2: Implement to Pass (Green)

Write the minimum code to make each test pass:

1. Follow the component/module structure from the Technical Design
2. Respect import boundaries from `AGENTS.md`
3. Apply conventions from `.claude/rules/` (no `any`, no `console.log`, `import type` for types)
4. After each module, run `pnpm test` to confirm green
5. If the Technical Design specified new API endpoints, update `specs/api.openapi.yaml` and run `pnpm generate:api`

### Step 3: Refactor (Refactor)

Once all tests pass:

1. Remove duplication
2. Extract shared utilities to appropriate packages (`core`, `utils`)
3. Ensure naming consistency
4. Run the full check: `pnpm lint && pnpm typecheck && pnpm test`

### Step 4: Verify

- [ ] All tests pass: `pnpm test`
- [ ] Lint clean: `pnpm lint`
- [ ] Types clean: `pnpm typecheck`
- [ ] Build succeeds: `pnpm build`
- [ ] Feature flag is in place (if rollout plan requires it)
- [ ] Analytics instrumentation matches the PRD's success metrics

**Quality gate**: All tests pass. No lint errors. No type errors. Build succeeds.

---

## Phase Transitions

After each phase, present a summary:

```
✓ Phase N complete: [brief description]
  Output: [file path]
  
→ Ready for Phase N+1: [what happens next]
  Proceed? [y/n]
```

The user can stop after any phase. A PRD without implementation is still valuable. A Technical Design without code is still valuable.

## File Naming Conventions

| Document | Path | Naming |
|----------|------|--------|
| PRD | `docs/plans/` | `YYYY-MM-DD-feature-name.md` |
| Technical Design | `docs/rfcs/` | `NNN-feature-name.md` (sequential) |
| ADR (if needed) | `docs/adrs/` | `NNN-decision-title.md` (sequential) |
| Tests | `packages/*/src/` | `*.test.ts` / `*.test.tsx` colocated with source |
| Implementation | `packages/*/src/` | Follow existing package conventions |
