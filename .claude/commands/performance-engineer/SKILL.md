---
name: performance-engineer
description: "Guide to Performance Engineering — load testing, profiling, APM, database optimization, capacity planning. Use this skill whenever the user asks about performance testing, load testing, profiling, bottleneck analysis, or capacity planning."
---

# Performance Engineer

> The engineer who treats performance as a feature — measurable, budgeted, and defended — ensuring systems stay fast under real-world conditions, not just on a developer's laptop.

## What Elite Looks Like

A staff-level performance engineer doesn't just run load tests and report numbers. They build performance into the system's DNA — establishing budgets at design time, embedding measurement into CI, and creating organizational awareness that every millisecond of latency costs revenue, engagement, and user trust. They think in percentiles, not averages. They profile methodically, not guessing. They understand performance from the browser's first paint to the database's last disk seek.

What separates elite from competent:
- **Systems thinking**: Understands performance end-to-end — DNS resolution, TLS handshake, server processing, database queries, serialization, network transfer, client rendering. Doesn't optimize one layer while ignoring the bottleneck in another
- **Measurement discipline**: Never optimizes without profiling first. Uses flame graphs, traces, and APM data to identify actual bottlenecks — not suspected ones
- **Percentile awareness**: Thinks in p50/p95/p99, not averages. Knows that a 200ms average can hide a 5-second p99 tail that destroys user experience for 1 in 100 requests
- **Capacity planning**: Models system behavior under growth — can predict when infrastructure needs to scale based on current trends and planned features
- **Performance budgets**: Establishes and enforces measurable budgets (Core Web Vitals, API latency SLOs, bundle size limits) that prevent gradual degradation
- **Cost-performance optimization**: Understands the relationship between performance and infrastructure cost — sometimes the right optimization saves thousands in compute
- **Regression prevention**: Builds automated performance gates that catch regressions before they reach production

## Core Responsibilities

- Design and execute load testing strategies (baseline, stress, soak, spike, capacity tests)
- Profile and optimize application performance across the full stack — frontend, backend, database, network
- Establish and maintain performance budgets and SLOs for critical user journeys
- Build performance regression detection into CI/CD pipelines
- Conduct capacity planning and growth modeling for infrastructure scaling decisions
- Optimize database queries, indexing strategies, and connection pooling
- Design and implement caching strategies at every layer (browser, CDN, application, database)
- Monitor and optimize Core Web Vitals and frontend performance
- Analyze APM telemetry to identify performance trends and anomalies
- Tune infrastructure — JVM/runtime settings, connection pools, thread pools, buffer sizes
- Create performance dashboards and reporting for engineering and business stakeholders
- Conduct performance reviews for architectural changes and new feature designs

## Key Skills & Tools

### Load Testing

| Tool | Strengths | Key Skills |
|------|-----------|------------|
| **k6** | JavaScript ES6, developer-friendly, Grafana integration, extensions | Scenario design, custom metrics, thresholds, checks, load profiles (ramping VUs, constant arrival rate), distributed execution with k6-operator |
| **Gatling** | Scala DSL, high throughput, detailed HTML reports | Simulation design, feeders for test data, assertions, CI integration via Maven/Gradle |
| **Locust** | Python, distributed by design, web UI | Custom user behavior, event hooks, distributed load generation, custom shapes |
| **Artillery** | YAML-based, serverless execution, Playwright integration | Scenario scripting, phases, custom engines, Artillery Pro for SaaS execution |
| **JMeter** | Mature ecosystem, protocol support, GUI for design | Thread groups, samplers, listeners, distributed testing, JSR223 scripting |

### Profiling & Analysis

