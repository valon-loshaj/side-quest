import express from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

// Basic middleware for JSON parsing
app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
