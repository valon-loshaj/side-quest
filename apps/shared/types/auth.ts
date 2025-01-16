export interface User {
	id: string;
	email: string;
	username: string;
	passwordHash: string;
	createdAt: Date;
	updatedAt: Date;
	role: UserRole;
}

export enum UserRole {
	USER = "USER",
	ADMIN = "ADMIN",
}

export interface AuthResponse {
	user: User;
	token: string;
}

export interface JWTPayload {
	id: string;
	role: UserRole;
}
