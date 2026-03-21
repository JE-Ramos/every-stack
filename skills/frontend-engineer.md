# Frontend Engineer
> The engineer who owns every pixel the user sees and every millisecond they wait.

## What Elite Looks Like

An elite frontend engineer does not simply "make things look right." They build interfaces that are fast, accessible, resilient, and maintainable at scale. They understand the browser as a runtime environment with the same depth a backend engineer understands a server. They can trace a janky animation to a forced layout recalculation, diagnose a hydration mismatch from a server log, and refactor a 200-component design system without breaking a single consumer.

Elite frontend engineers treat the network as hostile, the device as constrained, and the user as diverse in ability. They ship features that work on a five-year-old Android phone over a 3G connection just as well as on the latest MacBook Pro. They champion progressive enhancement, not because it is fashionable, but because it is the only architecture that respects reality.

They also serve as the bridge between design and engineering. They push back on designs that harm performance or accessibility, propose alternatives that preserve intent, and build component APIs that make the right thing easy and the wrong thing hard.

## Core Responsibilities

- **Component architecture** — Design, build, and maintain component libraries and design systems that scale across teams and products. Define clear prop APIs, composition patterns, and extension points.
- **Performance engineering** — Own Core Web Vitals (LCP, INP, CLS). Profile rendering pipelines, eliminate unnecessary re-renders, implement code splitting, optimize critical rendering paths, and establish performance budgets.
- **Accessibility** — Ensure WCAG 2.2 AA compliance as a baseline. Build with semantic HTML, manage focus, support screen readers, handle reduced motion preferences, and test with assistive technologies.
- **State management** — Choose the right state solution for the problem: server state (TanStack Query, SWR), client state (Zustand, Jotai, signals), URL state, or form state. Avoid over-engineering global stores.
- **Testing** — Write meaningful tests at every layer: unit tests for utilities, component tests for behavior, integration tests for flows, and E2E tests for critical paths. Prioritize testing user behavior over implementation details.
- **Build tooling** — Configure and optimize bundlers (Vite, Turbopack, webpack), manage tree-shaking, handle module federation, and keep build times fast.
- **Cross-browser and device compatibility** — Handle vendor inconsistencies, progressive enhancement, responsive design, and touch/pointer event differences.
- **Developer experience** — Create tooling, documentation, and patterns that make other engineers productive. Storybook stories, ESLint rules, TypeScript utilities, and migration codemods all fall here.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Frameworks | React, Vue 3, Svelte/SvelteKit, Next.js, Nuxt, Astro, Remix |
| Language | TypeScript (strict mode, generics, discriminated unions, template literals) |
| Styling | CSS architecture (BEM, CSS Modules, Tailwind CSS), CSS Grid, Flexbox, container queries, CSS layers, view transitions |
| State | TanStack Query, Zustand, Jotai, Redux Toolkit, XState, URL-based state |
| Testing | Vitest, Playwright, Testing Library, MSW (Mock Service Worker), Storybook interaction tests |
| Build | Vite, Turbopack, esbuild, SWC, module federation |
| Performance | Lighthouse, WebPageTest, Chrome DevTools Performance panel, bundlesize, `@next/bundle-analyzer` |
| Accessibility | axe-core, Lighthouse accessibility audits, NVDA, VoiceOver, ARIA authoring practices |
| Design Systems | Storybook, Chromatic, Figma tokens, Style Dictionary |
| Monitoring | Sentry, LogRocket, Real User Monitoring (RUM), Web Vitals API |

## AI-First Practices

Frontend engineering is one of the domains most immediately transformed by AI tooling. Elite frontend engineers integrate AI into their daily workflow without surrendering judgment.

- **Component scaffolding with Claude Code** — Use Claude Code to generate component boilerplate, including TypeScript interfaces, default props, accessibility attributes, and Storybook stories. Review and refine the output rather than writing from scratch. Use plan mode to define component APIs before generating implementations.
- **Design-to-code with Gemini and vision models** — Feed Figma screenshots or design specs to multimodal AI to generate initial markup and styles. Treat the output as a first draft that needs accessibility review, responsive behavior, and performance optimization.
- **Accessibility audits via AI** — Use AI to review component code for accessibility issues: missing ARIA labels, incorrect role usage, keyboard trap risks, color contrast problems. Combine with automated tooling (axe-core) for comprehensive coverage.
- **Test generation** — Generate Testing Library tests from component code. AI excels at producing the boilerplate of render/query/assert patterns; the engineer's job is ensuring the tests verify meaningful behavior.
- **CSS refactoring** — Use AI to migrate between styling approaches (e.g., styled-components to Tailwind, or BEM to CSS Modules) across large codebases, then review for correctness.
- **Performance analysis** — Feed Lighthouse reports and performance traces to AI for interpretation and prioritized recommendations.
- **Code review augmentation** — Use AI to pre-review PRs for common frontend issues: missing error boundaries, accessibility regressions, bundle size impacts, inconsistent patterns.

