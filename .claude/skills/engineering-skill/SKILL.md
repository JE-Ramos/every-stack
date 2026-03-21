---
name: engineering-skill
description: "Guide to Engineering Leadership for founders — technical judgment, build vs buy, stack selection, tech debt management. Use this skill whenever a founder asks about making technical decisions, evaluating technology stacks, managing engineering as a non-technical founder, or hiring their first engineers."
disable-model-invocation: true
---

# Engineering
> The founder who turns technical judgment into competitive advantage — making the build-vs-buy decisions, hiring the right engineers, and setting the technical culture that lets a small team outperform organizations ten times their size.

## What Elite Looks Like

An elite founder-level engineering operator doesn't need to be the best coder on the team — they need to be the best judge of technical decisions in the context of business outcomes. In Garry Tan's 6 Skills framework, engineering is the skill that turns ideas into reality. But the founder's job isn't to write every line of code — it's to build the technical organization, make the architectural bets, and create an engineering culture where great engineers do their best work.

What separates elite from competent:
- **Technical judgment over technical skill**: Knows enough to evaluate trade-offs, challenge architectural decisions, and smell when something is wrong — even if they couldn't implement the solution themselves
- **Build vs. buy discipline**: Ruthlessly honest about what's core (build it, own it, make it excellent) vs. what's commodity (buy it, integrate it, move on). The wrong call here kills startups through over-building or under-differentiating
- **Engineering culture as leverage**: Creates an environment where engineers are autonomous, accountable, and shipping continuously. The right culture is worth more than any individual hire
- **Technical debt as financial debt**: Manages technical debt explicitly — takes it on deliberately when speed matters, pays it down before it compounds, and never lets it become invisible
- **Hiring bar ownership**: The quality of engineering talent determines everything. Maintains an absurdly high bar and would rather leave a position open than fill it with someone mediocre
- **Architecture for the next stage**: Builds for the next order-of-magnitude scale, not the one after that. Avoids both premature optimization and architectural debt that prevents growth

## Core Responsibilities

- Make build-vs-buy decisions for every major technical component
- Define the technology stack and architectural patterns for the company
- Hire and retain exceptional engineers: sourcing, interviewing, closing, onboarding, retaining
- Establish engineering culture: code review standards, deployment practices, on-call expectations, documentation norms
- Manage technical debt: identify, quantify, prioritize, and systematically reduce it
- Set development velocity expectations: shipping cadence, sprint/cycle structure, deployment frequency
- Evaluate and adopt tools, frameworks, and platforms that increase team leverage
- Conduct technical due diligence for partnerships, acquisitions, or investor conversations
- Ensure security, reliability, and scalability as the product scales
- Bridge communication between engineering and the rest of the organization

## Key Skills & Tools

### Build vs. Buy Decisions
| Factor | Build | Buy |
|--------|-------|-----|
| **Core differentiator** | If it's what makes you unique, own it completely | Never buy your core — you'll be at a vendor's mercy |
| **Commodity function** | Only if nothing adequate exists or integration cost exceeds build cost | Auth, payments, email, monitoring — buy these almost always |
| **Team expertise** | When your team has deep domain knowledge | When the problem is outside your team's expertise |
| **Time to market** | When you need full control over iteration speed | When speed of initial deployment matters more than customization |
| **Long-term cost** | When vendor lock-in creates existential risk | When the total cost of ownership is clearly lower |

### Technology Stack Selection
- Language/framework selection: optimize for hiring pool, ecosystem maturity, and team productivity — not personal preference
- Database selection: understand the CAP theorem trade-offs for your specific use case (OLTP vs. OLAP, relational vs. document vs. graph)
- Infrastructure: cloud provider selection (AWS, GCP, Azure), containerization (Docker, Kubernetes), serverless trade-offs
- Frontend: framework selection based on team experience, performance requirements, and hiring pool
- DevOps: CI/CD pipeline design, infrastructure-as-code, monitoring and observability stack

