import { fileURLToPath } from "url";
import { dirname } from "path";
import app from "./app";
import { createServer } from "./server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer(app);
server.listen(process.env.PORT || 3000, () => {
	console.log(`Server running on port ${process.env.PORT || 3000}`);
});

export { server };
