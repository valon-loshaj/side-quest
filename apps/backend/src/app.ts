import express from "express";
import { type Express } from "express";

const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Hello from SideQuest API" });
});

export default app;
