import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    minify: "esbuild",    // FIX: prevents build from hanging
    target: "esnext",     // faster build + supports modern JS
    outDir: "dist",       // Vercel expects this folder
    sourcemap: false,     // optional optimization
  }
});
