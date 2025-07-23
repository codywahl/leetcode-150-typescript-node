// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // allows using `test`, `expect` without imports
    environment: "node", // or 'happy-dom' for browser-like
  },
  server: {
    host: "0.0.0.0",
    port: 51204,
  },
});
