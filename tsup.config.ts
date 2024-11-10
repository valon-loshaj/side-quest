// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig([
	// Backend config
	{
		entry: ["packages/backend/src/index.ts"],
		outDir: "packages/backend/dist",
		format: ["cjs", "esm"],
		dts: true,
		clean: true,
		tsconfig: "./packages/backend/tsconfig.json",
	},
	// Frontend config
	{
		entry: ["packages/frontend/src/index.ts"],
		outDir: "packages/frontend/dist",
		format: ["esm"],
		dts: true,
		clean: true,
		tsconfig: "./packages/frontend/tsconfig.json",
	},
]);
