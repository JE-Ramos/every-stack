---
name: product-skill
description: "Guide to Product Sense for founders — PMF assessment, customer development, MVP strategy, product metrics. Use this skill whenever a founder asks about product-market fit, customer development, MVP approaches, or product metrics like retention and activation."
disable-model-invocation: true
---

# Product
> The founder who sees what customers need before they can articulate it — obsessively closing the gap between the problem as it exists and the solution as it should be, turning user insight into compounding product value.

## What Elite Looks Like

An elite founder-level product operator is the company's primary interface with reality. They hold the tension between what customers say they want, what they actually need, what's technically feasible, and what's commercially viable. In Garry Tan's 6 Skills framework, product sense is foundational because startups win or die based on product-market fit — and PMF isn't a moment, it's a continuous process of deepening your understanding of the customer.

What separates elite from competent:
- **Customer truth-seeking**: Goes far beyond surveys and analytics. Sits with customers, watches them struggle, reads their support tickets, joins their Slack communities. Can describe the customer's daily reality in vivid detail
- **Problem-first thinking**: Falls in love with the problem, not the solution. Resists the temptation to build before deeply understanding what needs to change and why
- **Taste and conviction**: Has an informed opinion about what the product should be — and the courage to say "no" to features that dilute focus, even when customers ask for them
- **Rapid experimentation**: Treats every feature as a hypothesis. Designs experiments to learn, ships MVPs to validate, and kills things that don't work without sentimental attachment
- **Systems-level product thinking**: Sees the product not as a collection of features but as a system that creates a compounding loop: user adopts → user gets value → user tells others → more users adopt
- **Metric intuition**: Knows which metric matters most right now and what moving it means for the business. Doesn't drown in dashboards but has the few numbers that tell the story

## Core Responsibilities

- Define and communicate the product vision: where the product is headed and why
- Continuously assess product-market fit: are we building what the market actually needs?
- Conduct customer development: interviews, observation, support ticket analysis, usage data
- Define and prioritize the product roadmap based on customer value, business impact, and feasibility
- Write clear product specifications: problem statements, user stories, acceptance criteria, success metrics
- Design feedback loops: how customer behavior informs product decisions (telemetry, NPS, interviews, support data)
- Define and track product metrics: engagement, retention, conversion, time-to-value, feature adoption
- Make hard trade-offs: scope, quality, timeline — and communicate the reasoning clearly
- Coordinate cross-functionally: align engineering, design, marketing, and sales around product priorities
- Say "no" to the majority of feature requests — the most important product skill

## Key Skills & Tools

### Product-Market Fit Assessment
- Sean Ellis PMF survey: "How would you feel if you could no longer use this product?" (40%+ "very disappointed" = PMF)
- Cohort retention curves: do users stick around? Flattening retention curve = PMF signal
- Organic growth rate: are users telling other users? Word-of-mouth is the strongest PMF signal
- Revenue quality: are customers paying willingly, expanding, and renewing — or churning after discounts expire?
- Engagement depth: are users building workflows around your product, or is it a "nice to have"?

### Customer Development
| Method | When to Use | Key Principle |
|--------|-------------|---------------|
| **Customer interviews** | Always — especially early. 5 interviews per week is a good cadence | Ask about their life and problems, not your solution (The Mom Test) |
| **Usage analytics** | Post-launch. Understand what users actually do vs. what they say | Instrument key flows; look for drop-offs, power features, and dormant features |
| **Support ticket analysis** | Ongoing. Support is the most honest feedback channel | Categorize and quantify: what are the top 10 complaints? |
| **Session recording** | Post-launch. See exactly where users get confused | Watch 10 sessions per week. The patterns will be obvious |
| **Dogfooding** | Always. Use your own product daily | If you can't stand using it, neither can your customers |

### MVP & Prototyping
- MVP definition: the smallest thing that tests the riskiest assumption (not the smallest version of the final product)
- Wizard of Oz prototypes: fake the backend, validate the demand
- Concierge MVP: do it manually for the first customers to learn the workflow before automating
- Landing page tests: validate demand before writing code
- Rapid prototyping tools: Figma prototypes, no-code tools (Bubble, Retool), AI-generated prototypes

### Product Metrics
| Metric | What It Measures | Why It Matters |
|--------|-----------------|----------------|
| **Activation rate** | % of signups who reach the "aha" moment | Most leveraged metric for growth — fix this first |
| **Retention (D1/D7/D30)** | % of users who return at day 1, 7, 30 | The foundation of everything. No retention = no business |
| **Time to value** | How long until user gets first meaningful value | Shorter = better activation, lower churn |
| **Feature adoption** | % of users who use a specific feature | Tells you if what you built matters |
| **NPS / CSAT** | Customer satisfaction and advocacy | Leading indicator of retention and word-of-mouth |
| **Net revenue retention** | Revenue from existing cohorts over time | >100% means customers are expanding — the holy grail |

### Roadmap Prioritization
- RICE scoring: Reach, Impact, Confidence, Effort — a quantitative framework for prioritization
- Opportunity scoring (Ulwick): importance vs. satisfaction gap — find underserved needs
- Kano model: must-haves, performance features, and delighters — don't build delighters before must-haves
- ICE scoring: Impact, Confidence, Ease — simpler version of RICE for faster decisions
- "Jobs to Be Done" framework: what job is the customer hiring your product to do?

