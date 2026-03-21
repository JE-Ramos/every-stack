import { frontendEnvSchema, parseEnv } from "@everystack/config";
import type { FrontendEnv } from "@everystack/config";

export const env: FrontendEnv = parseEnv(frontendEnvSchema, import.meta.env);
