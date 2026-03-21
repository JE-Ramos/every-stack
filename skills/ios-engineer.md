# iOS Native Engineer (SwiftUI)
> The engineer who builds software that lives in users' hands — where 60fps is the floor, memory is finite, and every state transition must feel inevitable.

## What Elite Looks Like

An elite iOS engineer in 2026 thinks in SwiftUI first. They do not bolt SwiftUI onto a UIKit mental model; they understand declarative UI as a fundamentally different paradigm where the view is a function of state, not a sequence of imperative mutations. They can reason about the SwiftUI view identity system, structural identity vs. explicit identity, and why `id()` modifiers cause view destruction while conditional branches cause state loss.

They have internalized Swift Concurrency — not just `async/await` syntax, but structured concurrency's task hierarchy, cancellation propagation, actor isolation, `@Sendable` closures, and the implications of `@MainActor` on view model design. They know when `nonisolated` is appropriate and can diagnose data races using Swift's strict concurrency checking (`-strict-concurrency=complete`).

Elite iOS engineers treat Xcode Instruments as a daily tool, not a last resort. They profile view body evaluations, catch unnecessary redraws with `Self._printChanges()`, understand the rendering pipeline from state change to Metal draw call, and can explain why a `GeometryReader` in a `LazyVStack` destroys scroll performance.

They understand the Apple platform holistically: App Intents for Shortcuts and Spotlight, WidgetKit for glanceable experiences, Live Activities for real-time updates, CloudKit for sync, and the privacy-first architecture that governs everything from ATT to photo access. They ship to the App Store regularly and have battle scars from review rejections.

They do not cargo-cult architecture. They choose MVVM, TCA, or a lighter observation-based pattern based on the problem's complexity, the team's size, and the feature's testing requirements — and they can articulate the tradeoffs of each.

## Static Analyzers & Custom Rules

This is the highest-leverage section for AI-assisted development. Static analyzers catch entire categories of bugs for fractions of a cent compared to LLM review. **Every CI pipeline and every agent workflow should run analyzers before sending code to an LLM for review.**

### SwiftLint

