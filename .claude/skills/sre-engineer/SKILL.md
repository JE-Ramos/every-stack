---
name: sre-engineer
description: "Guide to Site Reliability Engineering — SLOs/SLIs, incident management, chaos engineering, observability, toil reduction. Use this skill whenever the user asks about SRE practices, reliability, incident response, error budgets, or chaos engineering."
disable-model-invocation: true
---

# Site Reliability Engineer (SRE)

> The engineer who quantifies reliability, defends it with error budgets, and systematically eliminates toil — ensuring systems stay up not through heroics but through engineering discipline.

## What Elite Looks Like

A staff-level SRE doesn't firefight — they engineer reliability into the system before fires start. They define SLOs that align with business outcomes, build observability that answers questions nobody has asked yet, and run incident response processes so disciplined that the org learns faster from each failure. They view toil as a bug and automation as the fix.

What separates elite from competent:
- **SLO-driven decision making**: Every reliability decision ties back to SLOs and error budgets — not gut feelings or uptime vanity metrics
- **Observability over monitoring**: Builds systems where you can ask arbitrary questions about production behavior, not just check predefined dashboards
- **Incident command mastery**: Runs incidents with calm authority — clear roles, structured communication, decisive action, thorough follow-up
- **Toil elimination discipline**: Tracks and reduces toil systematically, treating it as a metric that must trend downward quarter over quarter
- **Chaos engineering practice**: Proactively finds failures through controlled experiments, not by waiting for production to surprise them
- **Error budget policy**: Uses error budgets as a negotiation tool between reliability and feature velocity, not just a number on a dashboard
- **Capacity modeling**: Predicts resource needs from growth models and load patterns, not reactive scaling after outages

## Core Responsibilities

- Define, implement, and track SLOs/SLIs/SLAs for critical services
- Manage error budgets and enforce error budget policies with product and engineering teams
- Build and maintain observability infrastructure (metrics, logs, traces, profiling)
- Design and run incident management processes (on-call rotations, escalation paths, war rooms)
- Conduct and facilitate blameless postmortems that produce actionable improvements
- Identify, measure, and eliminate toil through automation
- Perform capacity planning based on growth projections and load testing data
- Design and execute chaos engineering experiments
- Build and maintain alerting systems that are high-signal and low-noise
- Collaborate with development teams to improve service reliability during design and development
- Create and maintain runbooks for operational procedures
- Conduct reliability reviews for new services and major changes
- Define and enforce production readiness standards

## Key Skills & Tools

### Observability Stack

| Tool | Key Competencies |
|------|-----------------|
| **Prometheus / Thanos / Cortex** | PromQL mastery, recording rules, alerting rules, federation, long-term storage with Thanos/Cortex, cardinality management |
| **Grafana** | Dashboard-as-code (Grafonnet/Terraform), variable templates, annotations, alert rules, Grafana OnCall, SLO dashboards |
| **OpenTelemetry** | SDK instrumentation, Collector pipelines, trace/metric/log correlation, tail-based sampling, vendor-agnostic export |
| **Elasticsearch/Loki/Splunk** | Log aggregation, structured logging, log-based alerting, log correlation with traces, retention policies |
| **Jaeger / Tempo** | Distributed tracing, trace analysis, service dependency graphs, latency analysis, trace-to-log correlation |

### SLO Management

| Concept | Implementation |
|---------|---------------|
| **SLIs** | Request success rate, latency percentiles (p50/p95/p99), throughput, data freshness, correctness |
| **SLOs** | Target reliability expressed as SLIs over time windows (rolling 30-day, calendar month), multi-window/multi-burn-rate alerting |
| **Error Budgets** | Budget = 1 - SLO target. Track consumption rate. Policy: when budget is exhausted, freeze features and focus on reliability |
| **SLO Tools** | Sloth (Prometheus-based SLO generator), Google SLO Generator, Nobl9, Datadog SLO tracking |

### Incident Management

| Phase | Tools & Practices |
|-------|------------------|
| **Detection** | Multi-window/multi-burn-rate alerts, anomaly detection, synthetic monitoring, real-user monitoring |
| **Response** | PagerDuty/Opsgenie for on-call, incident commander role, structured communication (Slack channels, status pages), severity classification |
| **Mitigation** | Runbook execution, rollback procedures, traffic shifting, feature flag toggles, capacity scaling |
| **Analysis** | Blameless postmortems, timeline reconstruction, contributing factor analysis, action item tracking |
| **Prevention** | Action item follow-through, reliability reviews, chaos engineering, load testing |

### Chaos Engineering
- **Principles**: Steady state hypothesis, inject real-world failures, run in production (safely), minimize blast radius, automate experiments
- **Tools**: Litmus Chaos, Chaos Monkey, Gremlin, AWS Fault Injection Simulator, Chaos Mesh
- **Experiments**: Network partitions, CPU/memory pressure, pod termination, dependency failures, latency injection, zone failures

