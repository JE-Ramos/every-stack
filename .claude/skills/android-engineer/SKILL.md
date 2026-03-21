---
name: android-engineer
description: "Guide to Android Native Engineering with Jetpack Compose — detekt/ktlint/Android Lint/Spotless static analyzers, Kotlin Coroutines/Flow, Hilt, Room, Gradle KTS. Use this skill whenever the user asks about Android development, Jetpack Compose, Kotlin for Android, Android Studio, or Android app architecture. Also use when setting up detekt/ktlint rules or Android CI/CD pipelines."
disable-model-invocation: true
---

# Android Native Engineer
> The engineer who ships Kotlin-first, Compose-driven experiences on the platform with three billion active devices.

## What Elite Looks Like

An elite Android native engineer in 2026 thinks in Compose, not XML. They build declarative UIs with unidirectional data flow, use Kotlin coroutines and Flow as their concurrency backbone, and treat the legacy View system as migration debt rather than a starting point. They do not reach for Fragments unless maintaining a legacy codebase demands it.

They understand that Android's diversity is both its strength and its constraint. The same app must run smoothly on a Pixel 9 Pro and a budget Samsung from 2021 with 3GB of RAM. They design architectures that degrade gracefully across API levels, screen densities, and hardware capabilities. They know the Activity lifecycle not as trivia but as the foundation that determines whether the app survives process death, handles configuration changes, and restores state correctly.

Elite Android engineers treat the Gradle build as production infrastructure. They modularize aggressively, configure build variants precisely, and keep build times under control through dependency management, build caching, and convention plugins. They invest in static analysis and custom lint rules because catching a bug at build time is orders of magnitude cheaper than catching it in production on a device they cannot reproduce.

They own the full delivery pipeline: signing, ProGuard/R8 optimization, staged rollouts on Google Play, crash monitoring with Firebase Crashlytics, and ANR tracking. They understand that "it works on my emulator" is not a shipping standard.

## Static Analyzers & Custom Rules

This is the highest-leverage section in this document. Static analysis catches entire categories of bugs at build time for zero marginal cost. AI agents should run all analyzers BEFORE sending code to an LLM for review — fix the cheap problems cheaply, reserve LLM tokens for architectural and semantic issues.

### ktlint

ktlint enforces Kotlin coding conventions and the official Kotlin style guide. Configure it via `.editorconfig` at the project root:

```ini
# .editorconfig
root = true

[*.{kt,kts}]
indent_size = 4
indent_style = space
max_line_length = 120
ktlint_code_style = android_studio
ktlint_function_naming_ignore_when_annotated_with = Composable
insert_final_newline = true
```

The `ktlint_function_naming_ignore_when_annotated_with = Composable` rule is essential — without it, ktlint flags every `@Composable` function for using PascalCase, which is the correct Compose convention.

Integrate via Gradle:

```kotlin
// build.gradle.kts
plugins {
    id("org.jlleitschuh.gradle.ktlint") version "12.1.2"
}

ktlint {
    android.set(true)
    outputToConsole.set(true)
    ignoreFailures.set(false)
    filter {
        exclude("**/generated/**")
    }
}
```

Write custom ktlint rules by implementing the `Rule` interface from `com.pinterest.ktlint.rule.engine.core.api`. Package them as a JAR and add to the `ktlintRuleset` configuration.

### detekt

detekt performs static analysis for code smells, complexity, and style. It is the most extensible analyzer in the Kotlin ecosystem.

**Example `detekt.yml` optimized for Compose codebases:**

