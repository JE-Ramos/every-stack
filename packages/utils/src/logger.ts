import pino from "pino";
import type { Logger as PinoLogger } from "pino";

const isProduction = process.env["NODE_ENV"] === "production";

const baseLogger = pino({
    level: process.env["LOG_LEVEL"] ?? (isProduction ? "info" : "debug"),
    ...(isProduction ? {} : { transport: { target: "pino-pretty" } }),
});

export interface CreateLoggerOptions {
    /** Package name: "frontend", "backend", "ai", "utils", etc. */
    service: string;
    /** Optional sub-module for finer-grained filtering: "search", "ingest", "auth" */
    module?: string | undefined;
    /** Trace ID for request correlation. Auto-generated if omitted. */
    traceId?: string | undefined;
}

export function createLogger(options: CreateLoggerOptions): PinoLogger {
    return baseLogger.child({
        service: options.module ? `${options.service}:${options.module}` : options.service,
        traceId: options.traceId ?? crypto.randomUUID(),
    });
}

export type Logger = PinoLogger;
