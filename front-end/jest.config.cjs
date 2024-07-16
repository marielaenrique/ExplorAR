/* eslint-disable no-undef */

module.exports = {
	testEnvironment: "jest-environment-jsdom",
	setupFiles: ["./jest.setup.js"],
	transformIgnorePatterns: [],

	// ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/test/mock/styleMock.cjs",
		"\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/test/mock/styleMock.cjs",
		"@fortawesome/react-fontawesome": "<rootDir>/test/mock/styleMock.cjs",
	},
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.(js|jsx)$": "babel-jest" /* new */,
		"\\.(png|jpg|jpeg|gif|svg)$": [
			"jest-transform-stub",
			{
				rootDir: "C:\\PI\\equipo-05\\front-end",
			},
		],
	},
};

/* npm install --save-dev jest-transform-stub
 */
/* npm install --save-dev @testing-library/jest-dom
 */
