import { Search } from "lucide-react";

interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

export function SearchBar({ query, onQueryChange, onSubmit, isLoading }: SearchBarProps) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className="flex w-full max-w-2xl gap-3"
        >
            <div className="relative flex-1">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Search knowledge base... (e.g. 5G handover, billing, VoLTE)"
                    className="w-full rounded-xl border border-zinc-200 bg-white py-3 pr-4 pl-12 text-base shadow-sm transition-colors placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
            </div>
            <button
                type="submit"
                disabled={isLoading || query.trim().length === 0}
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isLoading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}
