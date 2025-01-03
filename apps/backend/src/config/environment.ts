import { z } from "zod";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables based on NODE_ENV
const loadEnvFile = () => {
	const environment = process.env.NODE_ENV || "development";
	const envPath = path.resolve(__dirname, `../../.env.${environment}`);
	const defaultEnvPath = path.resolve(__dirname, "../../.env");

	// First try to load environment-specific file, then fall back to default .env
	dotenv.config({ path: envPath });
	dotenv.config({ path: defaultEnvPath });
};

// Load environment variables before validation
loadEnvFile();

const envSchema = z.object({
	PORT: z.string().transform(Number),
	NODE_ENV: z.enum(["development", "production", "test"]),
	DATABASE_URL: z.string().url(),
	JWT_SECRET: z.string().min(1),
	JWT_EXPIRES_IN: z.string().min(1),
	API_PREFIX: z.string().startsWith("/"),
});

export const validateEnv = () => {
	try {
		const env = envSchema.parse(process.env);
		return env;
	} catch (error) {
		console.error("❌ Invalid environment variables:", error);
		process.exit(1);
	}
};

export const env = validateEnv();