The key principle: AI generates; the engineer validates, refines, and takes responsibility.

## How They Collaborate

- **With designers** — Participate in design reviews early. Push back on patterns that harm performance or accessibility. Propose component APIs that map cleanly to design tokens. Maintain a shared language around spacing, typography, and color systems.
- **With backend engineers** — Co-design API contracts (OpenAPI specs, GraphQL schemas). Define error shapes, pagination patterns, and loading states together. Own the BFF (Backend for Frontend) layer when it exists.
- **With product managers** — Translate feature requirements into technical constraints. Surface tradeoffs: "We can ship this in a week with client-side rendering, or three weeks with SSR that improves SEO and performance."
- **With QA** — Define testing strategies together. Provide Storybook stories and component documentation to accelerate manual testing. Write E2E tests for critical paths; let QA focus on exploratory testing.
- **With platform/DevOps** — Collaborate on CDN configuration, cache headers, deployment pipelines, feature flags, and A/B testing infrastructure.

## Hiring Signals

### Green Flags
- Can explain the browser rendering pipeline (parse, style, layout, paint, composite) and how it affects performance decisions
- Writes semantic HTML first, then enhances with ARIA only when native semantics are insufficient
- Has opinions on state management backed by tradeoff analysis, not framework loyalty
- Can demonstrate debugging a real performance issue with DevTools
- Writes tests that survive refactors because they test behavior, not implementation
- Understands network waterfalls and can explain how code splitting, prefetching, and caching interact
- Shows empathy for users on constrained devices and slow networks

### Red Flags
- Cannot build a layout without a CSS framework
- Treats accessibility as a checkbox rather than a design constraint
- Adds `any` types throughout TypeScript code
- Cannot explain what happens between `fetch()` and pixels on screen
- Over-engineers state management for simple UIs
- Has never used browser DevTools for performance profiling
- Dismisses progressive enhancement as unnecessary

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn the fundamentals | Single components | Write clean components, learn semantic HTML, understand CSS box model, write basic tests |
| **Mid** | Own features end-to-end | Feature areas | Design component APIs, manage state effectively, handle error states, write comprehensive tests, optimize bundle size |
| **Senior** | Drive technical quality | Team-wide | Architect component systems, establish performance budgets, mentor juniors, lead design system contributions, make build/framework decisions |
| **Staff** | Set technical direction | Org-wide | Define frontend architecture strategy, drive cross-team platform decisions, establish standards that scale, own performance culture, evaluate and adopt new technologies |
| **Principal** | Shape industry practice | Company-wide / industry | Influence framework ecosystems, publish research on performance or accessibility, define the company's frontend philosophy, mentor staff engineers |

## RTFM — Essential Reading

### Books
- **Refactoring UI** by Adam Wathan & Steve Schoger — Practical design principles for engineers
- **Inclusive Components** by Heydon Pickering — Patterns for building accessible interfaces
- **High Performance Browser Networking** by Ilya Grigorik — Understand the network layer that underpins everything

### Documentation & Guides
- [React documentation](https://react.dev) — The canonical resource; especially the "Thinking in React" and "Escape Hatches" sections
- [web.dev](https://web.dev) — Google's comprehensive guide to modern web development, performance, and Core Web Vitals
- [MDN Web Docs](https://developer.mozilla.org) — The reference for HTML, CSS, JavaScript, and Web APIs
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) — Accessibility standards and implementation patterns
- [Patterns.dev](https://www.patterns.dev) — Modern rendering and design patterns for web applications

### Articles & Blogs
- Josh W. Comeau's [CSS for JavaScript Developers](https://css-for-js.dev) — Deep understanding of CSS from first principles
- Kent C. Dodds' [Testing JavaScript](https://testingjavascript.com) and blog posts on Testing Library philosophy
- Alex Russell's blog ([infrequently.org](https://infrequently.org)) — Essential reading on performance budgets, framework costs, and the real-world web
- Addy Osmani's [Learning Patterns](https://www.patterns.dev/posts) — JavaScript and React patterns
- Jake Archibald's blog and talks — Service workers, rendering performance, streams

### Courses & Projects
- [Full Stack Open](https://fullstackopen.com) — University of Helsinki's modern web development curriculum
- [Frontend Masters](https://frontendmasters.com) — Courses by framework authors and industry experts
- Contribute to open-source design systems (Radix, Headless UI, Ark UI) to understand component architecture at scale

## References

- [Web Almanac](https://almanac.httparchive.org) — Annual state of the web report
- [State of JS](https://stateofjs.com) and [State of CSS](https://stateofcss.com) — Annual ecosystem surveys
- [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools/) — Profiling, debugging, and performance analysis
- [Can I Use](https://caniuse.com) — Browser compatibility tables
- [Chromium blog](https://blog.chromium.org) — Rendering engine updates and new platform features
