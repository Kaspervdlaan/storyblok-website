import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";

export default defineConfig(({ mode }) => {
  // Loads .env, .env.local, .env.[mode], etc.
  const env = loadEnv(mode, process.cwd(), "");

  const certPath = env.VITE_HTTPS_CERT;
  const keyPath = env.VITE_HTTPS_KEY;

  return {
    plugins: [react()],
    build: {
      outDir: '_site'
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    server: {
      https: certPath && keyPath
        ? {
            cert: fs.readFileSync(certPath),
            key: fs.readFileSync(keyPath),
          }
        : undefined,
      host: "localhost",
    },
  };
});
