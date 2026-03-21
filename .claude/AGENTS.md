# .claude/

AI agent configuration — rules, commands, and skills for Claude Code.

## Structure

- `rules/` — Always-applied coding conventions (react.md, typescript.md)
- `commands/` — Role-based AI personas (36 roles: backend-engineer, frontend-engineer, etc.)
- `skills/` — Project-specific capabilities (add-module, etc.)

## Rules

- Rules in `rules/` apply automatically based on file patterns
- Commands in `commands/` are invoked by name (e.g. `/backend-engineer`)
- Skills in `skills/` are discovered automatically when relevant to the task
- Do not edit files in `commands/` without understanding the role persona
