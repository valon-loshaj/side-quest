// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig([
	// Backend config
	{
		entry: ["apps/backend/src/index.ts"],
		outDir: "apps/backend/dist",
		format: ["cjs", "esm"],
		dts: true,
		clean: true,
		tsconfig: "./apps/backend/tsconfig.json",
	},
	// Frontend config
	{
		entry: ["apps/frontend/src/index.ts"],
		outDir: "apps/frontend/dist",
		format: ["esm"],
		dts: true,
		clean: true,
		tsconfig: "./apps/frontend/tsconfig.json",
	},
]);
