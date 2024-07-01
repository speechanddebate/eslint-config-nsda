import tseslint from 'typescript-eslint';

export default {
	files: ['**/*.js', '**/*.jsx'],
	...tseslint.configs.disableTypeChecked,
};
