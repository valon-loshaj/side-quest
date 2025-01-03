import express from "express";
import { type Express } from "express";
import routes from "./routes/index.js";

const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Hello from SideQuest API" });
});

app.use(routes);

export default app;
