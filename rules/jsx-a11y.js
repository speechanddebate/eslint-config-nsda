export default {
	rules: {
		// 'jsx-a11y/anchor-is-valid': 0,
		// 'jsx-a11y/click-events-have-key-events': 0,
		// 'jsx-a11y/control-has-associated-label': 0,

		// Regression in eslint-plugin-jsx-a11y v6.8.0
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/962
		'jsx-a11y/label-has-associated-control': 0,

		// 'jsx-a11y/label-has-associated-label': 0,
		// 'jsx-a11y/label-has-for': [2, { required: { every: ['id'] } }],

		// 'jsx-a11y/no-autofocus': 0,
		// 'jsx-a11y/no-noninteractive-element-interactions': 0,
		// 'jsx-a11y/no-static-element-interactions': 0,
	},
};
