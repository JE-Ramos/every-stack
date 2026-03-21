import { FileText, Tag } from "lucide-react";
import type { SearchResultItem } from "@/lib/api.gen";

const domainColors: Record<string, string> = {
    RAN: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    Core: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    BSS: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    NOC: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
};

interface ResultCardProps {
    result: SearchResultItem;
}

export function ResultCard({ result }: ResultCardProps) {
    const colorClass = domainColors[result.domain] ?? "bg-zinc-100 text-zinc-800";

    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
            <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 shrink-0 text-zinc-400" />
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{result.title}</h3>
                </div>
                <span className={`shrink-0 rounded-md px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
                    {result.domain}
                </span>
            </div>

            <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{result.summary}</p>

            <div className="flex flex-wrap items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-zinc-400" />
                {result.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