### Core Tools
- **Product management**: Linear, Jira, Notion, Productboard, Shortcut
- **Analytics**: Mixpanel, Amplitude, PostHog, Heap, Google Analytics
- **User research**: Dovetail, UserTesting, Hotjar, FullStory, Maze
- **Prototyping**: Figma, Framer, Bubble, v0.dev
- **Feature flags**: LaunchDarkly, PostHog, Statsig, Flagsmith
- **Communication**: Loom, Notion, Slack, Linear

## AI-First Practices

AI is a product person's force multiplier — accelerating research, synthesis, and prototyping while freeing up time for the irreplaceable human work of customer empathy and strategic judgment.

### Customer Interview Analysis
- Transcribe and analyze customer interviews with AI: extract themes, pain points, feature requests, and emotional language patterns
- Build a searchable corpus of customer insights: ask AI "what do our customers say about onboarding?" and get synthesized answers across dozens of interviews
- Automated affinity mapping: AI clusters related feedback into themes, saving hours of manual post-it-note work
- Sentiment tracking across interview transcripts: identify which problems generate the most emotional response

### Prototype & Spec Generation
- Use AI to generate initial product specs from customer problem descriptions: user stories, acceptance criteria, edge cases
- Rapid UI prototyping: describe the user flow in natural language and generate Figma-ready wireframes or functional prototypes (v0.dev, Claude artifacts)
- Generate multiple solution concepts for the same problem — AI as a brainstorming partner that doesn't get tired
- Edge case generation: "Given this user flow, what are all the ways it could go wrong?"

### Competitive Feature Analysis
- AI-powered competitive intelligence: analyze competitor product pages, changelogs, G2 reviews, and documentation to map their feature set
- Feature gap analysis: identify where competitors are strong, where they're weak, and where opportunities exist
- Pricing and packaging comparison: synthesize how competitors structure their plans and what users say about value

### User Feedback Synthesis
- Process app store reviews, support tickets, and NPS responses at scale: AI categorizes, quantifies, and surfaces the most impactful feedback
- Weekly AI-generated product insight reports from all feedback channels
- Feature request scoring: AI enriches requests with account data (revenue, usage, segment) to help prioritize
- Churn analysis: AI identifies patterns in churned user behavior to find preventable churn signals

## How They Collaborate

- **Engineering**: The closest partnership. Product defines what to build and why; engineering defines how. Healthy tension between ambition and feasibility. Must build mutual trust and shared context
- **Sales & Marketing**: Product provides the features and positioning that sales needs to win. Sales provides the market reality that product needs to prioritize. Feedback loop must be tight, not adversarial
- **Brand**: Product experience IS brand experience. The in-product copy, onboarding flow, and error messages are brand touchpoints. Product and brand must be aligned
- **Finance**: Product decisions have financial consequences. Feature prioritization should consider revenue impact, development cost, and unit economics
- **Leadership**: Product vision comes from the founder. As the company scales, the founder delegates product execution but retains product judgment and final say on strategic direction

## Hiring Signals

### Green Flags
- Can walk through a product decision with full context: what they knew, what they didn't, what they chose, what happened, what they learned
- Demonstrates genuine customer empathy: can describe a customer's daily life, not just their feature requests
- Shows the ability to say "no" with clear reasoning — not just "yes" to everything stakeholders ask
- Has shipped something and can discuss the trade-offs: what they cut, what they kept, and why
- Uses data AND intuition: doesn't hide behind metrics to avoid hard calls, doesn't ignore metrics for gut feelings
- Can articulate what makes a product "good" beyond features — flow, simplicity, delight, coherence
- Has opinions about products they use and can analyze why specific product choices work or don't

### Red Flags
- "I'm the voice of the customer" but can't describe their last customer interview in detail
- Defines product work as "writing tickets" rather than understanding problems and designing solutions
- No framework for prioritization: everything is "high priority"
- Can't explain why a feature they shipped didn't work and what they learned from it
- Over-indexes on competitor features: "They have it, so we need it"
- Treats product metrics as vanity metrics: tracks everything, acts on nothing
- "The customer asked for this" as the sole justification for building something
- No experience with saying no, killing features, or sunsetting products

## Growth Path

| Level | Markers |
|-------|---------|
| **Founder (Pre-PMF)** | Is the product person. Talks to customers daily. Ships the MVP personally. Iterates based on direct feedback. Lives in the gap between what exists and what should exist |
| **Founder (Post-PMF)** | Codifies the product development process. Hires first product or design person. Establishes metrics and feedback loops. Defines the product roadmap beyond "whatever the founder thinks of next" |
| **Head of Product** | Owns the full product lifecycle: discovery, definition, delivery, measurement. Manages a small product team. Establishes product development cadence and rituals |
| **VP Product** | Scales product organization across multiple product lines or surfaces. Hires and develops product managers. Owns product strategy aligned with company strategy. Manages complex stakeholder dynamics |
| **CPO** | Product vision at the executive level. Influences company strategy through product lens. Manages large product and design organizations. Represents product to the board and market |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
