---
name: technical-writer
description: "Guide to Technical Writing — Diataxis framework, API docs, docs-as-code, style guides. Use this skill whenever the user asks about technical writing, documentation strategy, API documentation, docs-as-code workflows, or documentation frameworks."
disable-model-invocation: true
---

# Technical Writer

> The architect of understanding — transforming complex systems into navigable knowledge that lets developers self-serve, reduces support load, and makes the product teachable at scale.

## What Elite Looks Like

A staff-level technical writer doesn't just write clear prose — they design information systems. They understand that documentation is a product with its own user research, architecture, testing, and maintenance lifecycle. They apply frameworks like Diataxis to ensure every page has a clear purpose, they treat docs-as-code with the same rigor as production software, and they measure documentation effectiveness through completion rates, search analytics, and support ticket deflection.

What separates elite from competent:
- **Information architecture mastery**: Designs documentation structures that scale from 10 pages to 10,000 — with clear navigation, progressive disclosure, and discoverable cross-references
- **Diataxis discipline**: Can instantly classify any documentation need as tutorial, how-to guide, reference, or explanation — and knows why mixing these modes creates confusion
- **Docs-as-code fluency**: Works in Markdown/MDX, uses Git workflows, writes in IDEs, builds with CI/CD, and reviews docs PRs with the same rigor as code PRs
- **User research integration**: Regularly analyzes search queries, page analytics, support tickets, and user interviews to identify documentation gaps and prioritize improvements
- **API documentation depth**: Generates accurate, complete, and developer-friendly API references from OpenAPI specs — with examples, error catalogs, and authentication guides that go far beyond auto-generated boilerplate
- **Maintenance mindset**: Treats documentation freshness as a first-class concern — builds systems to detect stale content, tracks doc-to-code drift, and budgets time for maintenance alongside new content

## Core Responsibilities

- Design and maintain documentation information architecture across all product surfaces
- Write and maintain tutorials, how-to guides, reference documentation, and conceptual explanations following the Diataxis framework
- Create and enforce documentation style guides and content standards
- Build and maintain docs-as-code infrastructure: site generators, CI/CD pipelines, preview environments, linting
- Generate and maintain API reference documentation from OpenAPI/Swagger specifications
- Conduct documentation user research: analyze search analytics, run usability tests, review support ticket patterns
- Collaborate with engineering to document new features, API changes, and breaking changes before release
- Review documentation contributions from engineers and other team members
- Plan and execute documentation migrations, restructures, and platform changes
- Establish and track documentation quality metrics: page completion rates, time-on-page, search success rates, support ticket deflection

## Key Skills & Tools

### Documentation Architecture (Diataxis Framework)

| Type | Purpose | Structure | User Need |
|------|---------|-----------|-----------|
| **Tutorial** | Learning-oriented | Step-by-step, guided experience | "Teach me" — newcomer following along |
| **How-to Guide** | Task-oriented | Steps to achieve a specific goal | "Help me do X" — practitioner with a problem |
| **Reference** | Information-oriented | Precise, complete, consistent | "What is X?" — developer looking up specifics |
| **Explanation** | Understanding-oriented | Discursive, contextual, conceptual | "Why is X?" — developer building mental models |

The power of Diataxis is in the constraints: a tutorial should never become a reference dump, a how-to guide should never digress into explanation. Mixing modes is the #1 source of documentation that "technically has everything but helps no one."

### API Documentation

| Component | Key Skills |
|-----------|-----------|
| **OpenAPI/Swagger** | Writing and maintaining specs, ensuring accuracy against implementation, generating interactive docs |
| **Code samples** | Idiomatic examples in multiple languages, error handling shown (not just happy path), copy-paste ready |
| **Authentication guides** | Step-by-step auth setup, token management, scope explanations, common error resolution |
| **Error catalogs** | Every error code documented with cause, resolution, and example. Developers should never see an error they can't diagnose |
| **Changelog/Migration** | Breaking change documentation, version comparison tables, automated migration guides |

### Docs-as-Code Workflow
- **Authoring**: Markdown/MDX, reStructuredText, AsciiDoc — with frontmatter schemas for metadata
- **Version control**: Git-based workflows, branch-per-feature, PR reviews for docs changes
- **Site generators**: Docusaurus, MkDocs (Material theme), Starlight (Astro), Sphinx, Hugo
- **CI/CD**: Automated builds, link checking (lychee, linkinator), spell checking, style linting (Vale)
- **Preview environments**: Deploy previews for every docs PR (Vercel, Netlify, Cloudflare Pages)
- **Search**: Algolia DocSearch, Pagefind, Typesense — search analytics as a documentation feedback loop

### Style Guide Enforcement
- **Vale**: Programmable prose linting — enforce house style, flag jargon, catch passive voice, ensure consistent terminology
- **Custom vocabularies**: Product-specific term lists, approved/deprecated terminology, competitor name handling
- **Templates**: Standardized page templates for each Diataxis type, ensuring structural consistency across contributors
- **Review checklists**: Pre-merge checklists covering accuracy, completeness, style compliance, accessibility, and link validity

### Information Architecture
- **Navigation design**: Sidebar hierarchies, breadcrumbs, cross-references, "next steps" linking patterns
- **Progressive disclosure**: Layered information from quickstart → guide → reference → deep dive
- **Search optimization**: Strategic heading structure, metadata, and terminology for discoverability
- **Content auditing**: Regular reviews to identify stale, redundant, or orphaned pages
- **Internationalization (i18n)**: Translation workflows, locale management, content structure that supports multilingual delivery

