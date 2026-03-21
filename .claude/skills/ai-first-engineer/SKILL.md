---
name: ai-first-engineer
description: "Guide to AI-First Engineering — specification-driven development, CLAUDE.md/GEMINI.md context mastery, multi-model workflows, MCP servers, hooks, and skills. Use this skill whenever the user asks about AI-assisted development workflows, prompt engineering for code, managing AI coding agents, or building AI-first team practices."
disable-model-invocation: true
---

# AI-First Engineer

> The engineer who treats AI agents as core infrastructure, not optional tooling — shipping 10x through specification-driven development, context mastery, and disciplined human-AI collaboration.

## What Elite Looks Like

A staff-level AI-first engineer doesn't just use AI tools — they architect workflows around them. They treat Claude Code, Gemini CLI, and Codex as team members with specific strengths, configuring each with persistent context files, custom commands, and quality gates. They write specifications before prompting, break work into focused task threads, and review AI output with the same rigor they'd apply to a junior developer's PR. The result: dramatically higher throughput without sacrificing code quality, security, or maintainability.

What separates elite from competent:
- **Specification-driven development**: Writes clear specs before letting AI code (GitHub Spec Kit: Specify → Plan → Tasks → Implement)
- **Context mastery**: Maintains CLAUDE.md / GEMINI.md / AGENTS.md as living documents that evolve with the project
- **Role-based workflows**: Uses systems like gstack (CEO → Eng Manager → Engineer → QA → Ship) to force strategic thinking before implementation
- **Iterative discipline**: Breaks problems into small chunks, refines through multiple passes — never dumps a massive prompt and hopes
- **Tool composition**: Connects MCP servers, hooks, skills, and custom commands into a personal development platform
- **Multi-model fluency**: Knows when to use Claude for architecture, Gemini for multimodal, Codex for parallel execution

## Core Responsibilities

- Define and maintain AI-assisted development workflows for the team
- Create and curate CLAUDE.md, GEMINI.md, AGENTS.md project context files
- Build custom slash commands, skills, and hooks that encode team best practices
- Set up MCP server integrations (GitHub, Jira, Playwright, Sentry, databases)
- Establish quality gates: pre-commit hooks, automated test runs, security scans
- Train team members on effective AI-assisted workflows
- Evaluate and adopt new AI development tools as they emerge
- Write specifications that AI agents can execute with minimal ambiguity
- Review AI-generated code for logical errors, security flaws, and architectural drift

## Key Skills & Tools

### AI Coding Agents

| Tool | Key Skills |
|------|-----------|
| **Claude Code** | CLAUDE.md hierarchy (root + subdirectory), custom slash commands in `.claude/commands/`, MCP server integration, hooks for quality gates, plan mode for architecture, subagents for parallel exploration, `/init` for project bootstrap, session naming and `/clear` for context management |
| **Gemini CLI** | GEMINI.md project context, `/memory add` for quick notes, checkpointing before multi-step edits, hooks with matcher property, running from project root, extension configuration |
| **OpenAI Codex** | AGENTS.md for durable guidance, agent skills (focused single-job packages), one thread per task, MCP connections to external systems, parallel task execution |

### Prompt Engineering
- Context-rich prompts: always include relevant code, constraints, and acceptance criteria
- Role-based prompting: assign personas (code reviewer, security auditor, architect) to uplevel responses
- Iterative refinement: step through logic, refine through multiple rounds
- Negative prompting: explicitly state what NOT to do

### Workflow Orchestration
- Spec-driven development (GitHub Spec Kit)
- Role-based AI development (gstack pattern)
- MCP (Model Context Protocol) server setup and management
- Hook systems for automated quality gates
- Custom command/skill authoring

