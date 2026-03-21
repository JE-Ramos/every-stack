import { z } from "zod";

const sharedSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

export const backendEnvSchema = sharedSchema.extend({
    PORT: z.coerce.number().default(3001),
    DATABASE_URL: z.string().url(),
    GEMINI_API_KEY: z.string().min(1),
});

export const frontendEnvSchema = sharedSchema.extend({
    VITE_APP_NAME: z.string().default("EveryStack"),
    VITE_APP_DESCRIPTION: z.string().default("Full-stack monorepo template"),
    VITE_API_BASE_URL: z.string().url().default("http://localhost:3001"),
    VITE_FIREBASE_API_KEY: z.string().min(1),
    VITE_FIREBASE_PROJECT_ID: z.string().min(1),
    VITE_FIREBASE_APP_ID: z.string().min(1),
    VITE_FIREBASE_MEASUREMENT_ID: z.string().min(1),
});

export type BackendEnv = z.infer<typeof backendEnvSchema>;
export type FrontendEnv = z.infer<typeof frontendEnvSchema>;

export function parseEnv<T extends z.ZodTypeAny>(schema: T, env: Record<string, unknown>): z.infer<T> {
    const result = schema.safeParse(env);
    if (!result.success) {
        const formatted = result.error.flatten().fieldErrors;
        throw new Error(`Invalid environment variables:\n${JSON.stringify(formatted, null, 2)}`);
    }
    return result.data as z.infer<T>;
}
