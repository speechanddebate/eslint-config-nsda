import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';

import ignores from './configs/ignores.js';
import globals from './configs/globals.js';
import { airbnbBase, airbnbWithReact } from './configs/airbnb.js';
import typescript from './configs/typescript.js';
import disableTypeChecked from './configs/disableTypeChecked.js';

import vitestPlugin from './plugins/vitest.js';
import testingLibraryPlugin from './plugins/testingLibrary.js';
import importPlugin from './plugins/import.js';
import importTypescriptPlugin from './plugins/importTypescript.js';

import baseRules from './rules/base.js';
import importRules from './rules/import.js';
import reactRules from './rules/react.js';
import jsxa11yRules from './rules/jsx-a11y.js';
import jestRules from './rules/jest.js';
import vitestRules from './rules/vitest.js';
import typescriptRules from './rules/typescript.js';
import tabroomRules from './rules/tabroom.js';

export const plugins = {
	vitest: vitestPlugin,
	testingLibrary: testingLibraryPlugin,
	import: importPlugin,
	importTypescript: importTypescriptPlugin,
	svelte: eslintPluginSvelte,
};

export const rules = {
	baseRules,
	importRules,
	reactRules,
	jsxa11yRules,
	jestRules,
	vitestRules,
	typescriptRules,
	tabroomRules,
};

export { ignores };
export { globals };

const base = [ignores, globals, eslint.configs.recommended];

const recommended = [
	...base,
	...airbnbBase,

	vitestPlugin,
	importPlugin,

	baseRules,
	importRules,
	jestRules,
	vitestRules,

	eslintConfigPrettier,
];

const react = [
	...base,
	...airbnbWithReact,

	vitestPlugin,
	...testingLibraryPlugin,
	importPlugin,

	baseRules,
	importRules,
	reactRules,
	jsxa11yRules,
	jestRules,
	vitestRules,

	eslintConfigPrettier,
];

const typeChecked = tseslint.config(
	...base,

	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	typescript,
	disableTypeChecked,

	vitestPlugin,
	...testingLibraryPlugin,
	importPlugin,
	...importTypescriptPlugin,

	baseRules,
	importRules,
	reactRules,
	jsxa11yRules,
	jestRules,
	vitestRules,
	typescriptRules,

	eslintConfigPrettier,
);

const tabroom = [
	...typeChecked,
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{ ...tabroomRules },
];

export const configs = {
	recommended,
	react,
	typeChecked,
	tabroom,
};

export default recommended;
