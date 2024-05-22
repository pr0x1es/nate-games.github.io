import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    Pages(),
    {
      name: "404",
      apply: "build",
      writeBundle() {
        fs.copyFileSync("dist/index.html", "dist/404.html");
      },
    },
  ],
});
