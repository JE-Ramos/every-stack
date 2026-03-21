---
name: backend-engineer
description: "Guide to Backend Engineering — APIs, databases, message queues, caching, auth, observability. Use this skill whenever the user asks about backend development, API design (REST/GraphQL/gRPC), server architecture, database optimization, or backend hiring."
disable-model-invocation: true
---

# Backend Engineer
> The engineer who makes data flow reliably, securely, and fast — from request to response and everything in between.

## What Elite Looks Like

An elite backend engineer thinks in systems, not endpoints. They understand that every API is a contract, every database query is a cost center, and every network call is a lie waiting to happen. They design services that degrade gracefully, scale predictably, and remain operable at 3 AM without anyone getting paged.

They do not confuse "it works on my machine" with "it works." They reason about failure modes, concurrency hazards, data consistency boundaries, and operational visibility from the first design conversation. They write code that is not merely correct but observable, debuggable, and replaceable.

Elite backend engineers treat their APIs as products. They version thoughtfully, document precisely, and design error responses that help consumers recover rather than guess. They understand that the hardest problems are not algorithmic but organizational: schema migrations without downtime, backward-compatible deployments, and data model evolution over years.

## Core Responsibilities

- **API design and implementation** — Design RESTful, GraphQL, or gRPC APIs with clear contracts, consistent error handling, pagination, filtering, and versioning strategies. Generate and maintain OpenAPI/protobuf specs as the source of truth.
- **Data modeling and storage** — Choose the right database for the workload (relational, document, columnar, graph, time-series). Design schemas that support query patterns, enforce integrity, and evolve without downtime. Write migrations that are reversible and safe.
- **Authentication and authorization** — Implement secure identity flows (OAuth 2.0, OIDC, JWT, session-based auth). Design RBAC/ABAC systems. Understand token lifecycle, refresh flows, and the difference between authentication and authorization at every layer.
- **Async processing and messaging** — Design event-driven architectures using message queues (Kafka, RabbitMQ, SQS) and event buses. Handle idempotency, dead-letter queues, ordering guarantees, and exactly-once semantics (or accept at-least-once with idempotent consumers).
- **Caching** — Implement caching at the right layer: CDN, reverse proxy, application (Redis/Memcached), database query cache. Manage cache invalidation strategies, TTLs, and thundering herd mitigation.
- **Observability** — Instrument services with structured logging, distributed tracing (OpenTelemetry), and metrics (Prometheus/Grafana). Build dashboards and alerts that surface problems before users report them.
- **Reliability engineering** — Implement circuit breakers, retries with backoff, bulkheads, timeouts, health checks, and graceful shutdown. Design for partial failure in distributed environments.
- **Security** — Apply defense in depth: input validation, parameterized queries, rate limiting, CORS, CSP headers, secrets management, and dependency vulnerability scanning.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Languages | Node.js (Express/Fastify/Hono), Go, Python (FastAPI/Django), Rust (Axum/Actix), Java (Spring Boot) |
| API Protocols | REST, GraphQL (Apollo, Mercurius), gRPC/protobuf, WebSockets, Server-Sent Events |
| Databases | PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, ClickHouse, Neo4j |
| Message Queues | Apache Kafka, RabbitMQ, AWS SQS/SNS, NATS, Redis Streams |
| Caching | Redis, Memcached, Varnish, CDN-level caching, application-level memoization |
| Auth | OAuth 2.0, OIDC, JWT, Passport.js, Keycloak, Auth0/Clerk |
| Observability | OpenTelemetry, Prometheus, Grafana, Jaeger/Zipkin, structured logging (Pino, Zap, slog) |
| Infrastructure | Docker, Kubernetes, Terraform, AWS/GCP/Azure services |
| Testing | Unit testing, integration testing with testcontainers, contract testing (Pact), load testing (k6, Locust) |
| Data | Migrations (Flyway, Alembic, Prisma Migrate), ORMs (Prisma, SQLAlchemy, GORM), raw SQL |

## AI-First Practices

Backend engineering benefits enormously from AI-assisted development, particularly in the areas of boilerplate reduction, schema design, and test generation.

