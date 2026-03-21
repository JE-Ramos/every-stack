# Full-Stack Engineer
> The engineer who delivers complete features from database to pixel, owning the entire vertical slice.

## What Elite Looks Like

An elite full-stack engineer is not a frontend engineer who can write SQL, nor a backend engineer who can center a div. They are a systems thinker who understands how data flows from storage through APIs through rendering pipelines to the user's screen — and they make deliberate decisions at every layer.

The elite full-stack engineer's superpower is context. When they build a frontend form, they understand the database constraints that validate the data. When they design an API endpoint, they know exactly how the consumer will fetch, cache, and render the response. This end-to-end awareness eliminates the miscommunication, over-fetching, and integration bugs that plague teams with strict frontend/backend silos.

They are pragmatic generalists with depth. They may not know every nuance of CSS Grid or every PostgreSQL query optimization trick, but they know enough to build production-quality systems at both layers and they know when to pull in a specialist. They optimize for shipping complete, working features rather than technically perfect isolated components.

Elite full-stack engineers excel at early-stage products, prototyping, and small teams where one person owning the full vertical slice dramatically reduces coordination overhead.

## Core Responsibilities

- **End-to-end feature delivery** — Own features from database schema through API through UI through deployment. Reduce handoff points by building the complete vertical slice.
- **API contract design** — Define the contract between frontend and backend with the unique advantage of being both the producer and consumer. Design APIs that serve the UI's actual needs rather than exposing raw database models.
- **Data flow architecture** — Design how data moves through the system: database queries, API serialization, client-side caching, optimistic updates, real-time synchronization, and error propagation across boundaries.
- **Full-stack frameworks** — Leverage frameworks that span the stack (Next.js, Remix, Nuxt, SvelteKit, Rails, Laravel, Django) to minimize glue code and maximize cohesion.
- **Database-to-UI consistency** — Ensure data integrity from storage to display. Handle schema migrations, API evolution, and client cache invalidation as a coordinated concern.
- **Deployment and infrastructure** — Own the deployment pipeline: containerization, CI/CD, environment configuration, feature flags, and preview deployments. Understand enough infrastructure to be dangerous without needing a dedicated DevOps engineer for every change.
- **Monorepo management** — Structure shared code (types, validation schemas, utilities) across frontend and backend packages. Manage build dependencies, shared tooling, and workspace configurations (Turborepo, Nx, pnpm workspaces).
- **Prototyping and validation** — Rapidly build working prototypes that validate product hypotheses. Move from idea to deployed proof-of-concept faster than any specialist can.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Full-Stack Frameworks | Next.js, Remix, Nuxt 3, SvelteKit, Astro, Rails, Laravel, Django |
| Frontend | React, Vue 3, Svelte, TypeScript, Tailwind CSS, component libraries |
| Backend | Node.js (Fastify/Hono), Python (FastAPI), Go, Ruby, PHP |
| Databases | PostgreSQL, MySQL, SQLite, MongoDB, Redis, Prisma, Drizzle ORM |
| API Layer | REST, GraphQL, tRPC, Server Actions, OpenAPI |
| Auth | NextAuth.js/Auth.js, Clerk, Supabase Auth, Lucia, session management |
| Deployment | Vercel, Railway, Fly.io, AWS (ECS/Lambda), Docker, GitHub Actions |
| Monorepo | Turborepo, Nx, pnpm workspaces, shared TypeScript configs |
| Testing | Vitest, Playwright, Testing Library, Supertest, testcontainers |
| Real-time | WebSockets, Server-Sent Events, Supabase Realtime, Pusher |
| Type Safety | TypeScript end-to-end, Zod schemas shared across stack, tRPC, Prisma generated types |

## AI-First Practices

Full-stack engineers benefit disproportionately from AI assistance because they operate across more surface area than any specialist. AI amplifies the generalist's ability to move quickly across layers.

- **Full-feature implementation with Claude Code** — Describe a complete feature (e.g., "user invitation system with email, acceptance flow, and team management UI") and use AI to scaffold the entire vertical slice: database migration, API endpoints, client-side hooks, and UI components. Then review and refine each layer.
- **Plan mode for cross-layer architecture** — Before implementing, use Claude Code's plan mode to think through the data model, API contract, state management approach, and component hierarchy together. This is where the full-stack perspective shines: AI can help you see how decisions at one layer cascade to others.
- **Shared type generation** — Use AI to generate Zod schemas from database models, then derive TypeScript types, API validation, and form validation from a single source of truth. Maintain type safety across the entire stack with minimal manual effort.
- **Migration assistance** — When upgrading frameworks (e.g., Pages Router to App Router, Vue 2 to Vue 3, Express to Hono), use AI to handle the mechanical translation while you focus on architectural decisions.
- **Rapid prototyping** — Use AI to generate complete working prototypes from product specs. The full-stack engineer's role is to provide the architectural judgment that AI lacks: where to cut corners for a prototype and where to invest in quality.
- **Integration test generation** — Generate tests that exercise the full stack: API calls that verify database state, E2E tests that validate complete user flows. AI excels at producing these comprehensive tests.
- **Infrastructure as Code** — Generate Dockerfiles, CI/CD pipelines, Terraform configs, and deployment scripts. Review for security and cost implications.

The meta-skill: knowing which layer to focus AI on for maximum leverage, and when to write code by hand for critical paths.

