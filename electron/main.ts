import { app, session, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
	const window = new BrowserWindow({
		width: 1200,
		height: 800
	});
	if (process.env.VITE_DEV_SERVER_URL) {
		// Development build
		session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
			callback({
				responseHeaders: {
					...details.responseHeaders,
					"Content-Security-Policy": [
						"default-src 'self' 'unsafe-inline' http://localhost:8097 ws://localhost:8097"
					]
				}
			});
		});
		window.loadURL(process.env.VITE_DEV_SERVER_URL);
		window.webContents.openDevTools({ mode: "right", activate: false });
	} else {
		// Production build
		session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
			callback({
				responseHeaders: {
					...details.responseHeaders,
					"Content-Security-Policy": ["default-src 'self' 'unsafe-inline'"]
				}
			});
		});
		window.loadFile(path.join(__dirname, "index.html"));
	}
});
