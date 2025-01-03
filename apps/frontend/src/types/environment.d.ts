interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_ENABLE_FEATURE_X: string;
	readonly VITE_ANALYTICS_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
