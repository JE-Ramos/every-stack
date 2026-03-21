# .claude/

AI agent configuration — rules and skills for Claude Code.

## Structure

- `rules/` — Always-applied coding conventions (react.md, typescript.md)
- `skills/` — Role-based personas (36 roles) + project capabilities (add-module)

## Invocation Model

- Rules in `rules/` apply automatically based on file patterns
- **Role personas** (ai-engineer, frontend-engineer, etc.) use `disable-model-invocation: true` — invoke manually with `/skill-name`
- **Project capabilities** (add-module) auto-invoke when Claude detects relevant context
- Each skill's RTFM/references section lives in a separate `references.md` for progressive disclosure