SwiftLint is the de facto standard linter for Swift. It enforces style consistency and catches common mistakes. Use the latest version from the [realm/SwiftLint](https://github.com/realm/SwiftLint) repo.

**Installation and integration:**
```bash
# Preferred: Swift Package Manager plugin (runs as build tool, no Homebrew dependency)
# In Package.swift:
.package(url: "https://github.com/realm/SwiftLint.git", from: "0.57.0")

# Alternative: Homebrew for CI
brew install swiftlint
```

**Key rules to enable for SwiftUI codebases:**
- `implicit_return` — SwiftUI views are single-expression bodies; enforce implicit returns for cleaner `body` declarations.
- `closure_body_length` — Catch bloated view closures that should be extracted into subviews.
- `type_body_length` — SwiftUI views should be small and composable; flag views exceeding ~200 lines.
- `function_body_length` — Keep computed properties and helper methods tight.
- `large_tuple` — Signal that you need a proper model type.
- `unused_closure_parameter` — Common source of subtle bugs in SwiftUI action closures.
- `private_over_fileprivate` — Enforce minimal visibility, especially for `@State` and `@Binding` properties.
- `prefer_self_in_static_references` — Cleaner SwiftUI code with `Self.` in static contexts.

**Rules to disable or adjust for SwiftUI:**
- `trailing_closure` — SwiftUI's modifier chains read better with explicit closure labels in some cases.
- `multiple_closures_with_trailing_closure` — SwiftUI initializers like `Button(action:label:)` trigger this constantly.
- `no_grouping_extension` — SwiftUI previews often live in extensions; relax this rule.

**Example `.swiftlint.yml` optimized for SwiftUI:**
```yaml
# .swiftlint.yml — SwiftUI-optimized configuration

disabled_rules:
  - multiple_closures_with_trailing_closure  # SwiftUI Button/Toggle initializers
  - trailing_closure                          # Modifier chains
  - opening_brace                             # Conflicts with SwiftFormat
  - no_grouping_extension                     # Preview extensions

opt_in_rules:
  - closure_body_length
  - empty_count
  - fatal_error_message
  - first_where
  - implicit_return
  - joined_default_parameter
  - last_where
  - modifier_order
  - overridden_super_call
  - prefer_self_in_static_references
  - private_over_fileprivate
  - redundant_nil_coalescing
  - sorted_first_last
  - toggle_bool
  - unavailable_function
  - unowned_variable_capture
  - unused_import
  - vertical_whitespace_closing_braces

excluded:
  - "*/Generated"
  - "*/Derived"
  - ".build"
  - "*.generated.swift"

type_body_length:
  warning: 250
  error: 400

closure_body_length:
  warning: 30
  error: 50

file_length:
  warning: 500
  error: 800

function_body_length:
  warning: 40
  error: 80

identifier_name:
  min_length:
    warning: 2
  excluded:
    - id
    - x
    - y
    - i
    - to
    - vm

modifier_order:
  preferred_modifier_order:
    - acl
    - setterACL
    - override
    - dynamic
    - mutating
    - lazy
    - final
    - required
    - convenience
    - typeMethods
    - owned
```

### Writing Custom SwiftLint Rules

Custom rules are where SwiftLint becomes a force multiplier. Two approaches:

**Regex-based custom rules** (fast to write, limited scope):
```yaml
custom_rules:
  no_environment_object:
    name: "Prefer Environment over EnvironmentObject"
    regex: "@EnvironmentObject"
    message: "Use @Environment with @Observable types instead of @EnvironmentObject. See migration guide."
    severity: warning

  no_observe_macro_in_view:
    name: "Unnecessary @Observable observation"
    regex: "@State\\s+private\\s+var\\s+\\w+\\s*=\\s+\\w+\\(\\)"
    message: "If this is an @Observable class, consider using @State for ownership or passing via .environment()."
    severity: warning

  swiftui_preview_conditional:
    name: "Preview macro preferred"
    regex: "struct\\s+\\w+_Previews\\s*:\\s*PreviewProvider"
    message: "Use #Preview macro instead of PreviewProvider. Available since iOS 17."
    severity: warning

  no_any_view:
    name: "Avoid AnyView"
    regex: "AnyView\\("
    message: "AnyView erases type information and disables SwiftUI diffing optimizations. Use @ViewBuilder, Group, or generics instead."
    severity: error

  no_geometry_reader_in_lazy:
    name: "GeometryReader in LazyStack"
    regex: "Lazy[VH]Stack[^}]*GeometryReader"
    message: "GeometryReader inside LazyVStack/LazyHStack causes catastrophic layout performance. Use .onGeometryChange() or a different approach."
    severity: error
```

**AST-based rules** (powerful, requires Swift): For rules that cannot be expressed as regex, build a SwiftLint plugin using SwiftSyntax. AST-based rules can detect structural issues like:
- View `body` properties that access multiple `@State` properties unnecessarily (causing over-invalidation)
- Missing `Equatable` conformance on `@Observable` model types used in `List`
- `Task {}` in `.onAppear` without cancellation handling in `.onDisappear`

### SwiftFormat

[SwiftFormat](https://github.com/nicklockwood/SwiftFormat) (not to be confused with Apple's `swift-format`) is the community standard formatter. It handles formatting so SwiftLint can focus on lint rules.

```bash
# .swiftformat
--swiftversion 5.10
--indent 4
--indentcase true
--trimwhitespace always
--voidtype void
--wraparguments before-first
--wrapparameters before-first
--wrapcollections before-first
--maxwidth 120
--funcattributes prev-line
--typeattributes prev-line

# SwiftUI-specific
--enable blankLinesBetweenImports
--enable isEmpty
--disable redundantReturn          # Keep explicit returns in multi-statement bodies
--disable trailingCommas            # Preference; some teams prefer enabled

# Exclusions
--exclude Generated,Derived,.build
```

**SwiftFormat vs. swift-format:** SwiftFormat (nicklockwood) is more mature, configurable, and widely adopted. Apple's `swift-format` is the official tool but has fewer options. Use SwiftFormat for production projects; use swift-format only if you need strict Apple style conformance.

### Periphery (Dead Code Detection)

[Periphery](https://github.com/peripheryapp/periphery) detects unused code: declarations, imports, protocols, and conformances. This is critical for SwiftUI projects where rapid iteration creates orphaned views, unused modifiers, and dead model types.

```bash
periphery scan --project MyApp.xcodeproj --schemes MyApp --targets MyApp --format xcode
```

Run Periphery in CI weekly (it is too slow for per-commit). Use its output to create cleanup tasks.

### Xcode Build Settings

Enable these build settings to treat warnings as guardrails:

| Setting | Value | Why |
|---|---|---|
| `SWIFT_TREAT_WARNINGS_AS_ERRORS` | `YES` | No warnings in CI. Period. |
| `SWIFT_STRICT_CONCURRENCY` | `complete` | Full `Sendable` checking, actor isolation enforcement |
| `ENABLE_USER_SCRIPT_SANDBOXING` | `YES` | Security baseline for build plugins |
| `DEAD_CODE_STRIPPING` | `YES` | Reduce binary size |

### Agent Workflow: Analyzer-First Review

When an AI agent reviews or generates iOS code, enforce this order:
1. **Run SwiftFormat** — fix formatting automatically (zero cost, zero ambiguity)
2. **Run SwiftLint** — catch lint violations before review (< 1 second per file)
3. **Run `swift build`** — catch compiler errors and strict concurrency warnings
4. **Only then** send remaining code to the LLM for architectural/logic review

This pipeline catches 60-80% of issues without spending a single LLM token.

## Core Responsibilities

- **SwiftUI view architecture** — Build composable view hierarchies using `@ViewBuilder`, `ViewModifier`, and container patterns. Understand structural vs. explicit identity, view lifetime, and the implications of conditional vs. `AnyView` branching on the diffing engine.
- **State management** — Master the full state management spectrum: `@State` for view-local state, `@Binding` for parent-child communication, `@Observable` / `@Bindable` for model objects, `@Environment` for dependency injection, and SwiftData `@Query` for persistence-backed state.
- **Swift Concurrency** — Write concurrent code using structured concurrency (`async let`, `TaskGroup`), actors for isolation, `AsyncSequence` for streaming data, and `@MainActor` for UI-bound work. Understand task cancellation and cooperative cancellation patterns.
- **Networking and data** — Build networking layers using `URLSession` with async/await, handle authentication, pagination, caching, and error mapping. Integrate with SwiftData or Core Data for local persistence.
- **Testing** — Write unit tests with Swift Testing (`@Test`, `#expect`), UI tests with XCTest UI, and snapshot tests. Test view models in isolation, test navigation flows, and maintain >80% coverage on business logic.
- **Performance** — Profile with Instruments (Time Profiler, Allocations, SwiftUI view body instrument). Optimize `List` and `LazyVStack` performance, minimize view invalidation, and keep app launch under 400ms.
- **Accessibility** — Implement VoiceOver support, Dynamic Type, reduced motion, and sufficient color contrast. Use the Accessibility Inspector to audit views. Treat accessibility as architecture, not a retrofit.
- **Release engineering** — Manage code signing, provisioning profiles, entitlements, Xcode Cloud or Fastlane pipelines, TestFlight distribution, phased releases, and App Store review compliance.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Language | Swift 5.10+, strict concurrency, result builders, property wrappers, macros, existentials vs. generics |
| UI Framework | SwiftUI (primary), UIKit (interop via `UIViewRepresentable`/`UIViewControllerRepresentable`) |
| Architecture | MVVM, TCA (Composable Architecture), observation-based patterns, `@Observable` macro |
| Concurrency | async/await, actors, `TaskGroup`, `AsyncSequence`, `AsyncStream`, Combine (legacy/interop) |
| Persistence | SwiftData, Core Data, UserDefaults, Keychain, CloudKit, GRDB |
| Networking | URLSession, async/await, Codable, OpenAPI Generator, GraphQL (Apollo iOS) |
| Testing | Swift Testing, XCTest, ViewInspector, snapshot testing (swift-snapshot-testing), Xcode UI tests |
| CI/CD | Xcode Cloud, Fastlane, GitHub Actions (with macOS runners), Tuist/XcodeGen for project generation |
| Monitoring | Firebase Crashlytics, Sentry, MetricKit, OSLog, os_signpost |
| Tooling | Instruments, Accessibility Inspector, Network Link Conditioner, SwiftLint, SwiftFormat, Periphery |
| Distribution | TestFlight, App Store Connect, enterprise distribution, ad-hoc profiles |

## SwiftUI Architecture Patterns

### @Observable vs. ObservableObject

As of iOS 17+, `@Observable` (Observation framework) replaces `ObservableObject` + `@Published`. The differences are fundamental:

| Aspect | ObservableObject | @Observable |
|---|---|---|
| Tracking | Whole-object invalidation | Per-property tracking |
| View invalidation | Any `@Published` change redraws all observers | Only views reading changed properties redraw |
| Syntax | `@StateObject`, `@ObservedObject`, `@EnvironmentObject` | `@State`, plain reference, `@Environment` |
| Combine dependency | Yes (`objectWillChange` publisher) | No |
| Performance | Poor for large models (over-invalidation) | Optimal (surgical invalidation) |

**Migration rule:** New code uses `@Observable`. Migrate `ObservableObject` types when touching them. Do not maintain two patterns long-term.

### MVVM in SwiftUI

SwiftUI MVVM differs from UIKit MVVM. The view *is* already a view-model in many cases — `@State` properties are local state, and the view's `body` is a pure function. Introduce a separate view model only when:
- The feature has complex business logic that benefits from isolated unit testing
- Multiple views share the same state transformations
- You need to inject mock dependencies for testing

```swift
@Observable
final class ProfileViewModel {
    var profile: Profile?
    var isLoading = false
    var error: Error?

    private let client: APIClient

    init(client: APIClient) {
        self.client = client
    }

    func load() async {
        isLoading = true
        defer { isLoading = false }
        do {
            profile = try await client.fetchProfile()
        } catch {
            self.error = error
        }
    }
}
```

### The Composable Architecture (TCA)

TCA (from Point-Free) is appropriate for large teams and complex apps where you need:
- Exhaustive testing of state mutations via reducers
- Structured side effects with explicit dependency management
- Deep-link and navigation state driven entirely by data
- Consistent architecture across 50+ features

**When TCA is overkill:** Simple CRUD apps, prototype features, or small teams where the ceremony exceeds the benefit. TCA has a steep learning curve and significant boilerplate; choose it deliberately.

### Navigation Patterns

SwiftUI navigation has matured significantly. Use `NavigationStack` with path-based navigation for programmatic control:

- `NavigationStack(path:)` with `NavigationPath` for type-erased stacks
- `.navigationDestination(for:)` for value-based routing
- Coordinator pattern via an `@Observable` router object for complex flows
- Deep linking by serializing `NavigationPath` to/from URLs

Avoid `NavigationLink(destination:)` (the old API) and `NavigationView` (deprecated).

## AI-First Practices

- **View scaffolding** — Use Claude Code to generate SwiftUI views from design specs or screenshots. Provide the data model as context so the generated view uses real types, not placeholders. Always specify the minimum deployment target.
- **Migration assistance** — Translate UIKit view controllers to SwiftUI views, `ObservableObject` to `@Observable`, Combine pipelines to `AsyncSequence`, and Core Data stacks to SwiftData. AI handles the mechanical translation; you verify lifecycle and edge-case behavior.
- **Concurrency auditing** — Paste a Swift file and ask for strict concurrency violations. AI can identify `@Sendable` issues, missing `@MainActor` annotations, and data races faster than manual review.
- **Test generation** — Generate Swift Testing tests from view model code. AI produces the `@Test` boilerplate and common assertions; the engineer ensures the tests verify meaningful behavior and edge cases.
- **Instruments interpretation** — Feed Instruments trace summaries (especially Time Profiler call trees and Allocations graphs) to AI for interpretation and prioritized optimization recommendations.
- **API integration** — Given an OpenAPI spec or REST endpoint documentation, generate the complete networking layer: `Codable` models, `URLSession` async methods, error types, and retry logic.

### Anti-Patterns

- **Blindly accepting generated navigation code** — AI frequently generates deprecated `NavigationView` or non-path-based `NavigationLink`. Always verify against the current API.
- **Ignoring deployment target** — AI may generate iOS 18 APIs when you target iOS 16. Always specify your floor.
- **Skipping strict concurrency review** — AI-generated code often compiles but produces warnings under `-strict-concurrency=complete`. Run the compiler before merging.
- **Using AI for App Store Review compliance** — AI cannot reliably predict what Apple will reject. This requires human judgment and experience.
- **Replacing Instruments with AI guessing** — AI can interpret profiling data but cannot replace actual profiling. Never optimize based on AI hunches without measurements.

## How They Collaborate

- **With designers** — Review designs against Human Interface Guidelines. Push back on patterns that fight the platform (custom tab bars that break VoiceOver, non-standard navigation that confuses users). Propose SwiftUI-native alternatives that achieve the design intent with platform primitives.
- **With backend engineers** — Co-design API contracts with mobile constraints in mind: batch endpoints for offline sync, pagination compatible with `List` prefetching, error codes that map to user-facing messages, and push notification payload structures.
- **With Android engineers** — Align on shared business logic where possible (Kotlin Multiplatform). Ensure feature parity planning accounts for platform-specific timelines (SwiftUI and Compose have different capability sets).
- **With QA** — Provide TestFlight builds with debug overlays. Define device testing matrices (minimum vs. latest OS, iPhone SE vs. Pro Max). Write Maestro or XCTest UI flows for critical paths so QA focuses on exploratory testing.
- **With product managers** — Surface iOS-specific constraints: App Store review timelines (1-7 days), phased rollout mechanics, the inability to hotfix without a new binary, and required reasons API declarations for privacy manifests.

## Hiring Signals

### Green Flags
- Can explain SwiftUI view identity (structural vs. explicit) and why it matters for state preservation
- Understands `@Observable` vs. `ObservableObject` tradeoffs and can articulate the performance implications
- Has diagnosed a real performance issue using Instruments and can walk through the process
- Writes tests for view models using Swift Testing or XCTest with dependency injection
- Understands actor isolation and can explain when `nonisolated` is appropriate
- Has shipped through App Store review and knows the common rejection reasons
- Can explain the SwiftUI rendering pipeline: state change, body evaluation, diffing, rendering
- Has opinions on architecture backed by tradeoff analysis, not dogma

### Red Flags
- Cannot build a layout without wrapping everything in `GeometryReader`
- Uses `AnyView` to solve every type-erasure problem
- Has never opened Instruments
- Treats `@StateObject` and `@ObservedObject` as interchangeable
- Cannot explain the difference between `task` and `onAppear`
- Uses `DispatchQueue.main.async` in SwiftUI instead of `@MainActor`
- Has no strategy for handling navigation state restoration
- Cannot reason about memory management under ARC (retain cycles in closures)

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn SwiftUI fundamentals | Individual screens | Build standard views, understand state property wrappers, handle basic navigation, make network requests, write unit tests |
| **Mid** | Own features end-to-end | Complete features | Design composable view hierarchies, implement offline-first data layers, use Swift Concurrency correctly, write UI tests, manage TestFlight releases |
| **Senior** | Drive app architecture | App-wide | Architect modular app structure (SPM modules), establish performance budgets, implement CI/CD with Xcode Cloud, mentor juniors, make architecture decisions (TCA vs. MVVM), lead accessibility compliance |
| **Staff** | Set iOS platform strategy | Org-wide | Define the organization's iOS technology direction, drive shared infrastructure (design system, networking, analytics SDK), establish coding standards and lint rules, own developer experience and build times, evaluate WWDC announcements for strategic adoption |
| **Principal** | Shape iOS engineering culture | Company-wide / industry | Influence Apple platform direction (radar filing, WWDC labs engagement), define multi-platform strategy (iOS/macOS/visionOS), mentor staff engineers, contribute to open-source Swift ecosystem, publish technical writing |

## RTFM — Essential Reading

### Official Documentation
- [SwiftUI documentation](https://developer.apple.com/documentation/swiftui) — The primary reference. Read the "Model data" and "State and data flow" sections thoroughly.
- [Swift Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/) — The language book's concurrency chapter. Non-negotiable reading.
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) — Platform conventions that affect every architectural decision.
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) — Know the rules. Section 4.0 (Design) and 2.1 (Performance) cause the most rejections.

### Courses
- [Stanford CS193p](https://cs193p.sites.stanford.edu) — Paul Hegarty's legendary course, now fully SwiftUI. The best free resource for learning SwiftUI architecture.
- [Point-Free](https://www.pointfree.co) — Brandon Williams and Stephen Celis. Deep, rigorous exploration of Swift, SwiftUI, and TCA. This is where staff-level iOS engineers level up.
- [Hacking with Swift](https://www.hackingwithswift.com) — Paul Hudson's extensive tutorial library. The "100 Days of SwiftUI" is the best structured learning path for SwiftUI.

### WWDC Sessions (Must-Watch)
- "Data Essentials in SwiftUI" (WWDC 2020) — Foundation for understanding state management
- "Demystify SwiftUI" (WWDC 2021) — View identity, lifetime, and dependency deep dive
- "The SwiftUI cookbook for navigation" (WWDC 2022) — NavigationStack patterns
- "Discover Observation in SwiftUI" (WWDC 2023) — @Observable macro and the Observation framework
- "Migrate to Swift Testing" (WWDC 2024) — Swift Testing framework adoption
- "SwiftUI essentials" (WWDC 2024) — Updated best practices and new APIs

### Books & Blogs
- [Swift by Sundell](https://swiftbysundell.com) — John Sundell's deep dives on Swift and SwiftUI patterns
- [Donny Wals' blog](https://www.donnywals.com) — Practical SwiftUI, Core Data, SwiftData, and concurrency content
- [Fatbobman's blog](https://fatbobman.com) — Deep technical analysis of SwiftUI internals and SwiftData
- **Advanced Swift** by Chris Eidhof, Ole Begemann & Airspeed Velocity — Language mastery for senior+ engineers
- **Thinking in SwiftUI** by Chris Eidhof & Florian Kugler (objc.io) — Mental models for declarative UI

## References

- [Swift Evolution proposals](https://www.swift.org/swift-evolution/) — Track language direction, especially SE-0395 (Observation), SE-0401 (Remove Actor isolation for @Sendable), and concurrency-related proposals
- [SwiftLint rules reference](https://realm.github.io/SwiftLint/rule-directory.html) — Complete rule documentation
- [Apple Developer Forums](https://developer.apple.com/forums/) — Official support channel; search before filing radars
- [Swift Package Index](https://swiftpackageindex.com) — Discover and evaluate Swift packages
- [App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi) — Automate TestFlight, metadata, and release management
- [Xcode Release Notes](https://developer.apple.com/documentation/xcode-release-notes/) — Track toolchain changes that affect your build
