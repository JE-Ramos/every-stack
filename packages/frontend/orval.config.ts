import { defineConfig } from "orval";

export default defineConfig({
    api: {
        input: "../../specs/api.openapi.yaml",
        output: {
            target: "./src/lib/api.gen.ts",
            client: "react-query",
            httpClient: "fetch",
            override: {
                mutator: {
                    path: "./src/lib/fetcher.ts",
                    name: "fetcher",
                },
            },
        },
    },
});
