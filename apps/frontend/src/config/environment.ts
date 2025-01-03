const requiredEnvVars = ["VITE_API_URL"] as const;

export const validateEnv = () => {
	const missingVars = requiredEnvVars.filter((envVar) => !import.meta.env[envVar]);

	if (missingVars.length > 0) {
		throw new Error(`❌ Missing required environment variables: ${missingVars.join(", ")}`);
	}
};

export const env = {
	apiUrl: import.meta.env.VITE_API_URL,
	enableFeatureX: import.meta.env.VITE_ENABLE_FEATURE_X === "true",
	analyticsId: import.meta.env.VITE_ANALYTICS_ID,
} as const;
