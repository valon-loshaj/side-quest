// apps/backend/src/index.ts
import { createServer } from "./server.js"; // Add .js extension
import app from "./app.js"; // Add .js extension

const server = createServer(app);

export { server };
