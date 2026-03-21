---
name: product-engineer
description: "Guide to Product Engineering — the hybrid product+engineering role, experimentation, feature flags, business metrics. Use this skill whenever the user asks about product engineering, building product sense as an engineer, A/B testing, or the product-engineer hybrid role."
disable-model-invocation: true
---

# Product Engineer

> The engineer who ships business outcomes, not just code — combining full-stack technical depth with product intuition to own features from idea through impact measurement.

## What Elite Looks Like

A staff-level product engineer is the most dangerous person in a product organization: they can identify the right problem, design the solution, build it end-to-end, ship it behind a feature flag, measure its impact, and iterate — all without a handoff. They think in customer outcomes and business metrics, not story points and technical milestones. They challenge product requirements with data, kill features that aren't working, and ship MVPs that learn faster than competitors.

This is an emerging role that reflects a fundamental shift: the best product teams no longer separate "people who decide what to build" from "people who build it." Product engineers collapse that gap.

What separates elite from competent:
- **Product sense as an engineering skill**: Can look at a feature request and immediately ask "what metric does this move?" and "what's the cheapest experiment to validate this?"
- **End-to-end ownership**: Doesn't wait for a designer to pixel-perfect every state, a PM to write every acceptance criterion, or a data engineer to set up every tracking event. Fills gaps and keeps shipping
- **Speed as a strategy**: Understands that shipping a good solution today beats shipping a perfect solution next month. Masters rapid prototyping, feature flags, and progressive rollouts
- **Metrics fluency**: Can set up analytics instrumentation, define success criteria before building, run A/B tests, and interpret results with statistical rigor — not just "the number went up"
- **Customer empathy through code**: Reads support tickets, watches session replays, talks to customers, and translates qualitative pain into quantitative improvement opportunities
- **Business model awareness**: Understands how their features connect to revenue, retention, and acquisition — can prioritize work based on business impact, not technical interest

## Core Responsibilities

- Own features end-to-end: from problem identification through implementation, launch, measurement, and iteration
- Collaborate with (and sometimes challenge) product managers on feature scope, priorities, and success metrics
- Build and maintain full-stack features across frontend, backend, and infrastructure layers
- Instrument analytics and tracking for every feature shipped — no dark launches without measurement
- Design and run A/B tests and feature experiments with proper statistical methodology
- Manage feature flags for progressive rollouts, kill switches, and experimentation
- Conduct lightweight user research: session replay analysis, support ticket mining, direct customer conversations
- Make build/buy/integrate decisions for non-core functionality — optimize for shipping speed, not engineering novelty
- Contribute to product strategy through technical feasibility analysis and "what if we could..." proposals
- Reduce time-to-value for customers by removing friction from onboarding, core workflows, and upgrade paths

## Key Skills & Tools

### Full-Stack Engineering

| Layer | Key Skills |
|-------|-----------|
| **Frontend** | React/Next.js or equivalent modern framework, responsive design, accessibility (WCAG), performance optimization (Core Web Vitals), state management, design system consumption |
| **Backend** | API design (REST/GraphQL), database modeling, authentication/authorization, background jobs, caching strategies, third-party integrations |
| **Infrastructure** | CI/CD pipelines, deployment strategies (blue-green, canary), containerization, serverless functions, edge computing, monitoring and alerting |
| **Data** | SQL fluency, analytics event design, data pipeline awareness, basic data modeling for product analytics |

### Product Sense

Product sense is not innate — it's built through deliberate practice:
- **Problem framing**: "Why are we building this?" before "How should we build this?" — every feature should trace to a user problem and a business outcome
- **Opportunity sizing**: Back-of-envelope estimation of impact — "If we fix this flow, how many users does it affect and what's the conversion uplift?"
- **Solution scoping**: Finding the smallest version that tests the hypothesis. The MVP is not a shitty v1 — it's the minimum experiment that produces learning
- **Trade-off articulation**: Can explain why they chose approach A over B in terms a PM and a CEO both understand — not just technical trade-offs but business trade-offs

### Experimentation and Analytics

