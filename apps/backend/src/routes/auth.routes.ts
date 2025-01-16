import { Router, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "@side-quest/shared/types/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();

const loginHandler: RequestHandler = ({ body }, res) => {
	const { email, password } = body;

	prisma.user
		.findUnique({ where: { email } })
		.then((user: User) => {
			if (!user) {
				return res.status(401).json({ message: "Invalid credentials" });
			}
			return bcrypt.compare(password, user.passwordHash).then((validPassword) => {
				if (!validPassword) {
					return res.status(401).json({ message: "Invalid credentials" });
				}
				const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
					expiresIn: "1h",
				});
				res.json({ token });
			});
		})
		.catch((error: Error) => {
			console.error("Login error:", error);
			res.status(500).json({ message: "Server error" });
		});
};

router.post("/login", loginHandler);

export default router;
