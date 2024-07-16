/* eslint-disable no-undef */
module.exports = {
	presets: [
		["@babel/preset-env", { targets: { esmodules: true } }],
		["@babel/preset-react", { runtime: "automatic" }],
	],
	plugins: [
		// Otros plugins que estés utilizando

		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					"@": "./src",
				},
			},
		],
	],
};

/* npm install --save-dev babel-plugin-module-resolver */
/*  npm list --depth=0 */
