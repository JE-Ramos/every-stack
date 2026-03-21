interface DomainFilterProps {
    domains: string[];
    selected: string | undefined;
    onSelect: (domain: string | undefined) => void;
}

export function DomainFilter({ domains, selected, onSelect }: DomainFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            <button
                onClick={() => onSelect(undefined)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    selected === undefined
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
            >
                All
            </button>
            {domains.map((domain) => (
                <button
                    key={domain}
                    onClick={() => onSelect(selected === domain ? undefined : domain)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        selected === domain
                            ? "bg-blue-600 text-white"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    }`}
                >
                    {domain}
                </button>
            ))}
        </div>
    );
}
