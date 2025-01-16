import { Router, type RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { authenticateToken, requireAdmin } from "../middleware/auth.middleware.js";
import type { ApiError, ApiEndpoints } from "@side-quest/shared/types/api.js";

const router = Router();
const prisma = new PrismaClient();

type GetCharactersResponse = ApiEndpoints["/characters"]["GET"]["response"];
type CreateCharacterBody = ApiEndpoints["/characters"]["POST"]["body"];
type CreateCharacterResponse = ApiEndpoints["/characters"]["POST"]["response"];

// GET /characters - Get all characters
router.get("/", (async (_, res) => {
	try {
		const characters = await prisma.character.findMany({
			include: {
				characterSkills: {
					include: {
						skill: true,
					},
				},
			},
		});

		const response: GetCharactersResponse = { characters };
		res.json(response);
	} catch (error) {
		const apiError: ApiError = {
			code: "FETCH_CHARACTERS_ERROR",
			message: "Failed to fetch characters",
			details: error instanceof Error ? error.message : "Unknown error",
		};
		res.status(500).json(apiError);
	}
}) as RequestHandler);

// POST /characters - Create a new character (Admin only)
router.post("/", authenticateToken, requireAdmin, (async (req, res) => {
	try {
		const { name, characterClass, avatarUrl } = req.body as CreateCharacterBody;

		// Validate required fields
		if (!name || !characterClass || !avatarUrl) {
			const apiError: ApiError = {
				code: "VALIDATION_ERROR",
				message: "Missing required fields",
				details: {
					name: !name ? "Name is required" : null,
					characterClass: !characterClass ? "Character class is required" : null,
					avatarUrl: !avatarUrl ? "Avatar URL is required" : null,
				},
			};
			return res.status(400).json(apiError);
		}

		const character = await prisma.character.create({
			data: {
				name,
				characterClass,
				avatarUrl,
			},
			include: {
				characterSkills: {
					include: {
						skill: true,
					},
				},
			},
		});

		const response: CreateCharacterResponse = { character };
		res.status(201).json(response);
	} catch (error) {
		const apiError: ApiError = {
			code: "CREATE_CHARACTER_ERROR",
			message: "Failed to create character",
			details: error instanceof Error ? error.message : "Unknown error",
		};
		res.status(500).json(apiError);
	}
}) as RequestHandler);

export default router;