```yaml
# detekt.yml
build:
  maxIssues: 0

complexity:
  ComplexMethod:
    active: true
    threshold: 15
    ignoreSingleWhenExpression: true
    ignoreSimpleWhenEntries: true
    ignoreNestingFunctions: true
    nestingFunctions:
      - "run"
      - "let"
      - "apply"
      - "with"
      - "also"
      - "use"
  LongParameterList:
    active: true
    functionThreshold: 8
    constructorThreshold: 12
    ignoreDefaultParameters: true
    ignoreAnnotated:
      - "Composable"
  LongMethod:
    active: true
    threshold: 60
    ignoreAnnotated:
      - "Composable"
  TooManyFunctions:
    active: true
    thresholdInFiles: 20
    thresholdInClasses: 15
    thresholdInInterfaces: 10
    thresholdInObjects: 10
    thresholdInEnums: 5
    ignoreAnnotated:
      - "Preview"

style:
  MagicNumber:
    active: true
    ignoreNumbers:
      - "-1"
      - "0"
      - "1"
      - "2"
    ignoreHashCodeFunction: true
    ignorePropertyDeclaration: true
    ignoreAnnotation: true
    ignoreCompanionObjectPropertyDeclaration: true
    ignoreAnnotated:
      - "Composable"
      - "Preview"
  ForbiddenComment:
    active: true
    values:
      - "TODO:"
      - "FIXME:"
      - "HACK:"
    allowedPatterns: "TODO\\(\\w+\\)"
  UnusedImports:
    active: true
  MaxLineLength:
    active: true
    maxLineLength: 120
    excludeCommentStatements: true

naming:
  FunctionNaming:
    active: true
    ignoreAnnotated:
      - "Composable"
  TopLevelPropertyNaming:
    active: true
    constantPattern: "[A-Z][A-Za-z0-9]*"

performance:
  SpreadOperator:
    active: true
  ForEachOnRange:
    active: true

exceptions:
  TooGenericExceptionCaught:
    active: true
    exceptionNames:
      - "Exception"
      - "RuntimeException"
      - "Throwable"
```

Key Compose adaptations: `LongParameterList` thresholds are raised and `@Composable` functions are excluded from `FunctionNaming` PascalCase checks, `LongMethod`, and `MagicNumber`. Compose functions legitimately have many parameters (modifiers, callbacks, content lambdas) and can be long without being complex.

**Writing custom detekt rules:**

```kotlin
class NoCollectAsStateInViewModel(config: Config) : Rule(config) {

    override val issue = Issue(
        id = "NoCollectAsStateInViewModel",
        severity = Severity.Defect,
        description = "Do not call collectAsState() inside a ViewModel. " +
            "State collection belongs in the Composable layer.",
        debt = Debt.FIVE_MINS
    )

    override fun visitCallExpression(expression: KtCallExpression) {
        super.visitCallExpression(expression)
        val callee = expression.calleeExpression?.text ?: return
        if (callee == "collectAsState" || callee == "collectAsStateWithLifecycle") {
            val containingClass = expression.parents
                .filterIsInstance<KtClass>()
                .firstOrNull()
            if (containingClass?.name?.endsWith("ViewModel") == true) {
                report(CodeSmell(issue, Entity.from(expression), issue.description))
            }
        }
    }
}
```

Register custom rules via a `RuleSetProvider` and include the module in detekt's classpath via `detektPlugins` in Gradle.

### Android Lint

Android Lint is the platform's native analyzer with deep understanding of Android APIs, resource usage, and manifest correctness.

**`lint.xml` configuration:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<lint>
    <issue id="MissingTranslation" severity="error" />
    <issue id="HardcodedText" severity="error" />
    <issue id="Unused Resources" severity="warning" />
    <issue id="ObsoleteLintCustomCheck" severity="warning" />
    <issue id="UnusedMaterial3ScaffoldPaddingParameter" severity="error" />
    <issue id="UnrememberedMutableState" severity="error" />
    <issue id="StateFlowValueCalledInComposition" severity="error" />
    <issue id="CoroutineCreationDuringComposition" severity="error" />
    <issue id="FlowOperatorInvokedInComposition" severity="error" />
    <issue id="RememberReturnType" severity="error" />
</lint>
```

**Writing custom Lint rules with UAST:**

```kotlin
class MissingContentDescriptionDetector : Detector(), SourceCodeScanner {

    override fun getApplicableMethodNames(): List<String> = listOf("Image", "Icon")

    override fun visitMethodCall(context: JavaContext, node: UCallExpression, method: PsiMethod) {
        val arguments = node.valueArguments
        val hasContentDescription = arguments.any { arg ->
            val parameter = node.getParameterForArgument(arg)
            parameter?.name == "contentDescription"
        }
        if (!hasContentDescription) {
            context.report(
                ISSUE,
                node,
                context.getLocation(node),
                "Compose Image/Icon must have an explicit contentDescription for accessibility"
            )
        }
    }

