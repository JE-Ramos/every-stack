---
name: developer-advocate
description: "Guide to Developer Advocacy — technical content, DX design, community management, DevRel metrics. Use this skill whenever the user asks about developer relations, developer advocacy, technical evangelism, community building for developers, or DevRel strategy."
disable-model-invocation: true
---

# Developer Advocate

> The engineer who bridges the gap between product and community — turning developer frustration into product insight and product capability into developer adoption.

## What Elite Looks Like

A staff-level developer advocate doesn't just write blog posts and give talks — they operate as a bidirectional signal amplifier between the developer community and the product organization. They have deep enough technical credibility to earn respect from senior engineers, sharp enough product instinct to influence roadmaps, and disciplined enough content operations to sustain community engagement at scale.

What separates elite from competent:
- **Technical depth over breadth**: Can build production-quality demos, not just "hello world" samples — understands the SDK internals well enough to file meaningful bugs and contribute fixes
- **Feedback loop discipline**: Maintains a structured system for capturing community pain points and routing them to product and engineering teams with context, frequency data, and severity ratings
- **Content as infrastructure**: Treats documentation, tutorials, and sample code as product surfaces — versioned, tested, maintained, and measured
- **Community architecture**: Designs community programs (champions, beta testers, ambassadors) that scale beyond individual effort
- **Metrics fluency**: Tracks developer journey funnels (awareness → registration → first API call → integration → production) and can tie DevRel activities to specific funnel improvements
- **Strategic storytelling**: Frames technical capabilities in terms of developer outcomes, not feature lists — "you can ship auth in 10 minutes" beats "we support OAuth 2.0 and SAML"

## Core Responsibilities

- Create and maintain technical content (blog posts, tutorials, videos, conference talks, livestreams) that drives developer adoption
- Build and maintain sample applications, quickstarts, and demo projects that showcase real-world usage patterns
- Represent the developer community's voice in product planning — attend sprint reviews, contribute to PRDs, flag UX friction
- Manage and grow developer community channels (Discord, forums, GitHub Discussions, Stack Overflow)
- Speak at conferences, meetups, and podcasts — both as a brand ambassador and as an independent technical voice
- Review and improve API documentation, SDK ergonomics, and developer onboarding flows
- Design and run developer programs: beta testing cohorts, champion/ambassador programs, hackathons
- Monitor developer sentiment through support tickets, social media, forum posts, and NPS surveys
- Collaborate with product marketing on positioning, messaging, and go-to-market for developer-facing launches
- Contribute to open-source projects the company maintains — reviewing PRs, triaging issues, writing contribution guides

## Key Skills & Tools

### Technical Content Creation

| Medium | Key Skills |
|--------|-----------|
| **Blog posts** | Technical accuracy, narrative structure, SEO for developer searches, code samples that actually run, clear problem-statement framing |
| **Video/Livestream** | Screen recording (OBS, ScreenFlow), live coding confidence, concise explanation under time pressure, post-production editing |
| **Conference talks** | Proposal writing (CFPs), slide design for technical audiences, live demo risk management, Q&A handling, storytelling arc |
| **Sample code** | Production-quality patterns (not just happy path), CI-tested, version-pinned dependencies, clear README, progressive complexity |

### Developer Experience (DX) Design
- First-run experience optimization: time-to-first-API-call as a north star metric
- SDK ergonomics review: naming conventions, error messages, type safety, discoverability
- Authentication and onboarding flow analysis: reducing friction from signup to "it works"
- Error message quality: actionable errors that tell developers what to do, not just what went wrong
- CLI and tooling design feedback: flags, help text, output formatting

### Community Management
- Platform management: Discord/Slack community moderation, GitHub Discussions, forum triage
- Escalation workflows: routing community-reported bugs to engineering with reproduction steps
- Champion programs: identifying, nurturing, and empowering community leaders
- Event organization: hackathons, office hours, AMA sessions, meetup sponsorship
- Content moderation: maintaining healthy community norms and code of conduct enforcement

### Developer Relations Metrics

| Category | Metrics |
|----------|---------|
| **Awareness** | Blog traffic, social reach, conference attendees, podcast downloads |
| **Activation** | Signups from DevRel content, time-to-first-API-call, quickstart completion rate |
| **Engagement** | Forum participation, GitHub stars/forks, community growth rate, NPS |
| **Retention** | Monthly active developers, churn from DevRel-sourced users, support ticket volume trends |
| **Product influence** | Feature requests routed, bugs reported, documentation improvements shipped |

### Tools of the Trade
- **Content**: Markdown/MDX, static site generators (Docusaurus, Astro, Hugo), video editing (DaVinci Resolve, ScreenFlow)
- **Community**: Discord, GitHub Discussions, Orbit/Common Room (community analytics), Discourse
- **Analytics**: Google Analytics, Amplitude, PostHog, social media analytics, developer journey tracking
- **Demos**: CodeSandbox, StackBlitz, Replit, GitHub Codespaces for instant-start environments
- **API testing**: Postman, httpie, curl, Bruno — for building and validating API examples
- **Presentations**: Keynote/Google Slides, reveal.js, Excalidraw for technical diagrams

