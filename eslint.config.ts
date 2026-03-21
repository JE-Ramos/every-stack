import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    { ignores: ["**/dist", "**/node_modules", "**/*.js", "**/*.mjs", "**/*.gen.ts"] },

    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,

    {
        files: ["packages/frontend/**/*.{ts,tsx}", "packages/ui/**/*.{ts,tsx}"],
        ...reactHooks.configs.flat["recommended-latest"],
        ...jsxA11y.flatConfigs.strict,
    },

    {
        files: ["packages/frontend/**/*.{ts,tsx}", "packages/ui/**/*.{ts,tsx}"],
        ...reactRefresh.configs.vite(),
    },

    eslintConfigPrettier,
);
