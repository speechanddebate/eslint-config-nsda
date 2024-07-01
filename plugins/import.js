import importPlugin from 'eslint-plugin-import';

export default {
	languageOptions: {
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	plugins: { import: importPlugin },
	settings: {
		'import/parsers': {
			espree: ['.js', '.cjs', '.mjs', '.jsx'],
		},
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
	rules: {
		...importPlugin.configs.recommended.rules,
	},
};
