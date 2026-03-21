import { useState, useEffect } from "react";
import {
    Blocks,
    HeartPulse,
    Search,
    ShieldCheck,
    Activity,
    Package,
    GitBranch,
    Terminal,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import { useGetStack, useSearch, getHealth } from "@/lib/api.gen";
import type { StackPackage, HealthResponse, SearchResponse } from "@/lib/api.gen";
import { getTraceId, logger } from "@/lib/logger";
import { appName, appDescription } from "@/lib/branding";

export function App() {
    const { data: stackData } = useGetStack();
    const stack = stackData as
        | {
              data: {
                  packages: StackPackage[];
                  ciChecks: StackPackage[];
                  techStack: Record<string, string[]>;
                  uptime: number;
                  pythonVersion: string;
              };
          }
        | undefined;
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        document.title = appName;
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
            <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
                    <Blocks className="h-6 w-6 text-blue-600" />
                    <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{appName}</h1>
                    <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        v0.0.0
                    </span>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-10">
                <div className="mb-10">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Your monorepo is ready
                    </h2>
                    <p className="max-w-2xl text-zinc-500 dark:text-zinc-400">
                        {appDescription}. Click any section below to see the stack working live.
                    </p>
                    <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
                        Session trace ID:{" "}
                        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            {getTraceId()}
                        </code>
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <InteractiveCard
                        icon={<HeartPulse className="h-5 w-5" />}
                        title="API Health Check"
                        description="Ping the FastAPI backend and see the response"
                        isOpen={activeSection === "health"}
                        onToggle={() => setActiveSection(activeSection === "health" ? null : "health")}
                    >
                        <HealthChecker />
                    </InteractiveCard>

                    <InteractiveCard
                        icon={<Search className="h-5 w-5" />}
                        title="Search API"
                        description="Generated SDK via orval + React Query"
                        isOpen={activeSection === "search"}
                        onToggle={() => setActiveSection(activeSection === "search" ? null : "search")}
                    >
                        <SearchDemo />
                    </InteractiveCard>

                    <InteractiveCard
                        icon={<Terminal className="h-5 w-5" />}
                        title="Structured Logger"
                        description="Trace IDs flow from browser to FastAPI"
                        isOpen={activeSection === "logger"}
                        onToggle={() => setActiveSection(activeSection === "logger" ? null : "logger")}
                    >
                        <LoggerDemo />
                    </InteractiveCard>

                    <InteractiveCard
                        icon={<ShieldCheck className="h-5 w-5" />}
                        title="CI/CD Pipeline"
                        description="GitHub Actions checks that run on every PR"
                        isOpen={activeSection === "ci"}
                        onToggle={() => setActiveSection(activeSection === "ci" ? null : "ci")}
                    >
                        <CiChecksPanel checks={stack?.data.ciChecks ?? []} />
                    </InteractiveCard>

                    <InteractiveCard
                        icon={<Package className="h-5 w-5" />}
                        title="Monorepo Packages"
                        description="Workspace packages with enforced import boundaries"
                        isOpen={activeSection === "packages"}
                        onToggle={() => setActiveSection(activeSection === "packages" ? null : "packages")}
                    >
                        <PackagesPanel packages={stack?.data.packages ?? []} />
                    </InteractiveCard>

                    <InteractiveCard
                        icon={<GitBranch className="h-5 w-5" />}
                        title="Tech Stack"
                        description="What's included and pre-configured"
                        isOpen={activeSection === "stack"}
                        onToggle={() => setActiveSection(activeSection === "stack" ? null : "stack")}
                    >
                        <TechStackPanel techStack={stack?.data.techStack ?? {}} />
                    </InteractiveCard>
                </div>

                {stack && (
                    <div className="mt-8 flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-500">
                        <span className="flex items-center gap-1">
                            <Activity className="h-3.5 w-3.5" />
                            Backend uptime: {stack.data.uptime}s
                        </span>
                        <span>Python {stack.data.pythonVersion}</span>
                    </div>
                )}
            </main>
        </div>
    );
}

function InteractiveCard({
    icon,
    title,
    description,
    isOpen,
    onToggle,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`rounded-xl border bg-white shadow-sm transition-all dark:bg-zinc-800 ${isOpen ? "border-blue-300 ring-2 ring-blue-500/20 dark:border-blue-700" : "border-zinc-200 dark:border-zinc-700"}`}
        >
            <button onClick={onToggle} className="flex w-full items-center gap-3 p-5 text-left">
                <div className={`${isOpen ? "text-blue-600" : "text-zinc-400"} transition-colors`}>{icon}</div>
                <div className="flex-1">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{description}</div>
                </div>
                <ChevronRight
                    className={`h-5 w-5 text-zinc-300 transition-transform dark:text-zinc-600 ${isOpen ? "rotate-90" : ""}`}
                />
            </button>
            {isOpen && <div className="border-t border-zinc-100 p-5 dark:border-zinc-700">{children}</div>}
        </div>
    );
}

