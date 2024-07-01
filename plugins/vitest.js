import vitest from 'eslint-plugin-vitest';

export default {
	files: ['**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx'],
	plugins: { vitest },
	rules: {
		...vitest.configs.recommended.rules,
	},
	languageOptions: {
		globals: {
			...vitest.environments.env.globals,
		},
	},
};
