export interface Character {
	id: string;
	name: string;
	characterClass: string;
	avatarUrl: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Skill {
	id: string;
	name: string;
	description: string;
	effectiveLevel: string;
	iconUrl: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserCharacter {
	id: string;
	characterId: string;
	userId: string;
	level: number;
	currentXp: number;
	nextLevelXp: number;
	lastPlayedAt: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface CharacterSkill {
	id: string;
	characterId: string;
	skillId: string;
	isBaseSkill: boolean;
	unllockLevel: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface Quest {
	id: string;
	userId: string;
	title: string;
	description: string;
	type: "MAIN" | "SIDE";
	estimatedDuration: number;
	remainingDuration: number;
	sortOrder: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface ActiveQuestSession {
	id: string;
	questId: string;
	userCharacterId: string;
	userId: string;
	sessionStart: Date;
	lastPause: Date;
	accumulatedTime: number;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface QuestProgress {
	id: string;
	userCharacterId: string;
	questId: string;
	status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
	timeSpent: number;
	xpEarned: number;
	startedAt: Date;
	completedAt: Date;
	createdAt: Date;
	updatedAt: Date;
}
