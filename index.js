import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

import ignores from './configs/ignores.js';
import globals from './configs/globals.js';
import airbnb from './configs/airbnb.js';
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

const recommended = [
	ignores,
	...airbnb,
	globals,
	eslint.configs.recommended,

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
	ignores,
	...airbnb,
	globals,
	eslint.configs.recommended,

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

const tabroom = [...typeChecked, { ...tabroomRules }];

export const configs = {
	recommended,
	typeChecked,
	tabroom,
};

export default recommended;
