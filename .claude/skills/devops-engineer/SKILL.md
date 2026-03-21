---
name: devops-engineer
description: "Guide to DevOps Engineering — CI/CD, IaC (Terraform/Pulumi), containers, Kubernetes, GitOps. Use this skill whenever the user asks about DevOps practices, CI/CD pipelines, infrastructure as code, container orchestration, or deployment strategies."
disable-model-invocation: true
---

# DevOps Engineer

> The engineer who turns software delivery into a competitive advantage — automating everything between commit and production with reliability, speed, and auditability as non-negotiable constraints.

## What Elite Looks Like

A staff-level DevOps engineer doesn't just maintain CI/CD pipelines — they design delivery systems that make shipping safe, fast, and boring. They treat infrastructure as code with the same rigor as application code: version-controlled, peer-reviewed, tested, and continuously deployed. Their pipelines are self-healing, their deployments are reversible, and their monitoring catches problems before users do.

What separates elite from competent:
- **Pipeline-as-product thinking**: Treats CI/CD pipelines as first-class products with SLOs, documentation, and user feedback loops
- **Deployment strategy mastery**: Chooses between blue-green, canary, rolling, and feature-flag deployments based on risk profile, not habit
- **GitOps discipline**: Every infrastructure change flows through git — no manual kubectl applies, no console clicking, no snowflake servers
- **Observability by default**: Every pipeline emits metrics, every deployment creates traces, every failure produces actionable alerts
- **Blast radius thinking**: Designs systems where failures are contained — progressive rollouts, automatic rollbacks, circuit breakers
- **Developer experience focus**: Measures success by how fast and safely other engineers can ship, not by how complex the tooling is

## Core Responsibilities

- Design, build, and maintain CI/CD pipelines across the organization
- Implement and manage infrastructure-as-code (Terraform, Pulumi, CloudFormation)
- Build and maintain container orchestration platforms (Kubernetes, ECS)
- Establish GitOps workflows with ArgoCD, Flux, or equivalent
- Implement monitoring, alerting, and observability stacks (Prometheus, Grafana, Datadog)
- Automate security scanning in pipelines (SAST, DAST, dependency scanning, container scanning)
- Design and implement deployment strategies appropriate to each service's risk profile
- Manage secrets, configuration, and environment parity across dev/staging/production
- Build self-service tooling that enables developers to ship independently
- Conduct capacity planning and cost optimization for CI/CD infrastructure
- Create and maintain runbooks for common operational procedures
- Drive adoption of engineering best practices: trunk-based development, feature flags, semantic versioning

## Key Skills & Tools

### CI/CD Platforms

| Tool | Key Competencies |
|------|-----------------|
| **GitHub Actions** | Reusable workflows, composite actions, matrix strategies, self-hosted runners, OIDC for cloud auth, artifact management, environment protection rules |
| **GitLab CI** | Parent-child pipelines, DAG pipelines, dynamic child pipelines, Auto DevOps, review apps, merge trains, compliance pipelines |
| **Jenkins** | Pipeline-as-code (Jenkinsfile), shared libraries, distributed builds, plugin ecosystem management, migration to modern alternatives |
| **CircleCI / BuildKite** | Orbs/plugins, parallelism, resource classes, caching strategies |

### Infrastructure as Code

| Tool | Key Competencies |
|------|-----------------|
| **Terraform** | Module design, state management (remote backends, state locking), workspace strategies, import/migration, provider development, Terragrunt for DRY configs, drift detection |
| **Pulumi** | General-purpose language IaC, component resources, stack references, policy-as-code (CrossGuard), testing with real language test frameworks |
| **CloudFormation / CDK** | Nested stacks, custom resources, CDK constructs, cross-stack references, drift detection |

### Container & Orchestration

| Tool | Key Competencies |
|------|-----------------|
| **Docker** | Multi-stage builds, layer caching optimization, security scanning (Trivy, Snyk), rootless containers, BuildKit, Docker Compose for local dev |
| **Kubernetes** | Deployment strategies, HPA/VPA, RBAC, network policies, service mesh (Istio/Linkerd), Helm charts, Kustomize, operator patterns |
| **ArgoCD / Flux** | Application sets, sync waves, health checks, progressive delivery (Argo Rollouts), multi-cluster management, drift detection |

### Monitoring & Observability

| Tool | Key Competencies |
|------|-----------------|
| **Prometheus / Grafana** | PromQL, recording rules, alerting rules, Grafana dashboards as code, Thanos/Cortex for long-term storage |
| **Datadog / New Relic** | APM, custom metrics, log correlation, synthetic monitoring, SLO tracking |
| **OpenTelemetry** | Instrumentation, collector configuration, trace/metric/log correlation, vendor-agnostic observability |