### Core Engineering Fundamentals
- Software architecture and system design (you must understand what you're asking AI to build)
- Security analysis and threat modeling
- Performance profiling and optimization
- Testing strategy and test-driven development
- Version control and collaborative workflows

## The AI-First Workflow

Inspired by Garry Tan's gstack and Addy Osmani's LLM coding workflow:

### 1. Specify
Write a clear spec capturing intent, constraints, and acceptance criteria. Use structured formats:
```markdown
## Problem
What needs to change and why.

## Constraints
- Must work with existing auth system
- Cannot exceed 200ms p99 latency
- Must maintain backward compatibility

## Acceptance Criteria
- [ ] User can do X
- [ ] System handles Y edge case
- [ ] Tests cover Z scenarios
```

### 2. Plan
- **CEO-level review** (`/plan-ceo-review` in gstack): Is this the right problem? Does the solution align with product goals?
- **Engineering review** (`/plan-eng-review`): Architecture, data flow, failure modes, test strategy

### 3. Implement
- One function/feature per prompt — never dump the entire task
- Break into focused task threads (Codex: one thread per task, not per project)
- Provide build/test commands so the agent can verify its own work
- Use plan mode (Claude Code) for architectural decisions before writing code

### 4. Review
- Code review pass (`/review` in gstack): production risks, security, edge cases
- Review AI output line by line — treat it like a junior developer's PR
- Check for: logical errors, security flaws, requirement mismatches, architectural drift

### 5. Test
- QA pass (`/qa` in gstack): systematic testing of affected routes and flows
- Run the full test suite, not just the new tests
- Check integration points and edge cases the AI might have missed

### 6. Ship
- Sync with main, run tests, open PR (`/ship` in gstack)
- Retrospective (`/retro`): what worked, what didn't, update context files

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails | What to Do Instead |
|-------------|-------------|-------------------|
| Vibe coding in production | Works for prototypes, creates tech debt at scale | Sandbox for exploration, discipline for production |
| Overloading prompts with rules | Rules get lost in long prompts, inconsistently applied | Move durable rules to CLAUDE.md / AGENTS.md |
| Not providing build/test commands | Agent can't verify its own work, ships broken code | Always include how to build, test, and validate |
| Treating AI output as correct | AI hallucinates, misses edge cases, introduces vulnerabilities | Review every line like a PR from a junior dev |
| One mega-thread | Context degrades, agent loses focus | One thread per task, fresh context per feature |
| Skipping specification | AI guesses at requirements, builds the wrong thing | Always spec first, even for "small" changes |
| Not updating context files | Agent repeats same mistakes across sessions | Update CLAUDE.md after every correction |
| Watching the agent step-by-step | Wastes your time, doesn't improve output | Launch parallel tasks, review results |

## How They Collaborate

- **All engineering roles**: Establishes AI-assisted workflows, trains on effective prompting, maintains shared context files
- **Tech Lead / Architect**: Aligns AI workflow with architectural decisions, ensures AI-generated code follows patterns
- **QA Engineer**: Sets up automated testing hooks, ensures AI output meets quality gates
- **Security Engineer**: Configures security-focused review prompts, catches AI-introduced vulnerabilities
- **Engineering Manager**: Reports on AI productivity metrics, identifies workflow improvements
- **Product Manager**: Translates product specs into AI-executable specifications

## Hiring Signals

### Green Flags
- Shows their CLAUDE.md / AGENTS.md and explains why each rule exists
- Can articulate when AI tools help vs. when they hurt
- Demonstrates spec-driven workflow with real examples
- Has built custom commands/skills for their team
- Reviews AI output critically — can point to bugs they caught
- Uses multiple AI tools and knows each one's strengths
- Treats AI context files as first-class project artifacts

### Red Flags
- "I just paste the error and it fixes it" (no systematic workflow)
- Can't explain what the AI-generated code does
- No quality gates or review process for AI output
- Uses one tool for everything with no customization
- Treats AI as infallible — "it always works"
- No specification or planning phase before prompting

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Uses AI tools for code completion and simple tasks. Follows team's established AI workflows |
| **Mid** | Writes effective prompts, maintains personal context files, uses plan mode for complex features |
| **Senior** | Builds custom commands and skills, sets up MCP integrations, trains teammates on AI workflows |
| **Staff** | Architects team-wide AI workflows, evaluates new tools, establishes quality gates, writes specifications that AI agents execute autonomously with high fidelity |
| **Principal** | Defines org-wide AI development strategy, creates reusable frameworks (like gstack), measures and optimizes AI-assisted productivity across teams |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

