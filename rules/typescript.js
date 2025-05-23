export default {
	// Disable eslint rules that conflict with typescript extension rules
	files: ['**/*.ts', '**/*.tsx'],
	rules: {
		'block-spacing': 0,
		'brace-style': 0,
		'class-methods-use-this': 0,
		'comma-dangle': 0,
		'comma-spacing': 0,
		'consistent-return': 0,
		'default-param-last': 0,
		'dot-notation': 0,
		'func-call-spacing': 0,
		indent: 0,
		'init-declarations': 0,
		'key-spacing': 0,
		'keyword-spacing': 0,
		'lines-around-comment': 0,
		'lines-between-class-members': 0,
		'max-params': 0,
		'no-array-constructor': 0,
		'no-dupe-class-members': 0,
		'no-empt-function': 0,
		'no-extra-parens': 0,
		'no-extra-semi': 0,
		'no-implied-eval': 0,
		'no-invalid-this': 0,
		'no-loop-func': 0,
		'no-loss-of-precision': 0,
		'no-magic-numbers': 0,
		'no-redeclare': 0,
		'no-restricted-imports': 0,
		'no-throw-literal': 0,
		'no-unused-expressions': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'no-useless-constructor': 0,
		'object-curly-spacing': 0,
		'padding-line-between-statements': 0,
		'prefer-destructing': 0,
		'prefer-promise-reject-errors': 0,
		quotes: 0,
		'require-await': 0,
		'return-await': 0,
		semi: 0,
		'space-before-blocks': 0,
		'space-before-function-paren': 0,
		'space-infix-ops': 0,

		// Typescript specific rules
		'@typescript-eslint/no-floating-promises': [1, { ignoreVoid: true }],
		'no-void': [1, { allowAsStatement: true }],
		'@typescript-eslint/consistent-type-imports': [
			1,
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/prefer-nullish-coalescing': [0],
	},
};
