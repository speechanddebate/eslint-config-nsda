export default {
	rules: {
		// 'react/button-has-type': 1,
		// 'react/destructuring-assignment': 0,
		// 'react/forbid-prop-types': 0,
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function' },
		],
		// 'react/no-access-state-in-setstate': 0,
		// 'react/no-deprecated': 0,
		// 'react/no-did-mount-set-state': 0,
		// 'react/no-unstable-nested-components': [2, { allowAsProps: true }],
		// 'react/no-unused-prop-types': 0,
		// 'react/prefer-stateless-function': [
		//     1,
		//     {
		//         ignorePureComponents: true,
		//     },
		// ],
		// 'react/prop-types': [2, { skipUndeclared: true }],
		'react/react-in-jsx-scope': 0,
		'react/require-default-props': [
			2,
			{
				ignoreFunctionalComponents: true,
			},
		],
		// 'react/sort-comp': 0,

		// 'react/jsx-curly-brace-presence': 0,
		// 'react/jsx-curly-newline': [
		//     1,
		//     {
		//         multiline: 'require',
		//         singleline: 'consistent',
		//     },
		// ],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		// 'react/jsx-indent': [2, 4],
		// 'react/jsx-indent-props': [2, 4],
		// 'react/jsx-no-target-blank': [2, { allowReferrer: true }],
		// 'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
		// 'react/jsx-tag-spacing': 1,
		// 'react/jsx-wrap-multilines': [
		//     1,
		//     {
		//         declaration: 'parens',
		//         assignment: 'parens',
		//         return: 'parens',
		//         arrow: 'parens',
		//         condition: 'ignore',
		//         logical: 'ignore',
		//         prop: 'ignore',
		//     },
		// ],
	},
};
