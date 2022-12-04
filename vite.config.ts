import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-electron-plugin";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

export default defineConfig({
	plugins: [createHtmlPlugin(), react(), electron({ include: ["electron"], outDir: "build" })],
	build: {
		outDir: "build"
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "src")
		}
	}
});
