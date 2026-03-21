---
name: tech-lead
description: "Guide to Tech Leadership — technical direction, code review, ADRs/RFCs, mentorship, balancing coding with leadership. Use this skill whenever the user asks about tech lead responsibilities, leading engineering teams technically, writing ADRs, or transitioning from IC to tech lead."
disable-model-invocation: true
---

# Tech Lead
> The force multiplier who makes the entire team better by combining deep technical expertise with the judgment to know when to code, when to delegate, and when to step back.

## What Elite Looks Like

An elite tech lead is not the best coder on the team — they are the person who makes the team ship the best code. They hold the technical vision for their domain, translate business needs into engineering plans, and create the conditions for every engineer to do their best work. They write code strategically: prototyping critical paths, unblocking others with spikes, and reviewing pull requests with the rigor and empathy that elevates the whole team's craft. They are the connective tissue between product, architecture, and delivery — absorbing ambiguity from above and radiating clarity downward.

Elite tech leads operate with a bias toward written communication. They produce Architecture Decision Records (ADRs) not because process demands it but because they understand that decisions without documentation are decisions without accountability. They write RFCs that invite genuine debate, not rubber-stamping. They know that the most valuable artifact of a design discussion is often the list of options that were rejected and why.

They manage technical debt like a financial portfolio — accepting some strategically, paying down others deliberately, and ensuring the team always knows the current balance. They never let "we'll fix it later" become "we forgot why this is broken."

The difference between a senior engineer and a tech lead is not technical skill — it is scope of concern. A senior engineer optimizes their own output. A tech lead optimizes the team's output, which sometimes means writing less code personally so that the team writes better code collectively. This shift in identity is the hardest part of the transition, and many tech leads never fully make it.

## Core Responsibilities

- **Technical Direction**: Own the technical roadmap for the team's domain. Ensure alignment between business objectives and engineering execution. Make technology choices that optimize for team productivity and system longevity, not resume-driven development. Maintain a living document that maps business capabilities to technical components and identifies where the architecture needs to evolve.
- **Code Review Excellence**: Treat code review as a primary leadership activity, not a tax. Reviews should teach, protect quality, and maintain architectural consistency. Block merges when standards slip; approve quickly when quality is met. Establish team review conventions: required reviewers per area, SLA for review turnaround, what constitutes a blocking vs. non-blocking comment. Use the conventional comments standard (e.g., `suggestion:`, `nit:`, `question:`, `thought:`) to communicate intent clearly.
- **Architecture Guidance**: Make or facilitate design decisions at the component and service level. Know when a decision is reversible (move fast) versus irreversible (slow down and write an ADR). Maintain an architecture decision log for the team's domain. Ensure every significant decision has a documented rationale, considered alternatives, and known consequences.
- **Mentorship**: Develop engineers through pairing, targeted code review feedback, stretch assignments, and honest career conversations. Create a learning culture where asking "why" is valued. Hold regular career conversations (not just 1:1s about current work). Help engineers build their "brag documents" and identify skills gaps. Create opportunities for growth that align with both the engineer's aspirations and the team's needs.
- **Sprint Planning & Estimation**: Decompose work into deliverable increments. Identify technical risks early. Push back on scope when the team's capacity is overcommitted. Ensure stories have clear acceptance criteria and that the team understands "done" before starting. Run spike tickets to reduce estimation uncertainty for high-risk items.
- **Unblocking**: Treat unblocking teammates as the highest-priority interrupt. Debug cross-team integration issues. Negotiate API contracts. Escalate organizational blockers before they stall delivery. Maintain a mental model of every in-flight work item and its dependencies. If someone is stuck for more than a few hours, proactively reach out.
- **Cross-Team Alignment**: Represent the team in architecture forums, guild meetings, and cross-team planning. Ensure your team's work integrates cleanly with the broader system. Build relationships with tech leads on adjacent teams. Share knowledge proactively — your team's learnings about a shared library or platform save everyone time.
- **RFC Writing**: Author and shepherd Requests for Comments for significant technical changes. Structure RFCs to present the problem, constraints, options with trade-offs, and a recommendation. Set clear review timelines and decision-making processes. An RFC that sits in review for months is worse than no RFC at all.
- **Balancing Coding with Leadership**: Spend 30-50% of time writing code — enough to stay credible and unblock the team, not so much that leadership duties suffer. The exact ratio shifts based on team maturity and project phase. Prioritize coding work that has the highest leverage: critical-path prototypes, complex debugging that only you can do efficiently, and reference implementations that set patterns for the team.
- **Technical Debt Management**: Maintain a tech debt register visible to the entire team. Classify debt by impact and urgency. Negotiate with product to allocate 15-20% of each sprint to debt reduction. Frame debt in business terms: "This slows feature delivery by X%" or "This creates Y risk of outage."
- **On-Call and Incident Leadership**: Participate in on-call rotations. Lead incident response for your domain. Conduct blameless post-mortems. Ensure operational runbooks exist and are current. The tech lead who never carries a pager loses credibility with the team.

