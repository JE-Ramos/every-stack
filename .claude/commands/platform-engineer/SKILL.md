---
name: platform-engineer
description: "Guide to Platform Engineering — internal developer platforms, Backstage, golden paths, self-service workflows. Use this skill whenever the user asks about platform engineering, internal developer platforms, developer experience infrastructure, or self-service tooling."
---

# Platform Engineer

> The engineer who builds the internal developer platform that makes every other engineer faster — turning infrastructure complexity into self-service golden paths that are secure, compliant, and delightful to use.

## What Elite Looks Like

A staff-level platform engineer thinks like a product manager and builds like a systems engineer. They don't just provision infrastructure — they design developer experiences. Their internal platforms have documentation, onboarding flows, feedback loops, and adoption metrics. They understand that the best platform is invisible: developers ship features without thinking about Kubernetes, networking, or compliance because the platform handles it.

What separates elite from competent:
- **Product thinking for internal tools**: Treats the platform as a product with users (developers), roadmaps, feedback loops, and adoption metrics
- **Golden path design**: Creates opinionated, well-lit paths that cover 80% of use cases while allowing escape hatches for the remaining 20%
- **Abstraction judgment**: Knows exactly how much infrastructure complexity to hide — too little and developers are overwhelmed, too much and they can't debug
- **Compliance as code**: Bakes security, compliance, and governance into the platform so teams get it for free rather than as a gate
- **Ecosystem thinking**: Understands how service catalogs, templates, CI/CD, observability, and secrets management connect into a cohesive experience
- **Adoption over mandate**: Builds platforms so good that teams adopt them voluntarily, not because they're forced to

## Core Responsibilities

- Design and build the internal developer platform (IDP) that accelerates software delivery
- Create and maintain service templates, golden paths, and scaffolding tools
- Build and operate developer portals (Backstage, Port, custom solutions)
- Maintain service catalogs with ownership, documentation, and dependency information
- Design self-service workflows for infrastructure provisioning (databases, queues, caches, environments)
- Implement compliance-as-code: policy engines, guardrails, and automated governance
- Build internal APIs and CLIs that abstract away infrastructure complexity
- Measure platform adoption, developer satisfaction, and time-to-production metrics
- Run platform team ceremonies: user interviews, roadmap planning, platform retrospectives
- Manage platform reliability — the platform is a product that must be highly available
- Create documentation, tutorials, and onboarding flows for platform capabilities
- Evaluate and integrate third-party tools into the platform ecosystem

## Key Skills & Tools

### Developer Portals & Service Catalogs

| Tool | Key Competencies |
|------|-----------------|
| **Backstage** | Software catalog (catalog-info.yaml), template system (scaffolder), TechDocs, plugin development, custom themes, search integration, RBAC, Kubernetes integration |
| **Port** | Self-service actions, scorecards, blueprints, automations, integrations with Git providers and cloud APIs |
| **Custom Portals** | When to build vs. buy, API design for internal tooling, frontend frameworks for internal tools |

### Platform Infrastructure

| Tool | Key Competencies |
|------|-----------------|
| **Kubernetes** | Multi-tenant cluster design, namespace strategies, resource quotas, admission controllers, custom operators, platform abstractions (Crossplane) |
| **Crossplane** | Compositions, XRDs (Composite Resource Definitions), provider configuration, claim-based provisioning, platform reference architectures |
| **Terraform/Pulumi** | Module libraries for self-service provisioning, Terraform Cloud/Enterprise workspace strategies, policy-as-code (Sentinel, OPA) |

### Policy & Governance

| Tool | Key Competencies |
|------|-----------------|
| **Open Policy Agent (OPA)** | Rego policy writing, Gatekeeper for Kubernetes, Conftest for IaC policy, bundle management |
| **Kyverno** | Kubernetes-native policy management, mutation policies, generation policies, policy reports |
| **Sentinel / CrossGuard** | Terraform/Pulumi policy-as-code, cost policies, security policies, compliance frameworks |