## How They Collaborate

- **With product managers** — Full-stack engineers are often the product manager's most effective partner because they can reason about feasibility across the entire system. They provide accurate estimates because they see the full scope.
- **With designers** — Implement designs directly, providing feedback on technical constraints. Build interactive prototypes that validate design decisions with real data.
- **With specialist engineers** — Know when to pull in a CSS expert for a complex animation, a DBA for query optimization, or a security engineer for an auth flow review. The full-stack engineer coordinates; they do not gatekeep.
- **With other full-stack engineers** — Divide work by feature (vertical slices), not by layer (horizontal slices). This minimizes merge conflicts and integration issues.
- **With DevOps/Platform** — Own basic deployment and infrastructure, escalating to platform teams for complex networking, scaling, and security hardening.

## Hiring Signals

### Green Flags
- Can trace a user action from click through API through database and back, explaining what happens at each layer
- Has shipped complete features alone — not just contributed to one layer of a feature someone else designed
- Makes pragmatic technology choices based on the problem, not resume-driven development
- Understands the tradeoffs of full-stack frameworks (SSR vs. CSR vs. SSG, monolith vs. microservices)
- Can debug issues at any layer: browser DevTools, network inspection, server logs, database queries
- Shares TypeScript types or validation schemas across frontend and backend
- Has opinions on when a full-stack approach is appropriate and when specialists are needed

### Red Flags
- Claims "full-stack" but cannot write a SQL query or style a responsive layout
- Builds SPAs for everything regardless of requirements
- Cannot explain how their ORM's queries translate to SQL
- Ignores accessibility because "that's a frontend concern"
- Has no deployment or infrastructure experience
- Cannot reason about data consistency across the stack
- Treats frontend and backend as completely separate applications that happen to talk to each other

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn both sides | Single features | Build CRUD features end-to-end, understand HTTP request lifecycle, write basic tests at both layers, deploy with existing pipelines |
| **Mid** | Own features completely | Multi-feature areas | Design database schemas and API contracts, build responsive accessible UIs, manage state across client and server, set up CI/CD, handle auth flows |
| **Senior** | Drive architecture decisions | Product areas | Choose frameworks and tools for new projects, design data flow patterns, establish shared code strategies, mentor juniors, lead technical design for features |
| **Staff** | Define system boundaries | Org-wide | Decide where to use full-stack frameworks vs. separate services, establish monorepo patterns, drive platform standardization, evaluate build-vs-buy, own developer productivity |
| **Principal** | Shape product engineering culture | Company-wide | Define the company's approach to product engineering, establish the balance between generalist and specialist teams, influence framework and platform choices at scale |

## RTFM — Essential Reading

### Books
- **The Pragmatic Programmer** by David Thomas & Andrew Hunt — Foundational engineering principles that span every layer
- **Clean Architecture** by Robert C. Martin — Principles for structuring applications that remain maintainable as they grow
- **Designing Data-Intensive Applications** by Martin Kleppmann — Essential for understanding the data layer that underpins everything
- **Refactoring UI** by Adam Wathan & Steve Schoger — Design principles that make full-stack engineers more effective at the UI layer

### Documentation & Courses
- [Full Stack Open](https://fullstackopen.com) by University of Helsinki — The most comprehensive free full-stack curriculum, covering React, Node.js, GraphQL, TypeScript, and CI/CD
- [Next.js documentation](https://nextjs.org/docs) — The reference for the most popular full-stack React framework
- [Remix documentation](https://remix.run/docs) — Excellent mental model for full-stack data flow
- [SvelteKit documentation](https://svelte.dev/docs/kit) — Clean full-stack patterns with minimal abstraction
- [Prisma documentation](https://www.prisma.io/docs) — Type-safe database access that bridges backend and frontend types
- [tRPC documentation](https://trpc.io/docs) — End-to-end type safety without code generation

### Articles & Blogs
- Kent C. Dodds' [The Web's Next Transition](https://www.epicweb.dev/the-webs-next-transition) — Understanding the evolution of full-stack web architecture
- Guillermo Rauch's writings on [rauchg.com](https://rauchg.com) — Philosophy behind Vercel and modern full-stack development
- Lee Robinson's blog ([leerob.io](https://leerob.io)) — Practical Next.js patterns and full-stack architecture
- Dan Abramov's [Overreacted](https://overreacted.io) — Deep thinking about React and component architecture
- Tom Preston-Werner's writings on developer experience and tools

### Open Source Projects to Study
- [Cal.com](https://github.com/calcom/cal.com) — Production Next.js full-stack application with excellent architecture
- [Documenso](https://github.com/documenso/documenso) — Open-source DocuSign alternative, well-structured Next.js monorepo
- [Hono](https://github.com/honojs/hono) — Ultralight web framework that runs everywhere, excellent for understanding framework design

## References

- [State of JS](https://stateofjs.com) — Annual JavaScript ecosystem survey covering full-stack frameworks
- [Vercel's Next.js Conf talks](https://nextjs.org/conf) — Technical deep dives on full-stack patterns
- [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar) — Quarterly assessment of languages, frameworks, and techniques
- [Stack Overflow Developer Survey](https://survey.stackoverflow.co) — Industry-wide technology adoption data
- [Web Framework Benchmarks (TechEmpower)](https://www.techempower.com/benchmarks/) — Performance comparisons across full-stack frameworks
