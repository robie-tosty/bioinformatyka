const fs = require("fs");

/** @type {import("@electron-forge/shared-types").ForgeConfig} */
module.exports = {
	packagerConfig: {
		ignore: fs
			.readdirSync(__dirname)
			.filter(name => name !== "build" && name !== "package.json")
			.map(file => new RegExp(`^(?!.*build\\/).*\\/${file.replace(".", "\\.")}$`))
	},
	makers: [
		{
			name: "@electron-forge/maker-zip"
		}
	]
};
