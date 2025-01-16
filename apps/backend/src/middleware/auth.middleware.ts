import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRole } from "@side-quest/shared/types/auth.js";

export interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		role: UserRole;
	};
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		return res.status(401).json({ message: "No token provided" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
			id: string;
			role: UserRole;
		};
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(403).json({ message: "Invalid token" });
	}
};

export const requireAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	if (req.user?.role !== UserRole.ADMIN) {
		return res.status(403).json({ message: "Admin access required" });
	}
	next();
};
