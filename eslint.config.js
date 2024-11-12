import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginN from "eslint-plugin-n";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default [
	{
		// Config files
		files: ["*.config.{js,ts}", ".eslintrc.{js,cjs,mjs}"],
		...tseslint.config(
			js.configs.recommended,
			...tseslint.configs.recommended,
			{
				languageOptions: {
					parserOptions: {
						project: null, // Disable project for config files
					},
				},
			}
		),
	},
	{
		// Source files
		files: ["apps/**/*.{ts,tsx}"],
		...tseslint.config(
			js.configs.recommended,
			...tseslint.configs.recommended,
			{
				plugins: {
					n: eslintPluginN,
					import: eslintPluginImport,
				},
				rules: {
					"n/no-missing-import": "error",
					"import/no-unresolved": "error",
					"@typescript-eslint/no-unused-vars": [
						"error",
						{
							argsIgnorePattern: "^_",
							varsIgnorePattern: "^_",
						},
					],
				},
			},
			prettier,
			...compat.config({
				extends: ["plugin:import/typescript"],
				settings: {
					"import/resolver": {
						typescript: {
							project: ["./apps/*/tsconfig.json"],
						},
						node: true,
					},
				},
			}),
			{
				ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**"],
				languageOptions: {
					parserOptions: {
						project: ["./apps/*/tsconfig.json"],
						tsconfigRootDir: __dirname,
					},
				},
			}
		),
	},
];