| Capability | Details |
|-----------|---------|
| **A/B testing** | Experiment design, sample size calculation, statistical significance, common pitfalls (peeking, multiple comparisons, novelty effects). Tools: LaunchDarkly, Statsig, Optimizely, PostHog |
| **Feature flags** | Progressive rollouts (1% → 10% → 50% → 100%), kill switches, user segment targeting, flag lifecycle management. Tools: LaunchDarkly, Unleash, Flagsmith, Statsig |
| **Product analytics** | Event taxonomy design, funnel analysis, cohort analysis, retention curves, user segmentation. Tools: Amplitude, Mixpanel, PostHog, Heap |
| **Session replay** | Identifying UX friction through real user behavior, not assumptions. Tools: FullStory, Hotjar, PostHog, LogRocket |

### Rapid Prototyping
- **High-fidelity prototypes in code**: Build clickable prototypes in the actual tech stack rather than Figma — faster for engineers and more realistic for user testing
- **Disposable code mindset**: Prototypes are for learning, not production. Write fast, validate, then rebuild properly if the hypothesis is confirmed
- **API mocking**: Build frontend experiences before backends are ready using mock APIs, static data, and optimistic UI patterns
- **Design system leverage**: Use existing component libraries to assemble new experiences in hours, not days

### Customer-Facing Communication
- Write clear release notes, changelog entries, and in-app announcements
- Craft error messages that help users recover, not just report failures
- Design onboarding flows and tooltips that reduce time-to-value
- Participate in customer calls and demos when deep technical context is needed

### Business Metrics Understanding

| Metric Category | Examples | Why Product Engineers Care |
|----------------|----------|---------------------------|
| **Acquisition** | Sign-ups, activation rate, time-to-first-value | Your onboarding flow is the first product experience. Friction here kills growth |
| **Engagement** | DAU/MAU, feature adoption, session depth | Features that don't get used don't matter. Build usage tracking into every feature |
| **Retention** | Day-1/7/30 retention, churn rate, resurrection rate | Retention is the master metric. A feature that improves retention by 2% is worth more than a feature 50% of users request |
| **Revenue** | Conversion rate, ARPU, expansion revenue, LTV | Understand how your product monetizes so you can prioritize features that drive revenue, not just engagement |
| **Efficiency** | Support ticket volume, time-to-resolution, self-serve rate | Every support ticket is a product failure. Product engineers build self-serve solutions that eliminate tickets |

## AI-First Practices

AI is the ultimate product engineering multiplier. It collapses the cycle time between "idea" and "working software in front of users" — which is the entire game for product engineers.

### Spec-Driven Development with AI Agents
- Write a one-page product spec (problem, hypothesis, success metric, scope) and feed it to Claude Code to generate the implementation plan
- Use AI to rapidly explore solution architectures: "Given these constraints, what are three approaches to building this feature? Compare trade-offs"
- Generate database migrations, API endpoints, and frontend components from product specs — then review, adjust, and ship

### Rapid Prototyping with Claude Code
- Build working prototypes in hours instead of days: "Create a Next.js page that shows a usage dashboard with these metrics, a date range picker, and export to CSV"
- Generate multiple UI variations for A/B testing — "Create three different onboarding flow designs for this user segment"
- Scaffold entire feature flag integrations: "Add LaunchDarkly feature flags for this new pricing page with three variants"

### User Research Synthesis
- Feed support tickets, NPS responses, or user interview transcripts to AI and extract structured themes: top pain points, feature requests by frequency, sentiment trends
- Generate user personas from behavioral data: "Given these analytics segments, draft user personas with goals, pain points, and feature priorities"
- Summarize competitive analysis: "Compare our onboarding flow to these three competitors and identify gaps"

### A/B Test Analysis
- Use AI to analyze experiment results: interpret statistical significance, check for segment-level effects, identify confounding variables
- Generate executive summaries of experiment outcomes: "This test showed a 3.2% improvement in conversion for new users, statistically significant at p<0.05. Recommend full rollout with monitoring"
- Design follow-up experiments based on learnings: "Given these results, what should we test next?"

