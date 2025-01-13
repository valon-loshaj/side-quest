export interface User {
	id: string;
	email: string;
	username: string;
	passwordHash: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AuthResponse {
	user: User;
	token: string;
}
