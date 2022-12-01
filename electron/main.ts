import { app, session, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
	// Set Content Security Policy
	session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
		callback({
			responseHeaders: {
				...details.responseHeaders,
				"Content-Security-Policy": ["default-src 'self' 'unsafe-inline'"]
			}
		});
	});

	const window = new BrowserWindow({
		width: 1000,
		height: 700
	});
	if (process.env.VITE_DEV_SERVER_URL) {
		// Development build
		window.loadURL(process.env.VITE_DEV_SERVER_URL);
		window.webContents.openDevTools({ mode: "undocked", activate: false });
	} else {
		// Production build
		window.loadFile(path.join(__dirname, "index.html"));
	}
});