### Technical Debt Management
- **Identification**: Regular tech debt audits — ask engineers "what slows you down?" and take it seriously
- **Quantification**: Estimate the cost of not fixing it — slower feature velocity, increased bug rate, hiring friction
- **Prioritization**: Focus on debt that's in the critical path of current priorities, not theoretical future problems
- **Allocation**: 20% rule — dedicate ~20% of engineering capacity to debt reduction consistently, not in big bang rewrites
- **Prevention**: Code review standards, architectural decision records (ADRs), and "boy scout rule" (leave code better than you found it)

### Hiring Engineers
| Stage | Approach |
|-------|----------|
| **Sourcing** | GitHub contributions, conference talks, blog posts, personal network, engineering communities. The best engineers are rarely on job boards |
| **Screening** | Async technical assessment (take-home or portfolio review). Respect candidates' time. No leetcode for senior hires unless it's genuinely relevant |
| **Technical interview** | System design conversations, code review exercises, pair programming on real problems. Evaluate thinking process, not memorized solutions |
| **Culture interview** | Collaboration style, communication skills, growth mindset, comfort with ambiguity. Technical skill without cultural fit is net negative |
| **Closing** | Compelling mission, quality of the team, technical challenges, equity education, growth opportunity. Top engineers choose teams, not just compensation |
| **Onboarding** | First PR in week one. Buddy system. Gradual scope increase. 30/60/90 day plan. Early wins build confidence |

### Engineering Culture
- **Code review**: Every PR gets reviewed. Reviews are learning opportunities, not gatekeeping. Fast turnaround (<24 hours)
- **Deployment**: Ship frequently (daily or more). Feature flags for safe rollout. Rollback capability. Automated testing in CI
- **Ownership**: Engineers own their services end-to-end: code, deployment, monitoring, on-call. No "throw it over the wall"
- **Documentation**: Architectural decision records (ADRs), runbooks, onboarding docs, API documentation. If it's not written down, it doesn't scale
- **Incident response**: Blameless post-mortems. Focus on systems failures, not individual blame. Action items with owners and deadlines
- **Learning culture**: Tech talks, book clubs, conference attendance, hack days. Investment in growth retains top talent

### Architecture for Scale
- Design for the next 10x, not the next 100x — premature optimization is real
- Monolith-first for most startups: a well-structured monolith beats a poorly structured microservice architecture
- Identify the scaling bottleneck: usually database, then compute, then network. Fix the actual bottleneck
- Horizontal scalability patterns: stateless services, database sharding, caching layers, async processing
- Observability from day one: logging, metrics, tracing, alerting. You can't fix what you can't see

### Core Tools
- **Version control**: GitHub, GitLab
- **CI/CD**: GitHub Actions, CircleCI, BuildKite
- **Infrastructure**: AWS, GCP, Azure, Terraform, Pulumi
- **Containers**: Docker, Kubernetes, ECS, Fly.io
- **Monitoring**: Datadog, Grafana, Sentry, PagerDuty
- **Communication**: Linear, Notion, Slack, Loom
- **Security**: Snyk, SonarQube, Dependabot, HashiCorp Vault
- **AI-assisted development**: Claude Code, Gemini CLI, Cursor, GitHub Copilot

## AI-First Practices

AI is reshaping how engineering teams build software. The founder who understands AI-assisted development hires for it, builds culture around it, and gains a structural velocity advantage over competitors.

### Technology Evaluation
- AI-assisted technology stack analysis: evaluate frameworks, libraries, and platforms by synthesizing documentation, community health, performance benchmarks, and production experience reports
- Architecture review: describe your system to AI and get feedback on potential bottlenecks, failure modes, and scaling concerns
- Vendor evaluation: AI-synthesized comparisons of competing tools based on documentation, pricing, community sentiment, and migration stories

### Code Quality & Review
- AI-powered code review: use Claude Code, Copilot, or custom tools to review PRs for bugs, security issues, performance problems, and style violations
- Technical debt detection: AI analysis of codebase to identify patterns of debt, code duplication, and architectural violations
- Security scanning: AI-augmented security analysis beyond pattern matching — understanding context and intent of code

