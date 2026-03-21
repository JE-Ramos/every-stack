# Mobile (KMP) — Placeholder

This directory is reserved for the Kotlin Multiplatform mobile app (Android + iOS).

## When ready to scaffold

1. Use the [KMP Wizard](https://kmp.jetbrains.com/) or `File > New > Kotlin Multiplatform` in Android Studio
2. Place the generated project here (`apps/mobile/`)
3. Update `project.json` targets to point to Gradle commands:

```json
{
    "targets": {
        "build": {
            "command": "./gradlew build",
            "options": { "cwd": "apps/mobile" }
        },
        "test": {
            "command": "./gradlew test",
            "options": { "cwd": "apps/mobile" }
        },
        "android": {
            "command": "./gradlew installDebug",
            "options": { "cwd": "apps/mobile" }
        },
        "ios": {
            "command": "xcodebuild -workspace iosApp/iosApp.xcworkspace -scheme iosApp -sdk iphonesimulator",
            "options": { "cwd": "apps/mobile" }
        }
    }
}
```

4. Shared design tokens live in `packages/tokens/` (to be added)
5. API types are shared via OpenAPI spec in `specs/api.openapi.yaml` (to be added)

Then `nx build mobile`, `nx test mobile`, and `nx android mobile` all work from the repo root.
