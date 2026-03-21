---
name: software-architect
description: "Guide to Software Architecture — system design, distributed systems, CQRS, DDD, C4 diagrams, migration planning. Use this skill whenever the user asks about software architecture, system design, architectural decision records, technology evaluation, or designing for scale."
---

# Software Architect
> The systems thinker who translates business strategy into technical structure, making the hard trade-offs that shape how software evolves over years, not sprints.

## What Elite Looks Like

An elite software architect operates at the intersection of technology, business, and organization. They understand Conway's Law not as an observation but as a design tool — shaping system boundaries to match (or intentionally challenge) team boundaries. They don't produce architecture diagrams that gather dust; they produce living technical visions that teams actually use to make daily decisions.

They are masters of trade-off analysis. Every architectural decision involves tension — consistency vs. availability, coupling vs. autonomy, build vs. buy, simplicity vs. flexibility. Elite architects make these trade-offs explicit, document them, and revisit them when context changes. They know that the "best" architecture is the one that optimally serves the current business constraints, not the most theoretically elegant one.

Elite architects write code. Not full-time, but enough to validate their designs, prototype critical paths, and maintain empathy for the developer experience their architecture creates. An architect who hasn't opened an IDE in two years is designing for a codebase that no longer exists.

They think in evolutionary terms. Systems are not designed once and built — they evolve continuously. Elite architects design for change: clear module boundaries, well-defined contracts, and migration paths that allow incremental transformation rather than big-bang rewrites.

## Core Responsibilities

- **System Design**: Design distributed systems that meet functional and non-functional requirements. Choose appropriate architectural styles (microservices, event-driven, modular monolith, CQRS, hexagonal) based on actual needs, not hype cycles.
- **Technology Evaluation & Selection**: Assess frameworks, platforms, databases, and cloud services with structured evaluation criteria. Produce technology radar documents that guide team adoption. Kill technologies that aren't earning their keep.
- **Non-Functional Requirements (NFRs)**: Define and quantify scalability, reliability, security, observability, and performance targets. Translate business SLAs into engineering SLOs and SLIs. Make NFRs testable, not aspirational.
- **C4 Model Diagramming**: Maintain system documentation using the C4 model — Context, Container, Component, and Code levels. Keep diagrams at the right level of abstraction for each audience: executives see Context, developers see Component.
- **Domain-Driven Design**: Apply DDD strategic patterns to identify bounded contexts, define ubiquitous language, and design context maps. Use DDD tactical patterns (aggregates, entities, value objects, domain events) where they reduce complexity, not everywhere.
- **API Strategy**: Define API design standards (REST, GraphQL, gRPC, AsyncAPI), versioning policies, and governance processes. Ensure APIs are designed for consumers, not just producers.
- **Migration Planning**: Design migration paths from legacy to target architecture. Favor strangler fig patterns over big-bang rewrites. Produce detailed migration plans with rollback strategies, data migration steps, and feature parity checkpoints.
- **Technical Vision Documents**: Author and maintain the technical vision — a 12-24 month view of where the architecture is heading and why. Connect every architectural initiative to a business outcome.

## Key Skills & Tools

| Category | Skills & Tools |
|---|---|
| System Design | Distributed systems patterns, CAP theorem, event sourcing, CQRS, saga pattern, circuit breaker, bulkhead, sidecar |
| Diagramming | C4 model (Structurizr, IcePanel), Mermaid, PlantUML, Excalidraw, architecture.md files as code |
| Cloud Platforms | AWS Well-Architected Framework, Azure Architecture Center, GCP Cloud Architecture Framework |
| Data Architecture | Relational (PostgreSQL), document (MongoDB), graph (Neo4j), streaming (Kafka, Pulsar), caching (Redis), data mesh principles |
| API Design | OpenAPI/Swagger, AsyncAPI, gRPC/Protobuf, GraphQL schema design, API gateways (Kong, Envoy) |
| Security | OWASP Top 10, zero-trust architecture, OAuth 2.0/OIDC, secrets management (Vault), threat modeling (STRIDE) |
| Observability | Distributed tracing (Jaeger, Zipkin), metrics (Prometheus, Datadog), logging (ELK, Loki), OpenTelemetry |
| Infrastructure | Kubernetes architecture, service mesh (Istio, Linkerd), IaC (Terraform, Pulumi), GitOps (ArgoCD, Flux) |

## AI-First Practices

