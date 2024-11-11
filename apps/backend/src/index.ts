// apps/backend/src/index.ts
import app from "./app";
import { createServer } from "./server";

const server = createServer(app);

export { server };