    companion object {
        val ISSUE = Issue.create(
            id = "MissingComposeContentDescription",
            briefDescription = "Missing contentDescription on Image/Icon",
            explanation = "All Image and Icon composables must provide contentDescription " +
                "for screen reader accessibility. Use null explicitly for decorative images.",
            category = Category.A11Y,
            priority = 8,
            severity = Severity.ERROR,
            implementation = Implementation(
                MissingContentDescriptionDetector::class.java,
                Scope.JAVA_FILE_SCOPE
            )
        )
    }
}
```

Register the detector via an `IssueRegistry` and publish as a lint-checks AAR module.

### Compose-specific lint rules

Use [compose-rules](https://github.com/mrmans0n/compose-rules) (formerly Twitter's compose-lint-checks). This library provides rules purpose-built for Compose:

- Missing `Modifier` parameter on public composables
- Mutable objects passed as parameters without `@Stable` or `@Immutable`
- `remember` calls missing keys
- ViewModels instantiated inside composables without `hiltViewModel()` or `viewModel()`
- Unstable collections used as composable parameters

```kotlin
// build.gradle.kts
dependencies {
    lintChecks("io.nlopez.compose.rules:lint-checks:0.4.22")
    detektPlugins("io.nlopez.compose.rules:detekt:0.4.22")
}
```

### Spotless

Spotless enforces formatting as a build gate:

```kotlin
// build.gradle.kts
plugins {
    id("com.diffplug.spotless") version "7.0.2"
}

