---
name: ui-designer
description: "Guide to UI Design — visual hierarchy, typography, color theory, design tokens, Figma, motion design. Use this skill whenever the user asks about UI design, visual design, design systems, Figma workflows, or component library design."
disable-model-invocation: true
---

# UI Designer

> The designer who turns interaction design into pixel-perfect, systematized visual craft — building design systems that scale, implementing brand with precision, and ensuring every interface element communicates hierarchy, state, and intent through visual language.

## What Elite Looks Like

A staff-level UI designer doesn't just make things look good. They build visual systems that work at scale — design tokens that bridge design and code, component libraries that handle every state and variant, and visual languages so consistent that new screens feel inevitable rather than invented. They understand that visual design is functional, not decorative. Every color, spacing value, shadow, and animation serves a communicative purpose.

What separates elite from competent:
- **Systems over screens**: Designs components and tokens, not just pages. Thinks about how a button works across 50 contexts, not just the one they're designing today
- **Visual hierarchy mastery**: Can guide the user's eye through any interface using size, weight, color, contrast, and whitespace — without relying on heavy decoration
- **Typography expertise**: Understands type scales, line height ratios, measure (line length), and how typography creates rhythm and hierarchy. Can set a type system that works from mobile to desktop
- **Token-based thinking**: Designs with semantic tokens (color-bg-primary, spacing-md) rather than raw values — enabling theming, dark mode, and multi-brand support from a single source of truth
- **Motion with purpose**: Uses animation and transitions to communicate state changes, spatial relationships, and feedback — never for decoration alone
- **Engineering partnership**: Speaks CSS/design-token fluently enough to have productive conversations with frontend engineers about implementation. Understands flexbox/grid mental models and responsive breakpoint behavior
- **Brand translation**: Can take brand guidelines and systematically implement them into a product design system without losing brand personality or usability

## Core Responsibilities

- Design and maintain the visual design system — components, tokens, patterns, and documentation
- Define and implement typography systems — type scales, font pairings, responsive sizing, line height
- Establish color systems — semantic palette, accessibility-compliant contrast ratios, dark mode support, theming
- Create icon systems — consistent style, grid-based sizing, semantic meaning, SVG optimization
- Design component libraries with all variants, states, and responsive behaviors documented
- Build and maintain Figma libraries with auto-layout, variables, and component properties
- Define spacing and layout systems — grid systems, spacing scales, responsive breakpoints
- Create motion design specifications — easing curves, duration scales, transition patterns
- Ensure WCAG 2.2 AA compliance in all visual design decisions (contrast, target sizes, focus indicators)
- Collaborate with engineers on design token implementation and component fidelity
- Translate brand identity into product-level visual language
- Art direct illustrations, photography, and data visualization within the product

## Key Skills & Tools

### Visual Design Fundamentals

| Principle | Application |
|-----------|-------------|
| **Visual hierarchy** | Size, weight, color, contrast, position, and whitespace to direct attention and communicate importance |
| **Typography** | Type scales (modular/augmented fourth), line height (1.4-1.6 for body), measure (45-75 characters), tracking, font pairing (contrast + complement) |
| **Color theory** | 60-30-10 rule, semantic color mapping, accessible contrast ratios (4.5:1 text, 3:1 large text/UI), color blindness considerations (never use color alone for meaning) |
| **Layout & spacing** | 8pt grid system, spacing scales (4-8-12-16-24-32-48-64), responsive grid (columns, gutters, margins), content density management |
| **Gestalt principles** | Proximity, similarity, continuity, closure, figure-ground — the perceptual principles that make layouts feel organized or chaotic |

### Design Systems

- **Design tokens**: Primitive tokens (blue-500), semantic tokens (color-primary), component tokens (button-bg). JSON/YAML token formats that sync to code via Style Dictionary or Tokens Studio
- **Component architecture**: Atomic design hierarchy (atoms, molecules, organisms, templates, pages). Building components that compose predictably
- **Variant management**: Designing components with all meaningful variants — size, state (default, hover, active, focus, disabled, loading, error), density, and theme
- **Documentation**: Usage guidelines, do/don't examples, implementation notes, accessibility requirements per component
- **Governance**: Contribution process, version control, deprecation strategy, breaking change communication

### Figma Advanced

- **Auto-layout**: Padding, gap, alignment, min/max sizing, fill/hug/fixed behavior — building components that resize intelligently
- **Variables**: Color, number, string, and boolean variables for theming, responsive design, and component properties
- **Component properties**: Boolean, instance swap, text, and variant properties that create flexible, documented components
- **Dev mode**: Inspection tools, ready-for-dev marking, code snippets, design token mapping
- **Branching**: Figma branching for design system updates — review, merge, and version control workflows

### Responsive Design

- **Breakpoint strategy**: Content-first breakpoints rather than device-specific ones. Common system: 320/640/768/1024/1280/1536
- **Responsive patterns**: Stack, reveal, reflow, expand/collapse, off-canvas — choosing the right pattern for each component
- **Fluid typography**: clamp() and viewport-based scaling for smooth type size transitions
- **Container queries**: Designing components that respond to their container, not the viewport

### Motion Design

- **Functional animation**: State transitions, loading feedback, micro-interactions (toggle, button press, form validation)
- **Easing curves**: ease-out for entrances, ease-in for exits, ease-in-out for state changes. Never linear for UI animation
- **Duration scales**: 100ms for micro-interactions, 200-300ms for state transitions, 300-500ms for entrances/exits
- **Reduced motion**: Always providing reduced-motion alternatives (prefers-reduced-motion media query)
- **Tools**: Figma Smart Animate, Lottie for complex animation, CSS transitions/animations for implementation

