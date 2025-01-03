import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("App", () => {
	it("should respond to health check", async () => {
		const response = await request(app).get("/health");
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("status", "ok");
		expect(response.body).toHaveProperty("timestamp");
		expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
	});
});