spotless {
    kotlin {
        target("**/*.kt")
        targetExclude("**/build/**")
        ktlint("1.5.0")
            .setEditorConfigPath("$rootDir/.editorconfig")
    }
    kotlinGradle {
        target("**/*.kts")
        ktlint("1.5.0")
    }
}
```

Run `./gradlew spotlessCheck` in CI. Run `./gradlew spotlessApply` locally before committing.

### Agent workflow for static analysis

AI agents operating on Android codebases should follow this pipeline:

1. **`./gradlew spotlessApply`** — auto-fix formatting
2. **`./gradlew detekt`** — catch code smells and complexity violations
3. **`./gradlew lintDebug`** — run Android Lint including Compose-specific checks
4. **Review remaining issues** — only now send code to LLM for architectural review

This pipeline eliminates 60-80% of review comments before an LLM ever sees the code. LLM review time should focus on naming quality, architectural coherence, testability, and domain correctness — not formatting and detectable smells.

## Core Responsibilities

- **Compose UI development** — Build screen-level composables with proper state hoisting, preview coverage, and modifier chains. Implement Material 3 theming, adaptive layouts for phones/tablets/foldables, and smooth animations using `Animatable`, `animateContentSize`, and `AnimatedVisibility`.
- **Architecture ownership** — Define and enforce the app's architecture: MVI or MVVM with unidirectional data flow, repository pattern for data access, use-case/interactor layer for business logic. Ensure ViewModels expose immutable state and handle process death restoration.
- **Kotlin coroutines and Flow** — Use structured concurrency with `viewModelScope` and `lifecycleScope`. Design reactive data pipelines with `StateFlow`, `SharedFlow`, and `callbackFlow`. Handle cancellation, exception propagation, and backpressure correctly.
- **Dependency injection** — Configure Hilt (or Koin) with proper scoping: `@Singleton` for app-scoped singletons, `@ViewModelScoped` for ViewModel-scoped dependencies, `@ActivityScoped` only when genuinely needed. Write modules that are testable and do not leak context.
- **Data layer** — Implement Room databases with proper migration strategies, type converters, and relationship mappings. Integrate with DataStore for preferences. Design offline-first sync strategies with conflict resolution.
- **Networking** — Configure Retrofit or Ktor with proper serialization (kotlinx.serialization), interceptors for auth/logging/retry, and certificate pinning. Handle connectivity changes with `ConnectivityManager` callbacks.
- **Build system** — Maintain Gradle KTS build scripts, configure build variants and product flavors, manage dependency versions with version catalogs (`libs.versions.toml`), and write convention plugins for multi-module projects.
- **Testing** — Write unit tests with JUnit 5 and Turbine (for Flow testing), UI tests with Compose testing APIs (`composeTestRule`), and integration tests with Hilt testing support. Use Robolectric for fast JVM-based Android tests where appropriate.
- **Release engineering** — Manage signing configurations, R8 shrinking and obfuscation rules, app bundle generation, staged rollouts via Google Play Console, and crash/ANR monitoring.

## Key Skills & Tools

| Category | Technologies & Concepts |
|---|---|
| Language | Kotlin (coroutines, Flow, sealed classes/interfaces, value classes, context receivers, K2 compiler) |
| UI Framework | Jetpack Compose (Material 3, adaptive layouts, navigation-compose, animation APIs, Compose Multiplatform awareness) |
| Architecture | MVI, MVVM + UDF, Clean Architecture layers, repository pattern, use-case layer |
| DI | Hilt (Dagger under the hood), Koin, manual DI for small modules |
| Networking | Retrofit + OkHttp, Ktor Client, kotlinx.serialization, Moshi, gRPC, GraphQL (Apollo Kotlin) |
| Storage | Room, DataStore (Proto and Preferences), SQLDelight for KMP |
| Async | Kotlin Coroutines, Flow (StateFlow, SharedFlow, callbackFlow), Channel |
| Navigation | Compose Navigation (type-safe routes), Voyager, Decompose |
| Testing | JUnit 5, Turbine, Compose UI testing, MockK, Robolectric, Espresso (legacy), Maestro (E2E) |
| Build | Gradle KTS, version catalogs, convention plugins, composite builds, R8/ProGuard |
| CI/CD | GitHub Actions, Bitrise, Gradle Build Cache, remote build cache |
| Monitoring | Firebase Crashlytics, Firebase Performance, Google Play Console vitals, LeakCanary |
| Static Analysis | detekt, ktlint, Android Lint, Spotless, compose-rules |

## Compose Architecture Patterns

### Unidirectional Data Flow (UDF)

The non-negotiable principle: state flows down, events flow up. Every screen should follow this pattern:

```
UI (Composable) → Event → ViewModel → State → UI
```

The ViewModel exposes a single `StateFlow<ScreenUiState>` (or a small number of related flows). The Composable collects it and renders. User actions become sealed interface events sent to the ViewModel.

### MVI vs MVVM in Compose

**MVVM with UDF** — The ViewModel exposes `StateFlow<UiState>` and functions for each user action. Simple, well-supported by Google's architecture guidance, works for 90% of screens.

**MVI (Model-View-Intent)** — The ViewModel accepts a `sealed interface Intent` via a single `fun onEvent(event: UiEvent)` method and reduces state through a pure function. Better audit trail, easier to test state transitions, but more boilerplate. Use for complex screens with many interacting states.

### State Hoisting

Composables should be stateless by default. Hoist state to the caller:

```kotlin
// Stateless composable — testable, previewable, reusable
@Composable
fun SearchBar(
    query: String,
    onQueryChange: (String) -> Unit,
    onSearch: () -> Unit,
    modifier: Modifier = Modifier,
)
```

The ViewModel or a stateful wrapper owns the actual `mutableStateOf` or `StateFlow`. Stateless composables are trivially previewable and testable.

### Side Effects

Use the correct side-effect handler for the job:
- `LaunchedEffect(key)` — coroutine tied to composition lifecycle, restarts when key changes
- `DisposableEffect(key)` — for cleanup-requiring effects (listeners, callbacks)
- `SideEffect` — runs after every successful recomposition, for non-suspend side effects
- `rememberCoroutineScope()` — for event-driven coroutines launched from callbacks
- `snapshotFlow { }` — converts Compose state reads into a Flow for use in `LaunchedEffect`

Misusing side effects is the single most common source of Compose bugs. Never launch coroutines directly in composition. Never call suspend functions outside of `LaunchedEffect` or a remembered coroutine scope.

### CompositionLocal

Use `CompositionLocal` for cross-cutting concerns that would otherwise require passing through many layers: theming, navigation controllers, analytics trackers. Do not use it as a replacement for dependency injection or to avoid proper state hoisting. Overuse makes code difficult to trace and test.

### Stability and Performance

Mark data classes used as composable parameters with `@Stable` or `@Immutable` when the Compose compiler cannot infer stability (e.g., classes from other modules). Use the Compose compiler metrics (`-P plugin:androidx.compose.compiler.plugins.kotlin:metricsDestination=...`) to identify unstable parameters causing unnecessary recompositions. Prefer `kotlinx.collections.immutable` (`ImmutableList`, `PersistentList`) for collection parameters.

## AI-First Practices

- **Compose UI generation** — Provide AI agents with the screen's `UiState` data class and let them generate the composable tree. Always include a `Modifier` parameter and `@Preview` functions in the prompt requirements.
- **State machine scaffolding** — Describe the screen's states (Loading, Content, Error, Empty) and transitions as a sealed interface, then let AI generate the ViewModel reducer logic and corresponding UI branches.
- **Migration from Views to Compose** — Feed AI the existing XML layout and its Fragment/Activity code. Generate the equivalent composable with proper state hoisting. Review for lifecycle correctness — the AI often misses `collectAsStateWithLifecycle` vs `collectAsState`.
- **Room schema generation** — Describe the domain entities and relationships. Let AI generate the `@Entity`, `@Dao`, and migration scripts. Always verify migration correctness against the current schema hash.
- **Gradle build optimization** — Share the build scan output or `--profile` results with AI for analysis of slow tasks, redundant configurations, and missing cache opportunities.

### Anti-patterns to reject in AI output

- `remember { mutableStateOf() }` without proper keys when the state depends on parameters
- `collectAsState()` instead of `collectAsStateWithLifecycle()` in Activity/Fragment-hosted composables
- `LaunchedEffect(Unit)` used as an `init` block — fragile and restarts unexpectedly in navigation scenarios
- ViewModels instantiated via constructor instead of `hiltViewModel()` or `viewModel()`
- `GlobalScope.launch` anywhere in the codebase
- Composable functions that take ViewModel as a parameter (breaks preview and testability)
- Missing `Modifier` parameter on public composable functions
- Using `mutableStateListOf` in ViewModel instead of updating an immutable list in `StateFlow`

## How They Collaborate

- **With designers** — Review Material 3 component usage and custom design tokens. Ensure designs account for dynamic color (Material You), dark theme, font scaling, and display cutouts. Build a shared Compose-based design system library with `@Preview` screenshots used as a living style guide.
- **With backend engineers** — Co-design API contracts with mobile constraints in mind: batch endpoints for list screens, pagination keyed by cursor rather than offset, push notification payload structures, and idempotent write operations for retry-safe offline sync.
- **With iOS engineers** — Share business logic through Kotlin Multiplatform (KMP) where it makes sense: data models, validation logic, API clients. Keep UI platform-native. Align on feature parity and behavioral consistency across platforms.
- **With QA** — Provide debug builds with LeakCanary, strict mode violations, and enhanced logging. Define device test matrices covering minimum API level, popular OEM skins, and varying screen sizes. Write Maestro flows for critical user journeys.
- **With product managers** — Communicate Android-specific constraints: Google Play staged rollout timelines, in-app update API limitations, background execution restrictions by API level, and battery optimization exemption requirements.

## Hiring Signals

### Green Flags
- Can explain how Compose recomposition works and what triggers unnecessary recompositions
- Understands process death and can demonstrate state restoration with `SavedStateHandle`
- Has opinions on MVI vs MVVM backed by experience shipping both
- Can read a Gradle build script and identify inefficiencies (unnecessary `api` dependencies, missing build cache configuration, misconfigured variant filters)
- Writes Compose previews as a first-class development practice, not an afterthought
- Understands R8 shrinking rules and has debugged a production obfuscation issue
- Can profile a janky `LazyColumn` and identify the cause (unstable parameters, heavy composition, missing keys)
- Has configured detekt or lint rules and can explain why specific rules matter

### Red Flags
- Still writes Fragments and XML layouts for new screens without legacy constraints
- Cannot explain the difference between `State`, `StateFlow`, and `LiveData` in a Compose context
- Uses `GlobalScope` or creates unstructured coroutines
- Has never modularized an Android project beyond a single app module
- Cannot reason about what happens when the system kills the app's process
- Treats Gradle as a black box and copy-pastes build script snippets without understanding
- Has never written or configured a custom lint or detekt rule

## Growth Path

| Level | Focus | Scope | Expectations |
|---|---|---|---|
| **Junior** | Learn Compose and Kotlin | Individual screens | Build screens with Material 3 components, handle navigation, make API calls with Retrofit, write basic unit tests, understand the Activity lifecycle |
| **Mid** | Own features end-to-end | Complete features | Implement complex Compose UIs with animations, design ViewModels with proper UDF, write Flow-based data layers, handle process death, write UI tests, manage dependency injection with Hilt |
| **Senior** | Drive app architecture | App-wide | Architect multi-module projects, establish Compose conventions and custom lint rules, optimize build times, configure CI/CD pipelines, mentor juniors, lead code reviews, evaluate architecture patterns |
| **Staff** | Set Android strategy | Org-wide | Define the organization's Android technology strategy, drive shared infrastructure (design system, networking, analytics modules), establish static analysis and quality gates, evaluate KMP adoption, own developer experience across Android teams |
| **Principal** | Shape Android engineering culture | Company-wide / industry | Engage with the Android ecosystem (Google I/O, AndroidX contributions), define the company's mobile platform direction, mentor staff engineers, drive adoption of emerging patterns (Compose Multiplatform, KMP), influence Google's developer tooling through feedback and contributions |

## Essential Reading

For books, articles, courses, and open-source projects to study, see [references.md](references.md).

