declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
			NODE_ENV: "development" | "production" | "test";
			DATABASE_URL: string;
			JWT_SECRET: string;
			JWT_EXPIRES_IN: string;
			API_PREFIX: string;
		}
	}
}

export {};
