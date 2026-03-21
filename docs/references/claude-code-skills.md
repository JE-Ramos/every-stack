---
title: "Claude Code Skills Reference"
date: 2026-03-21
tags: [claude-code, skills, reference, ai-tooling]
source: https://code.claude.com/docs/en/skills
---

# Extend Claude with skills

> Create, manage, and share skills to extend Claude's capabilities in Claude Code. Includes custom commands and bundled skills.

Skills extend what Claude can do. Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with `/skill-name`.

**Custom commands have been merged into skills.** A file at `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` both create `/deploy` and work the same way. Your existing `.claude/commands/` files keep working. Skills add optional features: a directory for supporting files, frontmatter to control whether you or Claude invokes them, and the ability for Claude to load them automatically when relevant.

Claude Code skills follow the [Agent Skills](https://agentskills.io) open standard, which works across multiple AI tools. Claude Code extends the standard with additional features like invocation control, subagent execution, and dynamic context injection.

## Bundled skills

Bundled skills ship with Claude Code and are available in every session. Unlike built-in commands, which execute fixed logic directly, bundled skills are prompt-based: they give Claude a detailed playbook and let it orchestrate the work using its tools.

| Skill                       | Purpose                                                                                                                                                                                                                                                                            |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/batch <instruction>`      | Orchestrate large-scale changes across a codebase in parallel. Researches the codebase, decomposes the work into 5 to 30 independent units, and presents a plan. Once approved, spawns one background agent per unit in an isolated git worktree.                                  |
| `/claude-api`               | Load Claude API reference material for your project's language and Agent SDK reference. Covers tool use, streaming, batches, structured outputs, and common pitfalls. Also activates automatically when your code imports `anthropic`, `@anthropic-ai/sdk`, or `claude_agent_sdk`. |
| `/debug [description]`      | Troubleshoot your current Claude Code session by reading the session debug log. Optionally describe the issue to focus the analysis.                                                                                                                                               |
| `/loop [interval] <prompt>` | Run a prompt repeatedly on an interval while the session stays open. Useful for polling a deployment, babysitting a PR, or periodically re-running another skill.                                                                                                                  |
| `/simplify [focus]`         | Review your recently changed files for code reuse, quality, and efficiency issues, then fix them. Spawns three review agents in parallel.                                                                                                                                          |

## Where skills live

| Location   | Path                                     | Applies to                     |
| :--------- | :--------------------------------------- | :----------------------------- |
| Enterprise | See managed settings                     | All users in your organization |
| Personal   | `~/.claude/skills/<skill-name>/SKILL.md` | All your projects              |
| Project    | `.claude/skills/<skill-name>/SKILL.md`   | This project only              |
| Plugin     | `<plugin>/skills/<skill-name>/SKILL.md`  | Where plugin is enabled        |

When skills share the same name across levels, higher-priority locations win: enterprise > personal > project.

### Automatic discovery from nested directories

When you work with files in subdirectories, Claude Code automatically discovers skills from nested `.claude/skills/` directories (e.g. `packages/frontend/.claude/skills/`). This supports monorepo setups where packages have their own skills.

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── template.md        # Template for Claude to fill in
├── examples/
│   └── sample.md      # Example output showing expected format
└── scripts/
    └── validate.sh    # Script Claude can execute
```

## Types of skill content

**Reference content** adds knowledge Claude applies to your current work. Conventions, patterns, style guides, domain knowledge. This content runs inline so Claude can use it alongside your conversation context.

**Task content** gives Claude step-by-step instructions for a specific action, like deployments, commits, or code generation. These are often actions you want to invoke directly with `/skill-name` rather than letting Claude decide when to run them. Add `disable-model-invocation: true` to prevent Claude from triggering it automatically.

## Frontmatter reference

| Field                      | Required    | Description                                                                                                                                           |
| :------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                     | No          | Display name for the skill. If omitted, uses the directory name. Lowercase letters, numbers, and hyphens only (max 64 characters).                    |
| `description`              | Recommended | What the skill does and when to use it. Claude uses this to decide when to apply the skill.                                                           |
| `argument-hint`            | No          | Hint shown during autocomplete to indicate expected arguments. Example: `[issue-number]` or `[filename] [format]`.                                    |
| `disable-model-invocation` | No          | Set to `true` to prevent Claude from automatically loading this skill. Use for workflows you want to trigger manually with `/name`. Default: `false`. |
| `user-invocable`           | No          | Set to `false` to hide from the `/` menu. Use for background knowledge users shouldn't invoke directly. Default: `true`.                              |
| `allowed-tools`            | No          | Tools Claude can use without asking permission when this skill is active.                                                                             |
| `model`                    | No          | Model to use when this skill is active.                                                                                                               |
| `effort`                   | No          | Effort level when this skill is active. Overrides the session effort level. Options: `low`, `medium`, `high`, `max` (Opus 4.6 only).                  |
| `context`                  | No          | Set to `fork` to run in a forked subagent context.                                                                                                    |
| `agent`                    | No          | Which subagent type to use when `context: fork` is set.                                                                                               |
| `hooks`                    | No          | Hooks scoped to this skill's lifecycle.                                                                                                               |

## String substitutions

| Variable               | Description                                                                                                                  |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `$ARGUMENTS`           | All arguments passed when invoking the skill. If not present in the content, arguments are appended as `ARGUMENTS: <value>`. |
| `$ARGUMENTS[N]`        | Access a specific argument by 0-based index, such as `$ARGUMENTS[0]` for the first argument.                                 |
| `$N`                   | Shorthand for `$ARGUMENTS[N]`, such as `$0` for the first argument.                                                          |
| `${CLAUDE_SESSION_ID}` | The current session ID.                                                                                                      |
| `${CLAUDE_SKILL_DIR}`  | The directory containing the skill's `SKILL.md` file.                                                                        |

## Supporting files

Skills can include multiple files in their directory. This keeps `SKILL.md` focused on the essentials while letting Claude access detailed reference material only when needed.

```
my-skill/
├── SKILL.md (required - overview and navigation)
├── reference.md (detailed API docs - loaded when needed)
├── examples.md (usage examples - loaded when needed)
└── scripts/
    └── helper.py (utility script - executed, not loaded)
```

Reference supporting files from `SKILL.md` so Claude knows what each file contains and when to load it:

```markdown
## Additional resources

- For complete API details, see [reference.md](reference.md)
- For usage examples, see [examples.md](examples.md)
```

**Keep `SKILL.md` under 500 lines.** Move detailed reference material to separate files.

## Control who invokes a skill

Two frontmatter fields control invocation:

- **`disable-model-invocation: true`**: Only you can invoke the skill. Use for workflows with side effects or that you want to control timing. Claude won't auto-load it. **Description is NOT loaded into context.**
- **`user-invocable: false`**: Only Claude can invoke the skill. Use for background knowledge that isn't actionable as a command. **Description IS loaded into context.**

| Frontmatter                      | You can invoke | Claude can invoke | When loaded into context                                     |
| :------------------------------- | :------------- | :---------------- | :----------------------------------------------------------- |
| (default)                        | Yes            | Yes               | Description always in context, full skill loads when invoked |
| `disable-model-invocation: true` | Yes            | No                | Description not in context, full skill loads when you invoke |
| `user-invocable: false`          | No             | Yes               | Description always in context, full skill loads when invoked |

## Context budget

Skill descriptions are loaded into context so Claude knows what's available. If you have many skills, they may exceed the character budget. The budget scales dynamically at **2% of the context window**, with a fallback of **16,000 characters**. Run `/context` to check for a warning about excluded skills.

To override the limit, set the `SLASH_COMMAND_TOOL_CHAR_BUDGET` environment variable.

## Dynamic context injection

The `` !`<command>` `` syntax runs shell commands before the skill content is sent to Claude. The command output replaces the placeholder.

```yaml
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context
- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`
- Changed files: !`gh pr diff --name-only`

## Your task
Summarize this pull request...
```

## Run skills in a subagent

Add `context: fork` to your frontmatter when you want a skill to run in isolation. The skill content becomes the prompt that drives the subagent. It won't have access to your conversation history.

**Warning**: `context: fork` only makes sense for skills with explicit instructions. If your skill contains guidelines without a task, the subagent receives the guidelines but no actionable prompt, and returns without meaningful output.

| Approach                     | System prompt                             | Task                        | Also loads                   |
| :--------------------------- | :---------------------------------------- | :-------------------------- | :--------------------------- |
| Skill with `context: fork`   | From agent type (`Explore`, `Plan`, etc.) | SKILL.md content            | CLAUDE.md                    |
| Subagent with `skills` field | Subagent's markdown body                  | Claude's delegation message | Preloaded skills + CLAUDE.md |

The `agent` field specifies which subagent configuration to use. Options include built-in agents (`Explore`, `Plan`, `general-purpose`) or any custom subagent from `.claude/agents/`. If omitted, uses `general-purpose`.

## Restrict Claude's skill access

Three ways to control which skills Claude can invoke:

1. **Disable all skills** by denying the Skill tool in `/permissions`
2. **Allow or deny specific skills** using permission rules: `Skill(name)` for exact match, `Skill(name *)` for prefix match
3. **Hide individual skills** by adding `disable-model-invocation: true` to their frontmatter

The `user-invocable` field only controls menu visibility, not Skill tool access. Use `disable-model-invocation: true` to block programmatic invocation.

## Extended thinking

To enable extended thinking in a skill, include the word "ultrathink" anywhere in your skill content.

## Troubleshooting

### Skill not triggering

1. Check the description includes keywords users would naturally say
2. Verify the skill appears in `What skills are available?`
3. Try rephrasing your request to match the description more closely
4. Invoke it directly with `/skill-name` if the skill is user-invocable

### Skill triggers too often

1. Make the description more specific
2. Add `disable-model-invocation: true` if you only want manual invocation

### Claude doesn't see all my skills

If you have many skills, they may exceed the character budget (2% of context window, ~16,000 chars fallback). Run `/context` to check. Override with `SLASH_COMMAND_TOOL_CHAR_BUDGET` environment variable.