## AI-First Practices

AI transforms developer advocacy from a bandwidth-constrained craft into a scalable operation. Elite developer advocates use AI not to replace authenticity, but to amplify their reach and reduce toil.

### Content Drafting and Refinement
- Use AI to generate first drafts of blog posts from technical specs, release notes, or changelog entries — then inject voice, opinion, and narrative
- Generate code samples in multiple languages from a single reference implementation: "Here's the Python version, now generate idiomatic Go, TypeScript, and Java equivalents"
- Draft conference talk outlines from a problem statement — AI excels at structuring the narrative arc before you add personality

### Demo and Sample Code Generation
- Use Claude Code or similar agents to scaffold complete sample applications from a spec: "Build a Next.js app that demonstrates our webhook integration with error handling and retry logic"
- Generate test suites for sample code to ensure examples stay working across SDK versions
- Create variations of demos for different frameworks/languages automatically

### Documentation Assistance
- First-draft API reference docs from OpenAPI specs, then humanize with context, examples, and common pitfalls
- Generate migration guides between SDK versions by diffing changelogs and API surfaces
- Use AI to identify gaps in documentation: "Given this API surface, what tutorials are missing?"

### Community Engagement at Scale
- Summarize weekly community activity (top questions, recurring issues, sentiment trends) from Discord/forum exports
- Draft responses to common community questions — maintaining a knowledge base of approved answers that AI can personalize per context
- Analyze support ticket themes to identify documentation gaps or DX friction points

### Sentiment Analysis and Feedback Routing
- Process community feedback (forum posts, Twitter mentions, GitHub issues) to extract structured product insights: severity, frequency, affected user segments
- Generate weekly "voice of the developer" reports for product teams with AI-synthesized themes
- Monitor competitor developer experience discussions to identify positioning opportunities

## How They Collaborate

- **Product Manager**: Translates community feedback into product requirements, attends roadmap planning, flags developer-facing UX issues before they ship
- **Engineering**: Reviews API design for developer ergonomics, contributes to SDK development, files bugs with reproduction steps from community reports
- **Technical Writer**: Coordinates on documentation strategy — DevRel focuses on tutorials and guides, tech writing on reference docs and architecture explanations
- **Developer Marketing**: Aligns on messaging, co-creates launch content, contributes technical depth to marketing materials
- **Sales Engineering**: Shares demo assets, provides technical content for enterprise prospects, collaborates on competitive positioning
- **Support Engineering**: Routes complex community issues, identifies patterns in support tickets that indicate DX problems, contributes to knowledge base
- **Design**: Provides developer perspective on console/dashboard UX, advocates for API-first design patterns

## Hiring Signals

### Green Flags
- Has a public portfolio of technical content (blog, talks, open-source) with genuine community engagement — not just vanity metrics
- Can live-code confidently and recover gracefully from demo failures
- Articulates the difference between developer marketing and developer relations — and why the distinction matters
- Shows evidence of product influence: "I identified this DX issue through community feedback, and here's the change that shipped"
- Demonstrates empathy for developers at different skill levels — can explain the same concept to a beginner and a senior engineer
- Has experience maintaining sample code over time (not just writing it once and abandoning it)
- Can explain their content strategy beyond "I write about what's interesting" — ties content to developer journey stages

### Red Flags
- All talk, no code — can present but can't build anything production-quality
- Measures success only by follower count or conference appearances, not developer outcomes
- No evidence of routing community feedback to product teams — advocacy is one-directional
- Can't articulate what makes a good developer experience vs. a bad one
- Treats documentation as someone else's problem
- Only engages with the "cool" parts of DevRel (talks, swag) and avoids community support and issue triage
- No system for measuring impact — "vibes-based" DevRel

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Writes blog posts and tutorials, answers community questions, assists with conference logistics, maintains sample repos. Learns the product deeply through building with it |
| **Mid** | Delivers conference talks independently, designs developer onboarding improvements, runs community programs (office hours, hackathons), contributes DX feedback that influences product decisions |
| **Senior** | Owns content strategy for a product area, mentors junior advocates, builds relationships with key community members and ecosystem partners, measures and reports DevRel impact against business goals |
| **Staff** | Defines DevRel strategy across products, architects community programs that scale beyond individual effort, influences product roadmap through structured developer insights, establishes DevRel metrics frameworks |
| **Principal** | Sets the industry standard for developer experience in their domain, builds developer ecosystems that create network effects, advises executive leadership on developer-facing strategy, publishes frameworks and playbooks adopted by other DevRel teams |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