### Developer Experience Design
- **API design**: RESTful and gRPC internal APIs with clear contracts, versioning, and documentation
- **CLI development**: Internal CLIs (Go/Cobra, Python/Click) that abstract platform operations
- **Template engineering**: Cookiecutter, Yeoman, Backstage scaffolder templates that produce production-ready services
- **Documentation systems**: TechDocs, Docusaurus, or Notion-based internal knowledge bases with automated content from code

### Platform Product Management
- Developer satisfaction surveys (Developer Experience Index)
- Adoption metrics and funnel analysis
- Time-to-production measurement
- Platform reliability and availability SLOs
- Cost per developer, cost per deployment tracking

## AI-First Practices

Platform engineering generates enormous amounts of boilerplate, documentation, and configuration — making it one of the most AI-augmentable disciplines.

### Developer Portal Content Generation
- Use AI to generate service documentation from code, API specs, and README files
- Auto-generate TechDocs content from repository structure and configuration files
- Create onboarding guides and tutorials from platform capabilities
- Generate changelog summaries from Git history for platform releases

### API Documentation & Design
- Generate OpenAPI specs from existing API implementations
- Use AI to review API designs for consistency, naming conventions, and REST/gRPC best practices
- Generate client SDK stubs and usage examples from API specifications
- Create API migration guides when making breaking changes

### Template & Golden Path Development
- Use AI to generate Backstage scaffolder templates from existing well-configured services
- Generate Cookiecutter/scaffolding templates that embed organizational best practices
- Review templates for security best practices, missing observability, or compliance gaps
- Generate test suites for templates to ensure they produce valid, deployable services

### Platform Usage Analytics
- Use AI to analyze platform adoption data and identify friction points
- Generate reports on self-service usage patterns, common failures, and support ticket themes
- Draft platform roadmap items based on developer feedback analysis
- Identify teams that would benefit from platform adoption based on their tooling patterns

### Policy & Compliance Automation
- Generate OPA/Rego policies from natural language compliance requirements
- Use AI to review and test policy rules for correctness and coverage
- Create compliance documentation from policy-as-code definitions
- Generate exception request workflows from policy violation patterns

## How They Collaborate

- **Software Engineers**: Primary customers — platform engineers build for them, measure success by their productivity and satisfaction
- **DevOps Engineers**: Close partners — DevOps builds CI/CD primitives, platform engineering wraps them in self-service workflows
- **SRE**: Partners on reliability — SRE defines operational standards, platform engineering bakes them into templates and golden paths
- **Security Engineers**: Integrates security controls into the platform so developers get secure-by-default configurations
- **Cloud Engineers**: Platform engineering consumes cloud primitives and exposes them as higher-level self-service abstractions
- **Engineering Managers**: Reports on developer productivity, platform adoption, and delivery metrics
- **CTO / VP Engineering**: Aligns platform roadmap with organizational engineering strategy and investment priorities

## Hiring Signals

### Green Flags
- Talks about developers as customers and can describe how they gather and respond to feedback
- Has measured platform adoption and can discuss what drove or hindered it
- Can explain their abstraction decisions — what they exposed vs. hid from developers
- Shows examples of golden paths and explains why they're opinionated in specific ways
- Understands the tension between standardization and flexibility, and has a framework for navigating it
- Has built self-service workflows and can describe the developer experience end-to-end
- Talks about platform reliability as a first-class concern
- Can articulate the difference between platform engineering and DevOps

### Red Flags
- Builds platforms nobody uses and blames developers for not adopting them
- Over-abstracts everything — developers can't debug because the platform hides too much
- No feedback mechanism — builds what they think is cool rather than what developers need
- Treats the platform as infrastructure, not as a product
- Can't explain why a developer would choose their golden path over doing it themselves
- No documentation or onboarding — "just read the code"
- Mandates platform usage through policy rather than earning adoption through quality
- Ignores platform reliability — "it's just internal tooling"

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Maintains existing platform components, writes documentation, handles support tickets, contributes to templates and golden paths |
| **Mid** | Builds new self-service capabilities, designs Backstage plugins, implements policy-as-code, conducts developer interviews, manages platform feature requests |
| **Senior** | Designs major platform subsystems, defines golden path architectures, leads platform adoption initiatives, mentors on abstraction design, owns platform reliability |
| **Staff** | Architects the overall internal developer platform, defines the platform product roadmap, establishes platform engineering practices across the org, drives developer productivity metrics |
| **Principal** | Sets the technical vision for developer experience across the organization, influences industry platform engineering practices, designs platforms that scale to hundreds of teams, balances platform investment against business outcomes |