- **Architecture Documentation Generation**: Use AI to generate initial C4 model descriptions, component diagrams, and architecture overview documents from code repositories. Feed the AI your codebase structure and deployment configs to produce accurate container and component diagrams.
- **Trade-Off Analysis**: Prompt AI with architectural options and constraints to generate structured trade-off matrices. Use it to enumerate failure modes, scalability limits, and operational costs you might miss. Always validate with domain expertise — AI is a brainstorming partner, not a decision-maker.
- **Migration Plan Generation**: Describe your current state and target state to AI and generate phased migration plans with dependency ordering, risk assessment, and rollback procedures. Use AI to identify data migration edge cases and compatibility issues.
- **Threat Modeling**: Use AI to perform STRIDE analysis on architecture diagrams. Feed it your system context, data flows, and trust boundaries to generate initial threat models. The architect reviews and prioritizes; AI handles the systematic enumeration.
- **System Diagramming Assistance**: Generate Mermaid, PlantUML, or Structurizr DSL from natural language descriptions of system interactions. Use AI to keep diagrams synchronized with code by analyzing repository changes.
- **Technology Evaluation**: Use AI to research technology options, compile comparison matrices, and summarize community sentiment, known issues, and production readiness signals. Cross-reference with ThoughtWorks Technology Radar and CNCF landscape.
- **Pattern Recommendation**: Describe a design challenge to AI and get pattern recommendations with applicability analysis. Use this as a starting point for design discussions, not as a final answer.
- **RFC and ADR Drafting**: Generate first drafts of architectural RFCs and ADRs from meeting notes, Slack discussions, or verbal problem descriptions. AI handles structure and completeness; the architect adds judgment and context.

## Anti-Patterns to Avoid

- **The Ivory Tower Architect**: Produces diagrams and documents from a distance without writing code or sitting with teams. Designs that aren't validated by implementation are speculative fiction.
- **The Resume-Driven Architect**: Selects technologies based on personal interest or career advancement rather than organizational needs. Kubernetes for a 10-person team with one service is not architecture — it's theater.
- **The Astronaut Architect**: Designs for scale and complexity that will never materialize. Building for "millions of users" when you have hundreds is premature optimization at the system level.
- **The Powerpoint Architect**: Produces beautiful diagrams that no one references after the initial presentation. Architecture documentation must be living and accessible, not archived in a slide deck.
- **The Veto Architect**: Uses architectural authority to block work without offering alternatives. A "no" without a proposed path forward is not leadership.
- **The Consistency Zealot**: Forces every team into the same patterns regardless of context. A team building a real-time trading system and a team building a content management system have different architectural needs.

## How They Collaborate

- **With Tech Leads**: Architects set system-wide patterns and guardrails; tech leads adapt them to their team's context. The relationship works when architects listen to ground-truth feedback from tech leads about what actually works in practice. Avoid the ivory tower — pair with tech leads on design sessions.
- **With Engineering Managers**: Collaborate on team structure decisions that align with architectural boundaries (inverse Conway maneuver). Provide input on hiring profiles — what skills does the architecture demand?
- **With Product Managers**: Translate product roadmap items into architectural implications. Identify when a product request requires significant architectural change and communicate lead time early. Help PMs understand technical constraints without hiding behind jargon.
- **With Security Teams**: Partner on threat modeling, compliance requirements, and security architecture reviews. Embed security into architectural patterns rather than bolting it on after the fact.
- **With Platform/SRE Teams**: Co-design infrastructure patterns, deployment strategies, and observability standards. Ensure architectural decisions are operationally feasible. Participate in incident reviews to identify architectural root causes.
- **With Other Architects**: Maintain a community of practice. Conduct architecture reviews collaboratively. Avoid territorial behavior — the best architecture emerges from healthy debate, not hierarchy.

## Hiring Signals (Green Flags / Red Flags)

| Green Flags | Red Flags |
|---|---|
| Explains trade-offs with specific constraints ("we chose X because of Y constraint, accepting Z cost") | Presents architecture as the objectively correct solution with no downsides |
| Has evolved architectures incrementally, not just greenfield designs | Only talks about greenfield projects; no experience evolving legacy systems |
| Can draw a clear line from architectural decisions to business outcomes | Architecture decisions disconnected from business context |
| Produces documentation that teams actually reference | "The code is the documentation" for system-level decisions |
| Admits when a past decision was wrong and explains what they learned | Defends every past decision as correct given the information available |
| Asks about team structure, deployment frequency, and operational maturity | Only asks about tech stack and scale numbers |
| Comfortable with "it depends" followed by structured analysis | Prescribes the same architecture for every problem |
| Still writes code, at least for prototyping and validation | Hasn't written production-adjacent code in years |
| Can explain complex systems simply to non-technical stakeholders | Uses jargon as a shield |

## Growth Path

| Level | Focus | Key Behaviors |
|---|---|---|
| **Junior** | Learning patterns | Understands basic design patterns and SOLID principles. Implements designs others create. Asks "why was it designed this way?" |
| **Mid** | Designing features | Designs components and services within an existing architecture. Evaluates technology options for their scope. Produces design documents for peer review. |
| **Senior** | Designing systems | Owns the architecture for a product or domain. Makes technology selection decisions. Writes ADRs. Conducts design reviews. Mentors others on architectural thinking. |
| **Staff / Architect** | Designing platforms | Sets architectural direction across multiple teams or products. Defines standards and patterns adopted organization-wide. Produces technical vision documents. Influences technology strategy. |
| **Principal / Distinguished** | Designing organizations | Shapes engineering culture and technical strategy at the company level. Advises executive leadership on technology decisions. Influences the industry through talks, papers, or open-source work. Thinks in 3-5 year horizons. |

## Architecture Review Checklist

