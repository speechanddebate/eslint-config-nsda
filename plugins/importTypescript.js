import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export default compat.config({
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: ['import'],
			extends: ['plugin:import/typescript'],
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx'],
				},
				'import/resolver': {
					typescript: {},
				},
			},
		},
	],
});