### Scripting & Automation
- **Bash**: Pipeline scripts, operational automation, environment setup
- **Python**: Complex automation, API integrations, custom tooling, Boto3/cloud SDKs
- **Go**: CLI tools, Kubernetes operators, high-performance automation

## AI-First Practices

DevOps is one of the highest-leverage domains for AI augmentation — pipelines are repetitive, IaC is pattern-heavy, and incident triage benefits enormously from rapid context assembly.

### Pipeline Generation & Optimization
- Use AI to generate CI/CD pipeline scaffolds from project descriptions — then review and harden
- Generate matrix build configurations for complex multi-platform/multi-version testing
- Ask AI to identify parallelization opportunities in existing pipelines
- Generate GitHub Actions reusable workflows from existing inline pipeline definitions

### Infrastructure as Code
- Use AI to generate Terraform modules from architecture diagrams or descriptions
- Generate variable definitions, output blocks, and documentation from existing modules
- Ask AI to review Terraform plans for security issues, cost implications, and best practice violations
- Convert between IaC tools (CloudFormation to Terraform, Terraform to Pulumi)

### Incident Triage & Response
- Feed error logs and metrics to AI for rapid root cause hypothesis generation
- Use AI to draft incident communications (status page updates, stakeholder notifications)
- Generate postmortem documents from incident timelines and chat logs
- Ask AI to suggest monitoring gaps exposed by recent incidents

### Security & Compliance
- Generate security scanning pipeline stages for different languages and frameworks
- Use AI to review Dockerfiles for security best practices (non-root users, minimal base images, pinned versions)
- Generate RBAC policies, network policies, and security group rules from requirements
- Audit existing IaC for compliance with CIS benchmarks or organizational policies

### Documentation & Runbooks
- Generate runbooks from incident response patterns
- Create architecture decision records (ADRs) for infrastructure changes
- Generate onboarding documentation from pipeline and infrastructure code

## How They Collaborate

- **Software Engineers**: Provides self-service CI/CD, ensures pipelines are fast and reliable, reduces friction in the shipping path
- **SRE**: Partners on reliability — DevOps builds the deployment pipeline, SRE defines the reliability targets and incident response
- **Platform Engineers**: DevOps builds the CI/CD layer; platform engineering builds the developer experience layer on top
- **Security Engineers**: Integrates security scanning into pipelines, implements supply chain security (SLSA, Sigstore), manages secrets
- **Cloud Engineers**: Partners on infrastructure provisioning — DevOps automates deployment, cloud engineers design the architecture
- **Engineering Managers**: Reports on delivery metrics (deployment frequency, lead time, change failure rate, MTTR)
- **Product Managers**: Enables feature flags and progressive rollouts that support product experimentation

## Hiring Signals

### Green Flags
- Can explain their deployment strategy choices in terms of risk and business impact, not just technical preference
- Shows pipelines they've built and can explain the tradeoffs at each stage
- Talks about developer experience — how they measure and improve it
- Has opinions on state management in Terraform and can defend them
- Understands the DORA metrics and can discuss how they've improved them
- Can describe a time they rolled back a bad deployment and what they learned
- Treats infrastructure code with the same rigor as application code (tests, reviews, documentation)
- Knows when NOT to automate something

### Red Flags
- Console clickers who can't reproduce infrastructure from code
- "Works on my machine" tolerance — no environment parity discipline
- Over-engineers simple deployments (Kubernetes for a static site)
- Can't explain what their Terraform code does without running `terraform plan`
- No monitoring or alerting strategy — "we check the logs when users report issues"
- Treats CI/CD as a one-time setup, not an evolving product
- No rollback strategy or testing of rollback procedures
- Ignores security scanning results because "they're too noisy"

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Maintains existing pipelines, writes simple automation scripts, manages Docker builds, follows IaC patterns established by seniors |
| **Mid** | Designs CI/CD pipelines for new services, writes Terraform modules, implements monitoring, handles routine incidents, contributes to deployment strategies |
| **Senior** | Architects CI/CD platforms for multiple teams, designs deployment strategies, mentors on IaC best practices, leads incident response, optimizes pipeline performance at scale |
| **Staff** | Defines org-wide CI/CD standards, evaluates and adopts new tools, designs multi-region deployment architectures, drives DORA metric improvements across the organization, builds self-service platforms |
| **Principal** | Sets the technical vision for delivery infrastructure, influences industry practices, architects delivery systems for hundreds of services and teams, balances speed/safety/cost at organizational scale |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
