import fs from "fs";

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
