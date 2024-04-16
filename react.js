export default {
    rules: {
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        // 'react/jsx-curly-brace-presence': 0,
        // 'react/sort-comp': 0,
        // 'react/no-did-mount-set-state': 0,
        // 'react/no-unused-prop-types': 0,
        // 'react/prop-types': [2, { skipUndeclared: true }],
        // 'react/forbid-prop-types': 0,
        // 'react/prefer-stateless-function': [
        //     1,
        //     {
        //         ignorePureComponents: true,
        //     },
        // ],
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': [
            2,
            {
                ignoreFunctionalComponents: true,
            },
        ],
        // 'react/button-has-type': 1,
        // 'react/jsx-tag-spacing': 1,
        // 'react/jsx-curly-newline': [
        //     1,
        //     {
        //         multiline: 'require',
        //         singleline: 'consistent',
        //     },
        // ],
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
        // 'react/jsx-no-target-blank': [2, { allowReferrer: true }],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        // 'react/no-unstable-nested-components': [2, { allowAsProps: true }],
        // 'react/destructuring-assignment': 0,
        // 'react/jsx-props-no-spreading': 0,
        // 'react/jsx-one-expression-per-line': 0,
        // 'react/no-deprecated': 0,
        // 'react/no-access-state-in-setstate': 0,

        // 'jsx-a11y/no-static-element-interactions': 0,
        // 'jsx-a11y/no-noninteractive-element-interactions': 0,
        // 'jsx-a11y/anchor-is-valid': 0,
        // 'jsx-a11y/click-events-have-key-events': 0,
        // 'jsx-a11y/no-autofocus': 0,
        // 'jsx-a11y/label-has-for': [2, { required: { every: ['id'] } }],
        // 'jsx-a11y/control-has-associated-label': 0,

        // Regression in eslint-plugin-jsx-a11y v6.8.0
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/962
        'jsx-a11y/label-has-associated-control': 0,
    },
};