### Brand Implementation

- Translating brand guidelines (typography, color, imagery, tone) into systematic product-level design language
- Balancing brand expression with usability — brand personality without sacrificing clarity or accessibility
- Multi-brand systems — designing token architectures that support white-labeling or brand variants from a single component library

## AI-First Practices

AI accelerates visual design exploration and systematic design work:

- **Design token generation**: Describe your brand's color palette and design principles to AI to generate complete token sets — primitives, semantics, and component-level tokens with dark mode mappings and accessibility-checked contrast ratios
- **Component variant exploration**: Describe a component's use cases to AI to enumerate all necessary variants, states, and edge cases you should design for. AI catches states designers often miss (loading, error, empty, overflow, truncation)
- **Accessibility contrast checking**: Feed your color palette and component designs to AI for systematic contrast ratio verification across all color combinations. AI can identify failing combinations faster than manual checking
- **Responsive layout suggestions**: Describe your desktop layout to AI to generate responsive adaptation strategies for tablet and mobile — what stacks, what collapses, what gets deprioritized
- **Icon system consistency**: Use AI to audit icon sets for visual consistency — stroke weight, corner radius, padding, grid alignment
- **Typography scale generation**: Provide your base font size and design goals to AI to generate type scales with recommended line heights, tracking adjustments, and responsive sizing values
- **Design system documentation**: Use AI to draft component usage guidelines, do/don't examples, and accessibility specifications from your design files and token definitions

### AI Anti-Patterns in UI Design
- Using AI-generated visual designs as final output — AI produces generic, derivative visuals that lack brand personality
- Accepting AI color palettes without testing in real interface contexts and checking accessibility
- Trusting AI layout suggestions without validating against real content and edge-case text lengths
- Replacing design system governance with AI generation — systems need human curation and judgment

## How They Collaborate

- **UX Designers**: Receive interaction specifications and wireframes, apply visual design language, collaborate on component behavior definitions
- **Frontend Engineers**: Co-define design tokens, review component implementation fidelity, pair on responsive behavior and animation. The most critical collaboration — invest heavily here
- **Brand Designers**: Translate brand identity into product-level visual systems, maintain brand consistency across touchpoints
- **UX Researchers**: Incorporate visual design elements into usability tests, understand how visual changes affect user behavior
- **Content Designers**: Ensure typography system supports content needs — line length, hierarchy, multilingual support
- **Product Managers**: Visual design tradeoffs in scope discussions, component reuse vs. custom design decisions
- **Accessibility Specialists**: Validate color contrast, focus indicators, target sizes, and motion safety

## Hiring Signals

### Green Flags
- Portfolio shows systematic thinking — design tokens, component libraries, not just one-off screens
- Can explain visual hierarchy decisions with reasoning, not just "it looks better this way"
- Demonstrates typographic knowledge — can discuss type scales, line height ratios, and font pairing principles
- Has built and maintained a design system in Figma with auto-layout, variables, and component properties
- Understands responsive design beyond "make it smaller" — shows adaptive layout thinking
- Can discuss accessibility requirements for visual design — contrast ratios, focus indicators, motion sensitivity
- Shows dark mode implementation with proper token architecture, not just inverted colors
- Demonstrates awareness of implementation — knows what's easy vs. hard for engineers

### Red Flags
- Portfolio is all marketing/brand design with no product/UI systems work
- Cannot explain their spacing system — uses arbitrary values rather than a scale
- "I don't worry about responsive, the developer handles that"
- No accessibility awareness — uses light gray on white, tiny touch targets, color-only differentiation
- Uses Figma like Photoshop — no auto-layout, no components, no variables
- Cannot explain the difference between a component variant and a separate component
- "I design the desktop version and then we'll figure out mobile"
- Motion design without purpose — things animate because they can, not because they communicate

## Growth Path

| Level | Markers |
|-------|---------|
| **Junior** | Creates UI designs following established design system patterns. Implements brand guidelines in screen designs. Uses Figma with components and auto-layout. Understands basic accessibility requirements (contrast, sizing). Follows spacing and typography scales |
| **Mid** | Designs new components with variants and states. Contributes to the design system library. Handles responsive design across breakpoints. Creates motion specifications for interactions. Works directly with engineers on implementation fidelity. Understands design token architecture |
| **Senior** | Owns and evolves the design system for a product area. Defines typography, color, and spacing systems. Creates comprehensive component documentation. Mentors junior designers on visual craft and systematic thinking. Leads visual design direction for major features. Implements theming and dark mode architecture |
| **Staff** | Architects organization-wide design systems used across multiple products. Defines visual design standards and governance processes. Establishes design-to-code workflows (tokens, handoff, component parity). Drives multi-brand and theming capabilities. Makes tooling decisions (Figma configuration, token pipelines, documentation platforms). Connects visual design quality to product metrics and brand perception |
| **Principal** | Sets visual design vision across the organization. Defines how the company's visual identity evolves with the product. Architects design system infrastructure that scales across teams, products, and platforms. Drives industry contributions to design systems methodology. Evaluates and adopts new design technologies (design-to-code, AI-assisted design, real-time collaboration). Mentors design leaders on visual craft excellence |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).
