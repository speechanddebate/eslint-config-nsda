export default {
	rules: {
		'import/extensions': [
			2,
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': [1, { devDependencies: true }],
		'import/no-mutable-exports': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'import/no-useless-path-segments': 1,
	},
};