### Capacity Planning
- Load testing (k6, Locust, Gatling) and benchmarking
- Resource utilization modeling and forecasting
- Auto-scaling configuration and testing (HPA, KEDA, cloud auto-scaling groups)
- Cost-per-request analysis and optimization

## AI-First Practices

SRE deals with massive volumes of signals (logs, metrics, traces, alerts) and repetitive operational patterns — a natural fit for AI augmentation.

### Incident Analysis & Response
- Feed incident timelines, logs, and metrics to AI for rapid root cause hypothesis generation
- Use AI to correlate across multiple signal types (logs + metrics + traces) during active incidents
- Generate incident summary updates for stakeholder communication during ongoing incidents
- Draft initial postmortem documents from incident chat logs, runbook executions, and timeline data

### Runbook Generation & Maintenance
- Generate runbooks from incident response patterns and postmortem action items
- Use AI to review existing runbooks for completeness, accuracy, and automation opportunities
- Convert tribal knowledge (Slack threads, wiki pages, on-call notes) into structured runbooks
- Generate decision trees for complex troubleshooting workflows

### Alert Tuning & SLO Management
- Analyze alert firing patterns to identify noisy, redundant, or low-value alerts
- Use AI to suggest alert thresholds based on historical data and SLO targets
- Generate multi-window/multi-burn-rate alert configurations from SLO definitions
- Draft SLO proposals by analyzing historical service performance data

### Postmortem Writing
- Generate postmortem drafts from incident timelines, chat transcripts, and metrics data
- Use AI to identify patterns across multiple postmortems (recurring contributing factors, systemic issues)
- Suggest action items based on similar incidents in the organization's postmortem archive
- Review postmortems for blameful language and suggest blameless alternatives

### Toil Identification
- Analyze on-call ticket patterns to identify automation opportunities
- Classify operational tasks by toil characteristics (manual, repetitive, automatable, no lasting value)
- Generate automation scripts for common toil tasks identified from ticket analysis
- Estimate toil reduction ROI to prioritize automation efforts

## How They Collaborate

- **Software Engineers**: Partners on service reliability — SREs review designs for reliability, developers implement changes to meet SLOs
- **DevOps Engineers**: SRE defines reliability requirements, DevOps implements the deployment and monitoring infrastructure
- **Platform Engineers**: SRE defines production readiness standards, platform engineering bakes them into golden paths
- **Product Managers**: Negotiates reliability vs. feature velocity using error budgets as a shared framework
- **Engineering Managers**: Reports on reliability metrics, on-call health, toil trends, and incident patterns
- **Security Engineers**: Partners on security incident response, ensures security controls don't degrade reliability
- **Customer Support**: Provides technical context for customer-facing issues, receives early warning of reliability degradation

## Hiring Signals

### Green Flags
- Can explain SLOs in terms of user experience and business outcomes, not just technical metrics
- Has a framework for deciding what to alert on (and more importantly, what NOT to alert on)
- Describes incidents in terms of contributing factors, not root causes (understands complex systems thinking)
- Can articulate how they've reduced toil with specific examples and metrics
- Understands the tension between reliability and velocity and has navigated it using error budgets
- Shows postmortems they've facilitated and can explain what made them effective
- Talks about observability as asking questions, not just watching dashboards
- Has experience with chaos engineering and can describe experiments they've designed

### Red Flags
- Equates reliability with "five nines" without understanding the cost or user impact
- "Root cause" thinking — believes every incident has one cause and one fix
- Hero culture — proud of firefighting, not of preventing fires
- No SLOs or error budgets — reliability decisions are vibes-based
- Alert fatigue acceptance — treats hundreds of alerts per day as normal
- No postmortem process or postmortems that assign blame
- Can't distinguish monitoring from observability
- Treats toil as "just part of the job" rather than a problem to solve

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Participates in on-call rotations, follows runbooks, contributes to postmortems, builds dashboards, writes basic alerts |
| **Mid** | Defines SLOs for services, writes and maintains runbooks, facilitates postmortems, implements monitoring improvements, reduces toil for their team |
| **Senior** | Designs observability strategy for service domains, leads incident response, conducts chaos engineering experiments, mentors on SRE practices, owns capacity planning for critical services |
| **Staff** | Defines org-wide SLO framework and error budget policies, architects observability platforms, transforms incident management culture, drives systemic reliability improvements across dozens of services |
| **Principal** | Sets reliability strategy for the organization, influences industry SRE practices, designs reliability frameworks that scale to hundreds of services, balances reliability investment against business velocity at executive level |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

