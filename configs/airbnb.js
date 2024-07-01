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
	extends: ['airbnb', 'airbnb/hooks'],
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		},
	],
});
