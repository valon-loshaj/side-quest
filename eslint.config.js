import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";

export default [
	// Base JS config
	js.configs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			prettier,
		},
		rules: {
			"prettier/prettier": "error",
		},
	},
	// TypeScript config
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				project: ["./apps/*/tsconfig.json"],
				tsconfigRootDir: ".",
			},
		},
		plugins: {
			"@typescript-eslint": typescript,
		},
		rules: {
			...typescript.configs["recommended"].rules,
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
	// React config
	{
		files: ["**/frontend/**/*.{jsx,tsx}"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				document: true,
				window: true,
				JSX: true,
				React: true,
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
	// Node/Express config
	{
		files: ["**/backend/**/*.ts"],
		languageOptions: {
			parserOptions: {
				project: ["./apps/backend/tsconfig.json"],
				tsconfigRootDir: ".",
			},
			globals: {
				process: true,
				console: true,
				module: true,
				require: true,
			},
		},
		rules: {
			"@typescript-eslint/no-misused-promises": "error",
			"@typescript-eslint/no-floating-promises": "error",
		},
	},
];