## Key Skills & Tools

| Category | Skills & Tools |
|---|---|
| Code Review | GitHub/GitLab review workflows, conventional comments, CODEOWNERS, automated linting (ESLint, Ruff, Clippy), review bots |
| Decision Making | ADR frameworks (MADR, Nygard), RFC templates, decision matrices, DACI framework |
| Mentorship | Pairing protocols, growth frameworks (Dreyfus model), brag documents, skill matrices |
| Architecture | C4 model (context/container level), sequence diagrams, dependency mapping, API design (OpenAPI, gRPC) |
| Planning | Story mapping, spike tickets, technical debt registers, JIRA/Linear workflows |
| Communication | Mermaid/PlantUML diagrams, Notion/Confluence documentation, async video (Loom), architecture diagrams |
| Observability | Datadog, Grafana, OpenTelemetry — tech leads must be able to diagnose production issues, not just delegate them |

## AI-First Practices

- **AI-Assisted Code Review**: Use LLM-based tools (GitHub Copilot code review, CodeRabbit, Sourcery) to catch surface-level issues (style, naming, obvious bugs) so human review time focuses on architecture, correctness, and maintainability. Configure AI review bots to enforce team conventions automatically.
- **ADR Drafting**: Use AI to generate first drafts of Architecture Decision Records from meeting notes or Slack threads. Feed the AI your ADR template and the context; refine the output for accuracy and nuance. This reduces the friction of documentation without sacrificing quality.
- **RFC Templates and Content Generation**: Prompt AI with your RFC structure, the problem statement, and known constraints to generate a skeleton RFC. Use it to brainstorm alternative approaches and articulate trade-offs you might overlook.
- **Technical Documentation**: Generate API documentation, runbooks, and onboarding guides from code and existing artifacts. Use AI to keep docs in sync with code changes by running doc-generation as part of CI.
- **Code Quality Pattern Detection**: Feed codebase samples to AI to identify recurring anti-patterns, inconsistent error handling, or missing test coverage. Use this as input for tech debt prioritization.
- **Incident Post-Mortem Drafting**: After incidents, use AI to synthesize timeline data from logs, Slack messages, and alerts into a structured post-mortem draft. The tech lead then adds judgment, root cause analysis, and action items.
- **Meeting Summarization**: Use AI transcription and summarization for design discussions, ensuring decisions and action items are captured even when the tech lead is context-switching between meetings.
- **Onboarding Acceleration**: Use AI to generate team-specific onboarding guides from your codebase, ADR history, and architecture docs. New engineers can query an AI assistant trained on your team's context to get up to speed faster.
- **Estimation Support**: Feed historical sprint data and ticket descriptions to AI to generate estimation baselines. Use this as input for planning poker, not as a replacement for team discussion.

## Anti-Patterns to Avoid

- **The Hero Coder**: Writing all the critical code yourself because "it's faster." This creates bus factor risk and stunts team growth. Delegate and teach instead.
- **The Ivory Tower**: Making technical decisions without input from the team. Decisions made in isolation lack context and buy-in.
- **The Rubber Stamp Reviewer**: Approving PRs without meaningful review to keep the team unblocked. This erodes quality gradually and silently.
- **The Meeting Martyr**: Attending every meeting so the team doesn't have to. This makes you a bottleneck and burns you out. Rotate meeting attendance.
- **The Framework Astronaut**: Over-engineering solutions, introducing unnecessary abstractions, or adopting every new technology. Boring technology is often the right technology.
- **The Absent Lead**: Spending so much time in leadership activities that you lose touch with the codebase. When you can no longer review code effectively, you've gone too far.

## How They Collaborate

- **With Engineering Managers**: The tech lead owns the "how" and "what" of technical execution; the EM owns the "who" and team health. They share responsibility for delivery. The best pairings have high trust and clear boundaries — the tech lead escalates people issues to the EM; the EM defers technical decisions to the tech lead. Meet at least twice weekly to sync on delivery, team health, and blockers. Develop a shared language for risk.
- **With Product Managers**: Partner on feasibility, estimation, and scope negotiation. Push back with data when timelines are unrealistic. Propose phased delivery plans that ship value incrementally. Attend discovery sessions so technical constraints inform product decisions early, not at sprint planning.
- **With Software Architects**: Architects set system-wide patterns; tech leads adapt those patterns to their team's domain. Escalate when architectural guidance creates local friction. Provide ground-truth feedback on whether architectural decisions work in practice. The tech lead is the architect's reality check.
- **With Individual Contributors**: Create psychological safety for technical debate. Delegate meaningful work, not just grunt work. Give feedback that is specific, actionable, and kind. Celebrate publicly; critique privately. Ensure every team member has at least one stretch goal per quarter.
- **With Scrum Masters**: Collaborate on process improvements. Provide technical context for impediments. Help the scrum master understand when technical debt is the real blocker, not process. Partner on improving estimation accuracy and reducing cycle time.
- **With QA/Test Engineers**: Collaborate on test strategy. Ensure the team writes testable code. Champion test automation investment. Review test plans for critical features. The tech lead who dismisses testing as "someone else's job" ships unreliable software.