## RTFM -- Essential Reading

### Books
- **Team Topologies** (Matthew Skelton, Manuel Pais) -- The foundational text for platform engineering. Defines platform teams, stream-aligned teams, and interaction modes. Required reading
- **Platform Engineering on Kubernetes** (Mauricio Salatino) -- Practical guide to building platforms on Kubernetes with Crossplane, ArgoCD, and developer portals
- **Effective Platform Engineering** (Gregor Hohpe) -- Patterns for building internal platforms that developers actually want to use
- **Infrastructure as Code, 2nd Edition** (Kief Morris) -- Patterns for the infrastructure layer that platforms abstract over
- **Building Evolutionary Architectures** (Neal Ford, Rebecca Parsons, Patrick Kua) -- Fitness functions and governance automation concepts that underpin compliance-as-code

### Documentation & Guides
- [Backstage Documentation](https://backstage.io/docs/) -- Official docs for the leading open-source developer portal. Start with "Getting Started" and "Software Catalog"
- [Crossplane Documentation](https://docs.crossplane.io/) -- Kubernetes-native control plane for building platforms. Essential for self-service infrastructure
- [Port Documentation](https://docs.getport.io/) -- Alternative developer portal with strong self-service action capabilities
- [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) -- CNCF's definition and guidance on platform engineering
- [Internal Developer Platform (IDP) Documentation](https://internaldeveloperplatform.org/) -- Community resource defining what IDPs are and how to build them

### Articles & Resources
- [What Is Platform Engineering?](https://platformengineering.org/blog/what-is-platform-engineering) -- platformengineering.org's definitive overview
- [Thoughtworks Technology Radar](https://www.thoughtworks.com/radar) -- Track platform engineering tool adoption and trends
- [How to Build a Platform Team](https://martinfowler.com/articles/building-infrastructure-platform.html) -- Martin Fowler's guide to structuring platform teams
- [The Platform Engineering Maturity Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/) -- CNCF TAG App Delivery's maturity framework
- [Humanitec Platform Engineering Blog](https://humanitec.com/blog) -- Practical articles on IDP design and reference architectures

### Courses & Community
- [PlatformCon](https://platformcon.com/) -- Annual platform engineering conference with free recordings
- [Platform Engineering Community on Slack](https://platformengineering.org/slack) -- Active community for discussion and knowledge sharing
- [KubeCon + CloudNativeCon](https://www.cncf.io/kubecon-cloudnativecon-events/) -- Platform engineering track at the premier cloud-native conference

### Open Source Projects to Study
- [Backstage](https://github.com/backstage/backstage) -- Spotify's open-source developer portal, now a CNCF project
- [Crossplane](https://github.com/crossplane/crossplane) -- Build control planes without needing to write a Kubernetes controller
- [Kratix](https://github.com/syntasso/kratix) -- Framework for building platforms-as-a-product on Kubernetes
- [Port](https://github.com/port-labs) -- Developer portal with self-service actions and scorecards
- [cnoe.io](https://cnoe.io/) -- Cloud Native Operational Excellence — reference architecture for internal developer platforms

## References

- CNCF Platforms White Paper -- [tag-app-delivery.cncf.io/whitepapers/platforms](https://tag-app-delivery.cncf.io/whitepapers/platforms/)
- Platform Engineering Maturity Model -- [CNCF TAG App Delivery](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/)
- Thoughtworks Technology Radar -- [thoughtworks.com/radar](https://www.thoughtworks.com/radar)
- progression.fyi -- [progression.fyi](https://progression.fyi/)
- Engineering Ladders -- [github.com/jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)
