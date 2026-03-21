const ALLOWED_PREFIXES = [
    "frontend",
    "backend",
    "core",
    "utils",
    "config",
    "content",
    "ai",
    "ui",
    "mobile",
    "ci",
    "docs",
];

export default {
    extends: ["@commitlint/config-conventional"],
    plugins: [
        {
            rules: {
                "scope-prefix": ({ scope }: { scope: string | null }) => {
                    if (!scope) return [true, ""];
                    const prefix = scope.split("/")[0] ?? "";
                    return [
                        ALLOWED_PREFIXES.includes(prefix),
                        `scope "${scope}" must start with: ${ALLOWED_PREFIXES.join(", ")}\n` +
                            `  Examples: backend/search, frontend/auth, backend, frontend`,
                    ];
                },
            },
        },
    ],
    rules: {
        "scope-enum": [0] as const,
        "scope-empty": [1, "never"] as const,
        "scope-prefix": [2, "always"] as const,
    },
};
