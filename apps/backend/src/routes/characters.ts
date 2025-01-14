import { Router, RequestHandler } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

// Get all characters
const getCharacters: RequestHandler = async (req, res, next) => {
	try {
		const characters = await prisma.character.findMany({
			include: {
				userCharacters: true,
				characterSkills: {
					include: {
						skill: true,
					},
				},
			},
		});
		res.json(characters);
	} catch (error) {
		next(error);
	}
};

// Create a new character
const createCharacter: RequestHandler = async (req, res, next) => {
	try {
		const { name, characterClass, avatarUrl } = req.body;
		const character = await prisma.character.create({
			data: {
				name,
				characterClass,
				avatarUrl,
			},
		});
		res.status(201).json(character);
	} catch (error) {
		next(error);
	}
};

router.get("/", getCharacters);
router.post("/", createCharacter);

export default router;
