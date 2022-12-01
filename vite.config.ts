import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-electron-plugin";
import path from "path";

export default defineConfig({
	plugins: [react(), electron({ include: ["electron"] })],
	resolve: {
		alias: {
			"@": path.join(__dirname, "src")
		}
	}
});
