const sessionTraceId = crypto.randomUUID();

export function getTraceId(): string {
    return sessionTraceId;
}

export const logger = {
    info: (msg: string, data?: Record<string, unknown>) =>
        console.info(`[frontend] [${sessionTraceId}]`, msg, data ?? ""),
    warn: (msg: string, data?: Record<string, unknown>) =>
        console.warn(`[frontend] [${sessionTraceId}]`, msg, data ?? ""),
    error: (msg: string, data?: Record<string, unknown>) =>
        console.error(`[frontend] [${sessionTraceId}]`, msg, data ?? ""),
};
