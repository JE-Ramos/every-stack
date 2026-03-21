import { getTraceId, logger } from "./logger";

export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
    const traceId = getTraceId();
    const method = init?.method ?? "GET";

    logger.info(`${method} ${url}`);

    const response = await fetch(url, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            "x-trace-id": traceId,
            ...init?.headers,
        },
    });

    if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Request failed: ${response.status}`);
    }

    const data = await response.json();

    return { data, status: response.status, headers: response.headers } as T;
}
