import { env } from "./config/environment.js";
import app from "./app.js";

const startServer = () => {
	try {
		app.listen(env.PORT, () => {
			console.log(`🚀 Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
		});
	} catch (error) {
		console.error("❌ Error starting server:", error);
		process.exit(1);
	}
};

startServer();
