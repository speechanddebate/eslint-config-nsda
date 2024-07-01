export default {
	rules: {
		'comma-spacing': 0,
		'global-require': 0,
		'implicit-arrow-linebreak': 0,
		indent: ['error', 'tab'],
		'key-spacing': 0,
		'no-multi-spaces': [
			0,
			{
				exceptions: {
					Property: true,
					VariableDeclarator: true,
				},
			},
		],
		'no-plusplus': 0,
		'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
		'no-tabs': 0,
		'no-use-before-define': 0,
		'padded-blocks': 0,
		'space-before-function-paren': 0,
		'space-in-parens': 0,

		'import/no-dynamic-require': 0,

		'react/jsx-equals-spacing': 0,
		'react/jsx-indent': [
			0,
			'tab',
			{
				checkAttributes: false,
				indentLogicalExpressions: true,
			},
		],
		'react/jsx-indent-props': 0,
		'react/no-unknown-property': 0,

		'jsx-a11y/anchor-has-content': 0,
	},
};
