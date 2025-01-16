import type { User } from "./auth";

export interface ApiError {
	code: string;
	message: string;
	details?: unknown;
}

// Define Character types
export interface Character {
	id: string;
	name: string;
	characterClass: string;
	avatarUrl: string;
	characterSkills: Array<{
		skill: {
			id: string;
			name: string;
			description: string;
			effectiveLevel: string;
			iconUrl: string;
		};
	}>;
	createdAt: string;
	updatedAt: string;
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
	"/characters": {
		GET: {
			response: {
				characters: Character[];
			};
		};
		POST: {
			body: {
				name: string;
				characterClass: string;
				avatarUrl: string;
			};
			response: {
				character: Character;
			};
		};
	};
	// Additional endpoints
};