## Hiring Signals (Green Flags / Red Flags)

| Green Flags | Red Flags |
|---|---|
| Explains past decisions with trade-off reasoning, not just outcomes | "I was the best coder so they made me tech lead" |
| Describes mentoring specific people through specific growth | Cannot articulate how they helped someone else succeed |
| Writes clearly — ADRs, RFCs, or design docs they can share | No written artifacts of technical leadership |
| Balances pragmatism with quality ("we shipped X with known debt Y because Z") | Perfectionism that blocks delivery, or YOLO shipping without quality gates |
| Gives code review feedback that teaches, not just corrects | Reviews that are purely stylistic nitpicks or rubber stamps |
| Asks about team structure, delivery cadence, and codebase health | Only asks about tech stack and personal coding time |
| Comfortable saying "I don't know, here's how I'd find out" | Claims expertise in everything |
| Shows evidence of cross-team influence | Experience is limited to heads-down feature work |

## Growth Path

| Level | Focus | Key Behaviors |
|---|---|---|
| **Junior** | Learning fundamentals | Writes code that works. Asks questions. Responds well to code review feedback. Starts to understand the "why" behind team conventions. |
| **Mid** | Owning features | Designs and delivers features end-to-end. Gives useful code reviews to peers. Writes documentation without being asked. Begins mentoring juniors informally. |
| **Senior** | Owning systems | Makes sound technical decisions for their area. Writes ADRs. Leads design discussions. Identifies and addresses tech debt proactively. Trusted to operate independently. |
| **Staff / Tech Lead** | Owning team direction | Sets technical vision for the team. Writes RFCs that influence cross-team decisions. Mentors seniors. Balances coding with leadership. Represents the team in architecture and planning forums. |
| **Principal** | Owning organizational direction | Defines engineering strategy across multiple teams. Creates standards and frameworks adopted organization-wide. Influences hiring, tooling, and culture at scale. Recognized as a technical authority externally. |

## Common Mistakes in the First 90 Days

New tech leads commonly stumble in predictable ways. Being aware of these helps you avoid them:

1. **Trying to change everything at once.** Spend the first 30 days listening and learning. Understand why things are the way they are before proposing changes. Quick wins are fine; major process overhauls are not.
2. **Continuing to code at your previous rate.** Your job changed. If you're still writing as much code as before, you're neglecting leadership responsibilities.
3. **Not building a relationship with your EM.** The TL/EM partnership is the foundation of team effectiveness. Invest in it from day one.
4. **Avoiding difficult conversations.** That flaky test suite, that underperforming API, that engineer who doesn't respond to code review feedback — address these early.
5. **Failing to document decisions.** Decisions made in Slack threads and hallway conversations evaporate. Start writing ADRs immediately, even lightweight ones.

## Key Metrics a Tech Lead Should Track

A tech lead needs a dashboard — mental or literal — of indicators that reveal team health and code health:

- **PR Review Turnaround Time**: How long does a PR sit waiting for review? Target: under 4 hours during business hours. Long review queues kill momentum and encourage large, hard-to-review PRs.
- **PR Size Distribution**: Track the median lines changed per PR. Smaller PRs get better reviews, merge faster, and introduce fewer bugs. Target: under 400 lines changed.
- **Deployment Frequency**: How often does the team deploy to production? Higher frequency correlates with lower risk per deployment.
- **Change Failure Rate**: What percentage of deployments cause an incident or require a rollback? This reveals the effectiveness of your testing and review process.
- **Cycle Time**: Time from first commit to production. Reveals bottlenecks in the entire pipeline — not just coding, but review, testing, and deployment.
- **Tech Debt Ratio**: Percentage of sprint capacity spent on debt reduction vs. new features. Track this to ensure debt doesn't compound silently.
- **Test Coverage Trends**: Not the absolute number (coverage alone means little), but the trend. Declining coverage signals accumulating risk.
- **Escaped Defects**: Bugs found in production that should have been caught earlier. A leading indicator of quality process gaps.

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