- **API scaffolding with Claude Code** — Generate endpoint handlers, middleware, request validation schemas, and OpenAPI specs from natural language descriptions. Use plan mode to design the API surface before generating implementation code. Review generated code for security implications (input validation, auth checks, SQL injection vectors).
- **Database schema generation** — Describe your domain model and constraints to AI; have it produce migration files, indexes, and seed data. Always review generated schemas for normalization issues, missing constraints, and query pattern alignment.
- **Test generation** — Generate comprehensive test suites from API specs or handler code. AI is particularly effective at producing integration tests with realistic fixtures and edge cases. The engineer verifies that tests are meaningful, not just green.
- **Query optimization** — Feed slow query logs and EXPLAIN plans to AI for analysis and optimization suggestions. Use AI to generate index recommendations based on query patterns.
- **Documentation generation** — Generate API documentation, architecture decision records (ADRs), and runbooks from code. AI excels at producing first drafts that the engineer refines with operational context.
- **Security review** — Use AI to scan handler code for common vulnerabilities: injection, broken auth, mass assignment, insecure defaults, missing rate limiting.
- **Migration assistance** — When migrating between frameworks, databases, or protocols (REST to gRPC, MongoDB to PostgreSQL), use AI to generate migration code and mapping layers.

The discipline: AI accelerates implementation, but the engineer owns correctness, security, and operational readiness.

## How They Collaborate

- **With frontend engineers** — Co-design API contracts early using OpenAPI specs or GraphQL schemas. Define error response shapes, pagination patterns, and real-time update strategies together. Provide sandbox environments and mock servers for frontend development.
- **With platform/SRE** — Define SLOs together. Collaborate on deployment strategies (blue-green, canary), scaling policies, and incident response procedures. Provide the instrumentation that SRE needs for monitoring.
- **With data engineers** — Design event schemas and CDC (Change Data Capture) pipelines. Ensure application databases are not abused as analytics warehouses. Coordinate on data retention and archival policies.
- **With security teams** — Participate in threat modeling sessions. Implement security controls at the application layer. Respond to vulnerability reports and dependency advisories promptly.
- **With product managers** — Translate business requirements into system design tradeoffs. Surface costs: "Real-time sync adds operational complexity; polling every 30 seconds gives us 90% of the UX at 20% of the cost."

## Hiring Signals

### Green Flags
- Can walk through the lifecycle of an HTTP request from DNS resolution to response rendering, including load balancers, TLS termination, connection pooling, and middleware chains
- Designs APIs from the consumer's perspective, not the database schema
- Understands CAP theorem tradeoffs and can articulate when eventual consistency is acceptable
- Has debugged production issues using logs, traces, and metrics — not just local reproduction
- Writes integration tests that use real databases (testcontainers), not mocks
- Can explain why idempotency matters and how to implement it
- Has opinions on database indexing backed by EXPLAIN plan analysis

### Red Flags
- Cannot explain the difference between authentication and authorization
- Designs APIs that leak internal implementation details (database IDs as sequential integers, internal field names in responses)
- Has never operated a service in production
- Uses ORM for everything without understanding the SQL it generates
- Cannot reason about concurrent access to shared resources
- Treats error handling as an afterthought (catch-all handlers, generic 500 responses)
- Has no strategy for database migrations in a running system

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn the fundamentals | Single endpoints | Write CRUD handlers, understand HTTP methods and status codes, write basic tests, learn SQL fundamentals |
| **Mid** | Own services | Full services | Design API contracts, manage database schemas, implement auth flows, handle error cases, write integration tests, set up basic monitoring |
| **Senior** | Drive reliability and performance | Multi-service | Architect service boundaries, design async workflows, optimize query performance, establish observability practices, mentor juniors, lead technical design reviews |
| **Staff** | Set system-wide standards | Org-wide | Define API standards and governance, drive platform decisions (service mesh, event bus, database strategy), establish reliability culture, own cross-team technical debt reduction |
| **Principal** | Shape architecture philosophy | Company-wide / industry | Define the company's distributed systems strategy, evaluate build-vs-buy for infrastructure, mentor staff engineers, contribute to industry standards and open-source platforms |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

