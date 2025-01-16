import express from "express";
import { type Express } from "express";
import routes from "./routes/index.js";
import authRoutes from "./routes/auth.routes.js";

const app: Express = express();

app.use(express.json());

app.get("/", (_, res) => {
	res.json({ message: "Hello from SideQuest API" });
});

app.use(routes);
app.use("/api/auth", authRoutes);

export default app;
