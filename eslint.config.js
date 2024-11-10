// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
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
	eslintConfigPrettier,
	{
		ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**"],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.json", "./apps/*/tsconfig.json"],
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			"n/no-missing-import": "error",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"import/no-unresolved": "error",
		},
	}
);
