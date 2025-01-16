import { Router } from "express";
import healthRoutes from "./health.routes.js";
import characterRoutes from "./character.routes.js";
import authRoutes from "./auth.routes.js";
const router = Router();

router.use("/health", healthRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/characters", characterRoutes);

export default router;
