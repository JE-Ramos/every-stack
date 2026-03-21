export interface FeatureFlags {
    /** Enable file upload functionality */
    enableUpload: boolean;
    /** Enable vector/semantic search (requires embeddings) */
    enableSemanticSearch: boolean;
    /** Enable Firebase Analytics tracking */
    enableAnalytics: boolean;
    /** Show debug panel in the frontend UI */
    enableDebugPanel: boolean;
    /** Maximum file upload size in bytes */
    maxUploadSizeBytes: number;
}

const defaults: FeatureFlags = {
    enableUpload: true,
    enableSemanticSearch: false,
    enableAnalytics: false,
    enableDebugPanel: false,
    maxUploadSizeBytes: 10 * 1024 * 1024, // 10 MB
};

function parseBool(value: string | undefined, fallback: boolean): boolean {
    if (value === undefined || value === "") return fallback;
    return value === "true" || value === "1";
}

function parseInt(value: string | undefined, fallback: number): number {
    if (value === undefined || value === "") return fallback;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? fallback : parsed;
}

/**
 * Reads feature flags from environment variables.
 * Frontend: pass `import.meta.env`
 * Backend: pass `os.environ` (via Python, not this function)
 *
 * Env var naming: `FLAG_<SCREAMING_SNAKE_CASE>`
 * e.g. `FLAG_ENABLE_UPLOAD=true`
 */
export function loadFlags(env: Record<string, string | undefined>): FeatureFlags {
    return {
        enableUpload: parseBool(env["FLAG_ENABLE_UPLOAD"], defaults.enableUpload),
        enableSemanticSearch: parseBool(env["FLAG_ENABLE_SEMANTIC_SEARCH"], defaults.enableSemanticSearch),
        enableAnalytics: parseBool(env["FLAG_ENABLE_ANALYTICS"], defaults.enableAnalytics),
        enableDebugPanel: parseBool(env["FLAG_ENABLE_DEBUG_PANEL"], defaults.enableDebugPanel),
        maxUploadSizeBytes: parseInt(env["FLAG_MAX_UPLOAD_SIZE_BYTES"], defaults.maxUploadSizeBytes),
    };
}

export { defaults as defaultFlags };
