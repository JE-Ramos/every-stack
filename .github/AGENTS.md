# .github/

GitHub configuration — CI/CD workflows, Dependabot, CODEOWNERS, issue/PR templates.

## Rules

- Workflows use pnpm caching via `actions/setup-node` with `cache: pnpm`
- All workflows pin action versions (e.g. `actions/checkout@v4`, not `@main`)
- `CODEOWNERS` enforces team ownership — update when adding new packages
- Dependabot groups deps by dev/prod to reduce PR noise

## Workflows

| File             | Trigger                 | Purpose                                           |
| ---------------- | ----------------------- | ------------------------------------------------- |
| `ci.yml`         | PR + push to main       | Lint, format, typecheck, test, build, bundle size |
| `security.yml`   | PR + push + weekly cron | CodeQL, pnpm audit, license check                 |
| `lighthouse.yml` | PR only                 | Performance, a11y, SEO audits                     |
| `release.yml`    | Push to main            | release-please auto-versioning                    |
