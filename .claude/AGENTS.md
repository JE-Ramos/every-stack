# .claude/

AI agent configuration — rules and skills for Claude Code.

## Structure

- `rules/` — Always-applied coding conventions (react.md, typescript.md)
- `skills/` — Project-specific capabilities (add-module)

## Invocation Model

- Rules in `rules/` apply automatically based on file patterns
- **Project capabilities** (add-module) auto-invoke when Claude detects relevant context

## Premium Skills (separate repo)

36 role-based engineering personas + feature-lifecycle workflow are available separately at [every-stack-skills](https://github.com/JE-Ramos/every-stack-skills). Install by copying into `.claude/skills/` or `~/.claude/skills/`.
