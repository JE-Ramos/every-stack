# .github/

GitHub configuration — CI/CD workflows, Dependabot, CODEOWNERS, issue/PR templates.

## Branch Protection (`main`)

- **No direct pushes** — all changes go through pull requests
- **1 approval required** — stale reviews are dismissed on new pushes
- **Required CI checks**: install, lint, format, typecheck, test, build
- **Branch must be up to date** before merging (strict status checks)
- **Linear history enforced** — no merge commits
- **Force push and branch deletion blocked**

## Merge Strategy

- **Squash merge only** — commit title uses PR title, body uses PR body
- **Branches auto-delete** after merge

## Workflow Rules

- Workflows use pnpm caching via `actions/setup-node` with `cache: pnpm`
- pnpm version is set via `packageManager` field in root `package.json`
- All workflows pin action versions (e.g. `actions/checkout@v4`, not `@main`)
- `CODEOWNERS` enforces ownership by `@JE-Ramos` — update when adding new packages
- Dependabot groups deps by dev/prod to reduce PR noise

## Workflows

| File             | Trigger                 | Purpose                                           |
| ---------------- | ----------------------- | ------------------------------------------------- |
| `ci.yml`         | PR + push to main       | Lint, format, typecheck, test, build, bundle size |
| `security.yml`   | PR + push + weekly cron | CodeQL, pnpm audit, license check                 |
| `lighthouse.yml` | PR only                 | Performance, a11y, SEO audits                     |
| `release.yml`    | Push to main            | release-please auto-versioning                    |

## Templates

| File                         | Purpose                                     |
| ---------------------------- | ------------------------------------------- |
| `pull_request_template.md`   | PR checklist — type, summary, quality gates |
| `ISSUE_TEMPLATE/bug.yml`     | Structured bug report form                  |
| `ISSUE_TEMPLATE/feature.yml` | Structured feature request form             |