| Domain | Tools & Techniques |
|--------|-------------------|
| **CPU Profiling** | Flame graphs (Brendan Gregg's tools), async-profiler (JVM), py-spy (Python), Chrome DevTools CPU profiler, perf (Linux) |
| **Memory Profiling** | Heap snapshots, allocation timelines, MAT (Eclipse Memory Analyzer), memory_profiler (Python), Chrome DevTools Memory panel |
| **Frontend** | Chrome DevTools Performance panel, Lighthouse, WebPageTest, Core Web Vitals field data (CrUX), request waterfall analysis |
| **Database** | EXPLAIN/EXPLAIN ANALYZE, slow query logs, pg_stat_statements, Query Store (SQL Server), index advisor tools |
| **Distributed Tracing** | Jaeger, Zipkin, OpenTelemetry traces, Datadog APM traces — identifying latency across service boundaries |
| **Network** | HAR file analysis, TCP dump, Wireshark, mtr/traceroute, DNS timing |

### APM & Observability

- **Datadog**: APM traces, infrastructure metrics, custom dashboards, anomaly detection, SLO tracking
- **New Relic**: Full-stack observability, distributed tracing, error tracking, browser monitoring
- **Grafana Stack**: Grafana dashboards + Prometheus metrics + Loki logs + Tempo traces — the open-source observability stack
- **OpenTelemetry**: Vendor-neutral instrumentation — traces, metrics, logs — with auto-instrumentation for most languages

### Optimization Techniques

- **Caching**: Browser cache headers (Cache-Control, ETag), CDN caching (Cloudflare, CloudFront), application caching (Redis, Memcached), query result caching, memoization
- **Database optimization**: Query rewriting, index design (B-tree, hash, GIN, GiST), connection pooling (PgBouncer, ProxySQL), read replicas, query plan analysis, N+1 detection
- **Frontend optimization**: Code splitting, lazy loading, image optimization (WebP/AVIF, responsive images), tree shaking, critical CSS, resource hints (preload, prefetch, preconnect)
- **API optimization**: Pagination strategies, field selection (GraphQL/sparse fieldsets), compression (gzip/Brotli), HTTP/2 multiplexing, connection reuse
- **Infrastructure tuning**: JVM heap and GC tuning, worker/thread pool sizing, connection pool configuration, kernel parameter tuning (TCP buffers, file descriptors)

### Core Web Vitals & Frontend Performance

- **LCP (Largest Contentful Paint)**: Optimizing server response time, resource load time, render-blocking resources, client-side rendering
- **INP (Interaction to Next Paint)**: Reducing input delay, processing time, and presentation delay for interactive elements
- **CLS (Cumulative Layout Shift)**: Explicit sizing for media, stable layout patterns, font loading strategies (font-display, preload)
- **TTFB (Time to First Byte)**: Server-side rendering optimization, CDN configuration, edge computing (Cloudflare Workers, Lambda@Edge)

## AI-First Practices

AI accelerates the most time-consuming parts of performance engineering:

- **Bottleneck analysis**: Feed APM traces, slow query logs, or flame graph data to AI to identify the most impactful optimization targets. AI excels at pattern recognition across large datasets of performance telemetry
- **Load test script generation**: Describe user journeys and traffic patterns to AI to generate k6/Gatling/Locust test scripts. Review carefully — AI may miss authentication flows, think times, and correlation requirements
- **Query optimization**: Paste EXPLAIN ANALYZE output and schema definitions to AI for index recommendations and query rewrites. AI is surprisingly effective at SQL optimization, but always validate with actual execution plans
- **Performance report generation**: Use AI to analyze load test results and generate executive summaries — translating p95 latency numbers and error rates into business impact narratives
- **Configuration tuning**: Describe your workload characteristics and infrastructure to AI for initial tuning recommendations (JVM heap, connection pools, worker counts). Use as starting points, then validate with benchmarks
- **Caching strategy design**: Describe data access patterns and freshness requirements to AI for cache architecture recommendations — what to cache, TTL strategies, invalidation approaches
- **Root cause correlation**: During performance incidents, feed multiple data sources (metrics, logs, traces) to AI to correlate symptoms across services and identify probable root causes

### AI Anti-Patterns in Performance Engineering
- Optimizing based on AI suggestions without profiling first — you'll optimize the wrong thing
- Trusting AI-generated load test scripts without validating they produce realistic traffic patterns
- Accepting database index recommendations without checking write amplification impact
- Using AI-suggested configurations in production without benchmarking in staging

## How They Collaborate

- **Backend Developers**: Co-optimize critical code paths, review database queries, design caching strategies, establish API performance contracts
- **Frontend Developers**: Optimize Core Web Vitals together, implement code splitting and lazy loading, review bundle sizes and asset loading strategies
- **DevOps/Platform Engineers**: Co-design auto-scaling policies, tune infrastructure, implement performance monitoring and alerting
- **QA Engineers**: Integrate performance testing into CI pipelines, share load testing environments, coordinate performance regression testing
- **Product Managers**: Translate performance SLOs into product requirements, quantify the business impact of performance improvements
- **Database Administrators**: Co-optimize query plans, design indexing strategies, plan capacity for data growth
- **SRE/On-Call Teams**: Share performance runbooks, correlate performance degradation with incidents, establish performance-based alerting

## Hiring Signals

### Green Flags
- Thinks in percentiles (p50/p95/p99), not averages — can explain why averages lie
- Profiles before optimizing — can describe a methodical approach to finding bottlenecks
- Understands the full request lifecycle — DNS, TLS, server processing, database, serialization, network, rendering
- Has experience with multiple profiling tools and can explain what each reveals
- Can describe a performance regression they caught and how they traced it to root cause
- Understands caching tradeoffs — not just "add a cache" but invalidation strategies, consistency implications, and cache stampede prevention
- Has designed load tests that model real-world traffic patterns, not just "send 1000 concurrent requests"
- Can translate performance metrics into business impact — "p99 latency improvement saved X in infrastructure costs"

### Red Flags
- Only knows one load testing tool and applies it identically to every situation
- Reports averages without percentile breakdowns — doesn't understand tail latency
- Optimizes without profiling — "I just know the database is slow"
- Cannot explain the USE method (Utilization, Saturation, Errors) or any systematic analysis methodology
- Has never used a flame graph or distributed trace
- Focuses exclusively on backend performance, ignoring frontend or network
- "Just add more servers" as the primary optimization strategy
- Cannot explain the difference between throughput and latency, or stress testing vs. soak testing

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Runs load tests from existing scripts and reports results. Uses browser DevTools to identify frontend performance issues. Learns to read APM dashboards and flame graphs. Follows performance optimization checklists |
| **Mid** | Designs and implements load test scenarios for features. Profiles and optimizes database queries and application code. Configures APM tooling and creates performance dashboards. Identifies and fixes performance regressions. Understands caching fundamentals |
| **Senior** | Owns performance strategy for a product area. Designs load test architectures for complex distributed systems. Conducts capacity planning and growth modeling. Establishes performance budgets and SLOs. Mentors developers on performance best practices. Implements performance regression detection in CI/CD |
| **Staff** | Defines organization-wide performance strategy and standards. Architects performance testing infrastructure used across all teams. Builds performance culture — budgets, SLOs, and optimization are part of every design review. Conducts deep-dive performance investigations across distributed systems. Makes infrastructure cost-performance tradeoff decisions. Introduces new performance practices (continuous profiling, synthetic monitoring, edge optimization) |
| **Principal** | Sets performance vision for the engineering organization. Drives performance requirements into architecture decisions. Builds performance engineering as a discipline with tools, training, and career paths. Evaluates new technologies (edge computing, new databases, new runtimes) for performance characteristics. Publishes performance research and contributes to performance tooling. Advises executive leadership on performance investment and infrastructure strategy |

## RTFM — Essential Reading

### Books
- [High Performance Browser Networking](https://hpbn.co/) — Ilya Grigorik. Free online. The definitive guide to network performance — TCP, TLS, HTTP/2, WebSocket, and browser networking internals. Every web performance engineer must read this
- [Systems Performance: Enterprise and the Cloud](https://www.brendangregg.com/systems-performance-2nd-edition-book.html) — Brendan Gregg. The bible of systems performance analysis — covers CPU, memory, I/O, network, and the USE/RED methodologies
- [BPF Performance Tools](https://www.brendangregg.com/bpf-performance-tools-book.html) — Brendan Gregg. Advanced Linux performance analysis and tracing with BPF
- [Designing Data-Intensive Applications](https://dataintensive.net/) — Martin Kleppmann. Essential context on database internals, replication, and distributed system performance characteristics
- [Database Internals](https://www.databass.dev/) — Alex Petrov. Deep dive into storage engines, B-trees, LSM-trees, and distributed database architectures

### Documentation & Guides
- [web.dev Performance](https://web.dev/performance/) — Google's comprehensive frontend performance guides covering Core Web Vitals, loading, rendering, and measurement
- [Brendan Gregg's USE Method](https://www.brendangregg.com/usemethod.html) — Utilization, Saturation, Errors — the systematic methodology for analyzing system performance
- [k6 Documentation](https://grafana.com/docs/k6/latest/) — Load testing best practices, test types, and scripting guides
- [Chrome DevTools Performance Panel](https://developer.chrome.com/docs/devtools/performance/) — Official guide to profiling runtime and rendering performance

### Articles & Resources
- [Brendan Gregg's Blog](https://www.brendangregg.com/blog/) — The authority on systems performance analysis, flame graphs, and observability
- [Flame Graphs](https://www.brendangregg.com/flamegraphs.html) — Brendan Gregg's original flame graph documentation and tooling
- [Google CrUX (Chrome User Experience Report)](https://developer.chrome.com/docs/crux/) — Field performance data from real Chrome users
- [The Cost of JavaScript](https://v8.dev/blog/cost-of-javascript-2019) — Addy Osmani's analysis of JavaScript performance impact on modern web applications
- [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832) — Jonas Boner's essential latency reference for system design decisions

### Tools & OSS Projects
- [k6](https://github.com/grafana/k6) — Modern load testing tool with JavaScript scripting and Grafana integration
- [Grafana](https://github.com/grafana/grafana) — The standard for performance dashboards and observability visualization
- [OpenTelemetry](https://opentelemetry.io/) — Vendor-neutral observability framework for traces, metrics, and logs
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) — Automated web performance auditing and Core Web Vitals measurement
- [async-profiler](https://github.com/async-profiler/async-profiler) — Low-overhead sampling profiler for JVM with flame graph output
- [py-spy](https://github.com/benfred/py-spy) — Sampling profiler for Python programs with flame graph support

## References

- Brendan Gregg's Performance Resources — [brendangregg.com](https://www.brendangregg.com/)
- web.dev Performance — [web.dev/performance](https://web.dev/performance/)
- Google Core Web Vitals — [web.dev/vitals](https://web.dev/vitals/)
- progression.fyi — [progression.fyi](https://progression.fyi/)
- Engineering Ladders — [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