### Technical Documentation
- AI-generated architectural documentation from codebase analysis: system diagrams, component descriptions, API documentation
- Runbook generation: AI creates operational runbooks from incident history and system architecture
- Onboarding documentation: AI synthesizes codebase into guides for new engineers
- ADR drafting: describe the decision context and let AI generate a structured architectural decision record

### Proof-of-Concept Rapid Development
- Use AI coding agents to rapidly prototype integrations, features, and architectural experiments
- Spike investigations: have AI explore a technical approach and produce a working prototype in hours instead of days
- Migration planning: AI generates migration plans and even initial implementation for framework upgrades, database migrations, or API changes
- Test generation: AI creates comprehensive test suites from specifications and existing code

### Engineering Metrics & Analysis
- AI-synthesized engineering health dashboards: cycle time, deployment frequency, change failure rate, time to restore
- Incident pattern analysis: AI identifies recurring incident causes and suggests systemic fixes
- Hiring funnel analysis: optimize technical interview pipeline based on outcome data

## How They Collaborate

- **Product**: The closest daily partnership. Engineering provides feasibility, estimates, and trade-off analysis. Product provides priorities and customer context. Both share ownership of outcomes
- **Sales & Marketing**: Engineering ensures technical accuracy in sales materials. Supports pre-sales technical conversations. Builds integrations and APIs that enable partnerships
- **Finance**: Engineering headcount is typically the largest budget line item. Provides input on build-vs-buy financial modeling. Manages infrastructure costs
- **Brand**: Engineering quality IS brand quality for developer-facing and technical products. API design, documentation quality, and system reliability are brand touchpoints
- **Leadership**: Engineering velocity determines company velocity. The founder must deeply understand engineering team health, delivery capacity, and cultural dynamics — even after delegating day-to-day management

## Hiring Signals

### Green Flags
- Can explain complex technical concepts to non-technical people without condescension
- Has made a significant build-vs-buy decision and can articulate the reasoning, trade-offs, and outcome
- Demonstrates engineering empathy: understands what motivates engineers, what frustrates them, and what makes them leave
- Can discuss technical debt in business terms: "This debt costs us X days per sprint" not just "the code is messy"
- Shows judgment about when to invest in infrastructure vs. features — not dogmatic in either direction
- Has hired engineers and can describe their evaluation criteria beyond "smart and gets things done"
- Understands that engineering culture compounds: small decisions about code review, testing, and deployment add up over years

### Red Flags
- "We should rewrite everything" without a clear business case — the rewrite is almost never the right answer
- Can't explain their architecture decisions in terms of business trade-offs — only technical aesthetics
- Treats engineering as a cost center: "How do we get more done with fewer engineers?" instead of "How do we make each engineer more impactful?"
- No experience hiring or managing engineers — only individual contributor experience
- Dismisses technical debt entirely: "We'll fix it later" (later never comes)
- Over-engineers everything: Kubernetes for a prototype, microservices for a team of three, custom frameworks for commodity problems
- Can't discuss what they'd do differently in hindsight — no learning from past technical decisions
- Evaluates engineers solely on coding ability, ignoring communication, collaboration, and judgment

## Growth Path

| Level | Markers |
|-------|---------|
| **Technical Founder (Pre-PMF)** | Writes most of the code personally. Makes all technical decisions. Builds the MVP. Hires first 1-3 engineers through personal network. Speed over perfection |
| **Technical Founder (Post-PMF)** | Shifts from writing code to writing specs and reviewing code. Hires first engineering lead. Establishes basic engineering practices (CI/CD, code review, testing). Still the ultimate technical decision-maker |
| **VP Engineering / CTO** | Builds the engineering organization (10-30 engineers). Defines architecture for scale. Hires engineering managers. Establishes engineering culture and processes. Manages technical roadmap alongside product roadmap |
| **CTO (Scale)** | Leads engineering org of 50+ engineers. Owns technology strategy at the company level. Manages multiple engineering teams and leaders. Drives technical due diligence for M&A. Represents technology to the board |
| **CTO (Enterprise)** | Technology visionary for the company. Drives technical innovation strategy. Manages complex multi-team, multi-product engineering organization. Influences industry through open source, publications, and conference presence |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
