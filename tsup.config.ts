// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig([
	// Backend config
	{
		entry: ["apps/backend/src/index.ts"],
		outDir: "apps/backend/dist",
		format: ["esm"],
		target: "node20",
		platform: "node",
		sourcemap: true,
		bundle: true,
		splitting: false,
		noExternal: ["express"],
	},
	// Frontend config
	{
		entry: ["apps/frontend/src/app/page.tsx"],
		outDir: "apps/frontend/dist",
		format: ["esm"],
		dts: true,
		clean: true,
		tsconfig: "./apps/frontend/tsconfig.json",
	},
]);
