import { Server } from "http";
import type { Express } from "express";

export function createServer(app: Express): Server {
	return app.listen(process.env.PORT || 3001, () => {
		console.log(`Server running on port ${process.env.PORT || 3001}`);
	});
}

export type { Express, Server };