## AI-First Practices

AI fundamentally changes the economics of technical writing. Tasks that once took days (first drafts, consistency reviews, multi-language examples) now take minutes — freeing writers to focus on information architecture, user research, and the judgment calls that AI cannot make.

### First-Draft Generation
- Use AI to generate initial drafts from engineering specs, PRDs, or code comments — then reshape for audience, voice, and accuracy
- Feed a new API endpoint's code + tests to AI and get a draft reference page with parameters, responses, error codes, and examples
- Generate tutorial outlines from a "what the user should be able to do by the end" prompt — AI structures the learning path, you add the pedagogical nuance

### Consistency and Quality Checking
- Run existing documentation through AI to check for terminology inconsistencies, tone shifts, and style guide violations that Vale rules might miss
- Use AI to compare documentation against current code: "Does this guide still match the actual API behavior?" — catching doc drift before users do
- Analyze entire documentation sets for Diataxis compliance: "Flag pages that mix tutorial and reference content"

### API Reference Generation
- Generate complete API reference documentation from OpenAPI specs, then augment with human-written context, common patterns, and gotchas
- Create code samples in multiple languages from a single canonical example — AI handles idiomatic translation, you verify correctness
- Auto-generate changelog entries from Git diffs between API versions, then humanize with impact descriptions and migration advice

### Readability and Accessibility Analysis
- Score documentation for reading level, sentence complexity, and jargon density — target the right level for your audience
- Identify paragraphs that assume prior knowledge not established earlier in the doc
- Generate alt-text for technical diagrams and screenshots
- Suggest simplified alternatives for unnecessarily complex explanations

### Terminology Standardization
- Build and maintain terminology databases using AI to scan all docs for variant spellings, inconsistent capitalization, and competing names for the same concept
- Generate glossary entries from contextual usage across the documentation
- Flag new terms introduced without definition

### Translation and Localization Support
- Generate initial translations for documentation pages, then route to native-speaker reviewers
- Identify content that is culturally specific and may need adaptation rather than direct translation
- Maintain translation memory by using AI to identify reusable translated segments across documents

## How They Collaborate

- **Engineering**: Embeds in sprint ceremonies to catch features before they ship undocumented. Reviews API designs for documentability. Pairs on code-level documentation (inline comments, README files)
- **Developer Advocate**: Coordinates content strategy — tech writers own reference and explanation, advocates own tutorials and community content. Shared ownership of how-to guides
- **Product Manager**: Participates in feature planning to scope documentation work. Uses docs user research to influence product UX decisions (if it's hard to document, it's hard to use)
- **Design**: Collaborates on documentation site UX, screenshot standards, diagram styles, and interactive component design
- **Support Engineering**: Analyzes support tickets to identify documentation gaps. Co-creates knowledge base articles. Routes "this should be in the docs" feedback
- **QA Engineer**: Tests documentation accuracy — follows tutorials step-by-step, validates code samples, checks that documented behavior matches actual behavior
- **Localization team**: Establishes translation-friendly writing practices, manages translation workflows, reviews machine-translated content

## Hiring Signals

### Green Flags
- Shows a portfolio with clear Diataxis awareness — can articulate why a specific page is a tutorial vs. a how-to vs. reference
- Demonstrates docs-as-code experience: has shipped docs through Git-based workflows with CI/CD
- Can read code well enough to document APIs accurately — doesn't need hand-holding for every technical detail
- Has opinions on information architecture backed by user research or analytics data
- Shows evidence of docs maintenance, not just creation — has sunset stale content, restructured navigation, improved search
- Understands that great documentation is invisible: users find what they need and leave without filing a support ticket
- Can write for different audiences (beginner tutorial vs. senior engineer reference) and explain why the approach differs

### Red Flags
- Treats documentation as a writing exercise, not an information design problem — beautiful prose with no navigational logic
- Cannot work in Markdown/Git — expects a CMS for everything
- No evidence of measuring documentation effectiveness — writes and publishes with no feedback loop
- Only writes new content, never maintains or improves existing content
- Cannot read code at all — entirely dependent on engineers to explain what to document
- No awareness of documentation frameworks (Diataxis, Good Docs Project) — reinvents structure for every project
- Treats all documentation as the same type — produces hybrid pages that are half tutorial, half reference, and fully confusing

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Writes individual pages following established templates and style guides. Learns the product through documentation. Handles basic API reference generation and screenshot updates. Reviews content for typos and formatting |
| **Mid** | Owns documentation for a product area end-to-end. Applies Diataxis framework independently. Sets up and maintains docs-as-code tooling (linting, preview deploys). Conducts basic docs user research through search analytics and support ticket analysis |
| **Senior** | Designs information architecture for new product areas. Mentors engineers on documentation contributions. Establishes style guides and content standards. Drives documentation quality metrics and reports on effectiveness. Manages documentation platform infrastructure |
| **Staff** | Defines documentation strategy across the organization. Architects docs platforms that scale across multiple products. Establishes documentation culture — makes it normal for engineers to contribute and maintain docs. Influences product design through documentation-driven feedback |
| **Principal** | Sets industry-recognized documentation standards. Publishes documentation frameworks adopted by other organizations. Advises leadership on knowledge management strategy. Builds documentation systems that become competitive advantages |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
