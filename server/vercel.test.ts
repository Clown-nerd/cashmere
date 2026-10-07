import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import apiHandler from "../api/index";
import { createExpressApp } from "./_core/app";

describe("Vercel deployment setup", () => {
  it("vercel.json is valid and properly configured", () => {
    const vercelConfigPath = path.resolve(import.meta.dirname, "../vercel.json");
    expect(fs.existsSync(vercelConfigPath)).toBe(true);

    const config = JSON.parse(fs.readFileSync(vercelConfigPath, "utf-8"));
    expect(config.outputDirectory).toBe("dist/public");
    expect(Array.isArray(config.rewrites)).toBe(true);

    const apiRewrite = config.rewrites.find((r: { source: string }) => r.source === "/api/(.*)");
    expect(apiRewrite).toBeDefined();
    expect(apiRewrite.destination).toBe("/api");

    const spaRewrite = config.rewrites.find((r: { source: string }) => r.source === "/(.*)");
    expect(spaRewrite).toBeDefined();
    expect(spaRewrite.destination).toBe("/index.html");
  });

  it("api/index.ts exports an Express application function", () => {
    expect(typeof apiHandler).toBe("function");
    expect(apiHandler).toHaveProperty("handle");
  });

  it("createExpressApp configures health and platform routes", () => {
    const app = createExpressApp();
    expect(typeof app).toBe("function");
    expect(typeof app.get).toBe("function");
  });
});
