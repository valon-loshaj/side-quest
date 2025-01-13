import type { User } from "./auth";

export interface ApiError {
	code: string;
	message: string;
	details?: unknown;
}

export type ApiEndpoints = {
	"/auth/login": {
		POST: {
			body: {
				email: string;
				password: string;
			};
			response: {
				user: User;
				token: string;
			};
		};
	};
	// Additional endpoints
};