### Analytics Instrumentation
- Generate analytics event schemas from product specs: "Based on this feature, what events should we track and what properties should each event include?"
- Create dashboard definitions from business questions: "I need a dashboard that answers: Are users completing onboarding? Where do they drop off? What predicts conversion?"
- Write data validation tests to ensure analytics instrumentation accuracy

### Code Generation for Product Patterns
- Generate CRUD interfaces, admin panels, and internal tools rapidly — the "boring but necessary" product surfaces that AI handles well
- Create email templates, notification systems, and webhook integrations from specs
- Build reporting and export features that product managers and customers constantly request

## How They Collaborate

- **Product Manager**: Partners as an equal, not an order-taker. Challenges scope, proposes alternatives, contributes to roadmap prioritization based on technical feasibility and opportunity sizing. The best PM-PE relationships have constructive tension
- **Designer**: Collaborates on interaction design but can make design decisions independently for straightforward features. Brings implementation constraints early ("this animation will cause jank on mobile") rather than after the design is finalized
- **Data/Analytics Engineer**: Partners on event taxonomy design, analytics infrastructure, and experiment analysis. Product engineers own feature-level instrumentation; data engineers own platform-level infrastructure
- **Other Engineers**: Pulls in specialists (security, performance, infrastructure) when needed but owns the integration. Doesn't throw work over the wall — stays accountable for the whole feature
- **Customer Success / Support**: Mines support tickets for product insights. Joins customer calls to hear pain points firsthand. Closes the loop when a feature ships that addresses reported issues
- **Leadership**: Communicates in business outcomes, not technical milestones. "We shipped the new onboarding flow and activation increased 12%" not "We refactored the auth module and added three new API endpoints"

## Hiring Signals

### Green Flags
- Describes past work in terms of outcomes ("improved activation by 15%") not just outputs ("built the onboarding flow")
- Can explain the business model of their previous company and how their work connected to it
- Has opinions about product trade-offs: "We shipped X instead of Y because the data showed..." — not just technical trade-offs
- Demonstrates comfort with ambiguity: "The spec was vague so I built the simplest version, instrumented it, and iterated based on data"
- Shows evidence of customer empathy: reads support tickets, watches session replays, has talked to actual users
- Can prototype quickly — shows portfolio of shipped features, not just elegant architecture diagrams
- Understands experimentation: can explain statistical significance, sample sizes, and common A/B testing mistakes

### Red Flags
- Describes themselves as "full-stack" but only means "frontend and backend" — no product sense, no metrics awareness, no customer empathy
- Waits for perfect specs before building anything — cannot operate with ambiguity
- Optimizes for technical elegance over shipping speed: "I spent three weeks building the perfect abstraction" for a feature that may not survive its first A/B test
- No evidence of measuring outcomes — ships features and moves on without checking if they worked
- Cannot explain why a feature was built, only how — disconnected from the product rationale
- Dismisses product work as "not real engineering" — views business context as someone else's job
- Only ships greenfield features, avoids the hard work of iterating on and improving existing features

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Implements well-scoped features from detailed specs. Adds analytics instrumentation with guidance. Learns the product domain deeply through building features and reading support tickets. Ships consistently with mentorship on scope and trade-offs |
| **Mid** | Owns features end-to-end from problem to measurement. Proposes scope adjustments based on technical feasibility. Designs and runs simple A/B tests. Instruments analytics independently. Makes sound build/buy decisions for feature components |
| **Senior** | Identifies high-impact product opportunities independently. Challenges product direction with data. Designs experiment strategies for complex features. Mentors others on product thinking. Owns a product area's metrics and can explain trends to leadership |
| **Staff** | Shapes product strategy through technical vision. Identifies company-level opportunities that require engineering insight to see. Establishes experimentation culture and infrastructure. Defines what "product engineering" means for the organization. Operates as a force multiplier — their product intuition makes the whole team more effective |
| **Principal** | Recognized industry voice on product engineering practices. Defines frameworks for product-engineering collaboration adopted across the org. Identifies market-level technical opportunities (new platform capabilities, emerging patterns) that create product advantages. Advisors to CPO/CTO on product-technical strategy |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