Elite architects use structured reviews to evaluate designs. A minimum viable review covers:

1. **Problem Statement**: Is the problem clearly defined? Are we solving the right problem?
2. **Constraints**: What are the non-negotiable constraints (budget, timeline, team skills, regulatory)?
3. **Quality Attributes**: Are NFRs quantified? Scalability targets, latency budgets, availability SLAs, security requirements?
4. **Alternatives Considered**: Were at least two alternatives evaluated? What were the trade-offs?
5. **Data Model**: How is data stored, accessed, and migrated? What are the consistency guarantees?
6. **Integration Points**: How does this interact with existing systems? What contracts exist? What happens when dependencies fail?
7. **Observability**: How will we know if this is working? What metrics, logs, and traces are instrumented?
8. **Migration Path**: How do we get from current state to target state without downtime? What is the rollback plan?
9. **Operational Readiness**: Who operates this? What runbooks are needed? What is the on-call impact?
10. **Cost Model**: What are the infrastructure and operational costs? How do they scale with usage?

## Key Architecture Principles

- **Favor simplicity over cleverness.** The best architecture is the simplest one that meets requirements.
- **Design for failure.** Every network call can fail. Every service can be slow. Every disk can fill up. Design accordingly.
- **Make boundaries explicit.** Module boundaries, service boundaries, team boundaries — these should be clearly defined and intentionally managed.
- **Optimize for change.** Requirements will change. Technology will change. Teams will change. Architectures that resist change accumulate entropy.
- **Delay irreversible decisions.** Commit to decisions as late as responsibly possible. Prefer reversible technology choices.
- **Measure what matters.** Architecture decisions should be validated by production metrics, not whiteboard arguments.

## RTFM — Essential Reading

### Books
- **Fundamentals of Software Architecture** — Mark Richards & Neal Ford. The modern comprehensive reference for software architecture. Covers styles, characteristics, and soft skills.
- **Building Evolutionary Architectures** — Neal Ford, Rebecca Parsons, Patrick Kua. How to design architectures that support guided, incremental change through fitness functions.
- **Domain-Driven Design: Tackling Complexity in the Heart of Software** — Eric Evans. The foundational text for strategic and tactical domain modeling. Dense but essential.
- **Clean Architecture** — Robert C. Martin. Principles for structuring software to maximize maintainability and testability. Focus on the dependency rule and boundary design.
- **Software Architecture: The Hard Parts** — Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani. Modern trade-off analysis for distributed architectures. Covers decomposition, data ownership, and integration patterns.
- **Designing Data-Intensive Applications** — Martin Kleppmann. The essential reference for anyone building systems that store, process, or transmit data at scale.
- **Release It!** — Michael Nygard. Patterns for building production-ready software: stability, capacity, and operational awareness.

### Docs & Articles
- **AWS Well-Architected Framework** (https://aws.amazon.com/architecture/well-architected/) — Six pillars of cloud architecture: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability.
- **C4 Model** (https://c4model.com/) — Simon Brown's approach to visualizing software architecture at multiple levels of abstraction.
- **Martin Fowler's Architecture Guide** (https://martinfowler.com/architecture/) — Curated articles on microservices, event-driven architecture, CQRS, and more.
- **ThoughtWorks Technology Radar** (https://www.thoughtworks.com/radar) — Quarterly assessment of technologies, platforms, tools, and techniques.
- **CNCF Cloud Native Landscape** (https://landscape.cncf.io/) — The reference map for cloud-native technologies.

### Courses & Talks
- **Software Architecture Fundamentals** — Neal Ford & Mark Richards (O'Reilly). The video companion to their books.
- **Distributed Systems Lecture Series** — Martin Kleppmann (YouTube). Rigorous treatment of consensus, replication, and consistency.
- **Domain-Driven Design Europe** conference talks (YouTube). Annual conference with deep DDD and architecture content.

### OSS Projects to Study
- **Structurizr** (https://github.com/structurizr) — C4 model tooling. Architecture diagrams as code.
- **ArchUnit** (https://github.com/TNG/ArchUnit) — Unit tests for Java architecture. Enforce architectural rules in CI.
- **Eventuate** (https://github.com/eventuate-tram/eventuate-tram-core) — Event-driven microservices framework demonstrating saga and CQRS patterns.

## References

- Richards, M. & Ford, N. (2020). *Fundamentals of Software Architecture*. O'Reilly Media.
- Ford, N., Parsons, R., & Kua, P. (2017). *Building Evolutionary Architectures*. O'Reilly Media.
- Evans, E. (2003). *Domain-Driven Design: Tackling Complexity in the Heart of Software*. Addison-Wesley.
- Martin, R. C. (2017). *Clean Architecture*. Prentice Hall.
- Ford, N., Richards, M., Sadalage, P., & Dehghani, Z. (2021). *Software Architecture: The Hard Parts*. O'Reilly Media.
- Kleppmann, M. (2017). *Designing Data-Intensive Applications*. O'Reilly Media.
- Brown, S. "The C4 Model for Visualising Software Architecture." https://c4model.com/
