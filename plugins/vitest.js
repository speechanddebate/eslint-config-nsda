import vitest from 'eslint-plugin-vitest';
import globals from 'globals';

export default {
	files: [
		'**/*.test.js',
		'**/*.test.ts',
		'**/*.test.jsx',
		'**/*.test.tsx',
		'setupTests.js',
		'setupTests.ts',
		'testSetup.js',
		'testSetup.ts',
	],
	plugins: { vitest },
	rules: {
		...vitest.configs.recommended.rules,
	},
	languageOptions: {
		globals: {
			...vitest.environments.env.globals,
			...globals.chai,
			...globals.jest,
		},
	},
};
