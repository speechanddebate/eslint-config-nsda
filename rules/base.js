export default {
	rules: {
		'arrow-body-style': 0,
		// 'arrow-parens': 0,
		// camelcase: [
		//     2,
		//     {
		//         properties: 'never',
		//         allow: [
		//             'UNSAFE_componentWillMount',
		//             'UNSAFE_componentWillReceiveProps',
		//         ],
		//     },
		// ],
		// 'class-methods-use-this': 0,
		// 'comma-dangle': [
		//     'error',
		//     {
		//         arrays: 'always-multiline',
		//         objects: 'always-multiline',
		//         imports: 'always-multiline',
		//         exports: 'always-multiline',
		//         functions: 'ignore',
		//     },
		// ],
		// 'consistent-return': 0,
		// 'default-param-last': 0,
		// 'func-names': 0,
		// 'function-paren-newline': 0,
		// indent: [
		//     2,
		//     4,
		//     {
		//         SwitchCase: 1,
		//         MemberExpression: 'off',
		//         flatTernaryExpressions: true,
		//         ignoredNodes: ['ConditionalExpression'],
		//     },
		// ],
		// 'max-len': [
		//     'error',
		//     100,
		//     2,
		//     {
		//         ignoreUrls: true,
		//         ignoreComments: true,
		//         ignoreRegExpLiterals: true,
		//         ignoreStrings: true,
		//         ignoreTemplateLiterals: true,
		//     },
		// ],
		// 'no-buffer-constructor': 0,
		// 'no-console': 0,
		// 'no-else-return': 1,
		// 'no-lonely-if': 0,
		'no-param-reassign': [2, { props: false }],
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		// 'no-return-assign': [2, 'except-parens'],
		'no-shadow': [
			2,
			{
				builtinGlobals: false,
				hoist: 'functions',
				allow: [
					'err',
					'error',
					'req',
					'res',
					'request',
					'response',
					'rows',
					'done',
					'next',
					'callback',
					'props',
				],
			},
		],
		// 'no-underscore-dangle': 0,
		'no-unused-vars': [2, { argsIgnorePattern: 'err|rows|req|res|next|_' }],
		// 'object-curly-newline': 0,
		// 'operator-linebreak': 0,
		// 'prefer-destructuring': 0,
		// 'prefer-regex-literals': 0,
		// quotes: [
		//     2,
		//     'single',
		//     { avoidEscape: true, allowTemplateLiterals: true },
		// ],
		radix: [1, 'as-needed'],
	},
};