function HealthChecker() {
    const [result, setResult] = useState<{ data: HealthResponse; ms: number } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function ping() {
        setLoading(true);
        setError(null);
        const start = Date.now();
        try {
            const res = (await getHealth()) as unknown as { data: HealthResponse };
            setResult({ data: res.data, ms: Date.now() - start });
            logger.info("health check passed", { ms: Date.now() - start });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button
                onClick={ping}
                disabled={loading}
                className="mb-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Pinging..." : "Ping /api/health"}
            </button>
            {result && (
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-3 text-xs text-emerald-400">
                    <code>
                        {`GET /api/health  ${result.ms}ms\n`}
                        {`x-trace-id: ${getTraceId()}\n\n`}
                        {JSON.stringify(result.data, null, 2)}
                    </code>
                </pre>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}

function SearchDemo() {
    const [query, setQuery] = useState("");
    const searchMutation = useSearch();

    function doSearch() {
        if (!query.trim()) return;
        searchMutation.mutate(
            { data: { query } },
            {
                onSuccess: (res) => {
                    const response = (res as unknown as { data: SearchResponse }).data;
                    logger.info("search completed", { query, count: response.count });
                },
            },
        );
    }

    const searchResult = (searchMutation.data as unknown as { data: SearchResponse } | undefined)?.data;

    return (
        <div>
            <div className="mb-3 flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && doSearch()}
                    placeholder="Try: 5G, VoLTE, billing, alarm"
                    className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100"
                />
                <button
                    onClick={doSearch}
                    disabled={searchMutation.isPending || !query.trim()}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                    {searchMutation.isPending ? "Searching..." : "Search"}
                </button>
            </div>
            {searchResult && (
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-3 text-xs text-emerald-400">
                    <code>
                        {`POST /api/search  (via generated SDK)\n`}
                        {`x-trace-id: ${getTraceId()}\n`}
                        {`Body: { "query": "${searchResult.query}" }\n\n`}
                        {`${searchResult.count} result(s):\n`}
                        {searchResult.results?.map((r) => `  [${r.domain}] ${r.title}`).join("\n")}
                    </code>
                </pre>
            )}
        </div>
    );
}

function LoggerDemo() {
    const [logs, setLogs] = useState<string[]>([]);

    function emitLog(level: "info" | "warn" | "error") {
        const msg =
            level === "info"
                ? "user clicked a button"
                : level === "warn"
                  ? "search returned 0 results"
                  : "API request failed";
        logger[level](msg, { demo: true });
        setLogs((prev) => [
            ...prev,
            `${new Date().toISOString().slice(11, 23)} [frontend] [${getTraceId().slice(0, 8)}...] ${level.toUpperCase()} ${msg}`,
        ]);
    }

    return (
        <div>
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                Click to emit logs. Check your browser console to see them live with trace IDs. Backend logs the same
                trace ID when you call an API.
            </p>
            <div className="mb-3 flex gap-2">
                <button
                    onClick={() => emitLog("info")}
                    className="rounded-lg bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400"
                >
                    log.info()
                </button>
                <button
                    onClick={() => emitLog("warn")}
                    className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400"
                >
                    log.warn()
                </button>
                <button
                    onClick={() => emitLog("error")}
                    className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 transition-colors hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                >
                    log.error()
                </button>
            </div>
            {logs.length > 0 && (
                <pre className="max-h-40 overflow-y-auto rounded-lg bg-zinc-900 p-3 text-xs text-zinc-300">
                    <code>{logs.join("\n")}</code>
                </pre>
            )}
        </div>
    );
}

function CiChecksPanel({ checks }: { checks: { name: string; description: string }[] }) {
    return (
        <div className="space-y-2">
            {checks.map((check) => (
                <div key={check.name} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <div>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{check.name}</span>
                        <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400">— {check.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function PackagesPanel({ packages }: { packages: { name: string; description: string }[] }) {
    return (
        <div className="grid gap-2 sm:grid-cols-2">
            {packages.map((pkg) => (
                <div key={pkg.name} className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900/50">
                    <code className="shrink-0 rounded bg-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                        {pkg.name}
                    </code>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{pkg.description}</span>
                </div>
            ))}
        </div>
    );
}

function TechStackPanel({ techStack }: { techStack: Record<string, string[]> }) {
    const labels: Record<string, string> = {
        frontend: "Frontend",
        backend: "Backend",
        shared: "Shared",
        devtools: "Dev Tools",
        ci: "CI/CD",
        infra: "Infrastructure",
    };

    return (
        <div className="space-y-3">
            {Object.entries(techStack).map(([key, items]) => (
                <div key={key}>
                    <div className="mb-1 text-xs font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
                        {labels[key] ?? key}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                            <span
                                key={item}
                                className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
