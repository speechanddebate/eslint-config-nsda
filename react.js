module.exports = {
    "extends": ["airbnb", "./index.js"],
    "plugins": [
        "import",
        "react",
        "jsx-a11y",
    ],
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-brace-presence": 0,
        "react/jsx-wrap-multilines": 0,
        "react/sort-comp": 0,
        "react/no-did-mount-set-state": 0,
        "react/no-unused-prop-types": 0,
        "react/prop-types": [2, { "skipUndeclared": true }],
        "react/forbid-prop-types": 0,
        "react/prefer-stateless-function": [1, {
            "ignorePureComponents": true
        }],
        "react/require-default-props": [2, {
            "ignoreFunctionalComponents": true
        }],
        "react/button-has-type": 1,
        "react/jsx-tag-spacing": 1,
        "react/jsx-curly-newline": [1, {
            "multiline": "require",
            "singleline": "consistent"
        }],
        "react/jsx-wrap-multilines": [1, {
            "declaration": "parens",
            "assignment": "parens",
            "return": "parens",
            "arrow": "parens",
            "condition": "ignore",
            "logical": "ignore",
            "prop": "ignore"
        }],
        "react/jsx-no-target-blank": [2, { "allowReferrer": true }],
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-autofocus": 0,
        "jsx-a11y/label-has-for": [2, {"required": {"every": ["id"]}}],

        // New rules that are to be kept off
        "react/destructuring-assignment": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-one-expression-per-line": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/control-has-associated-label": 0,

        // New rules to be kept off for an indertiminate amount of time 
        "react/no-deprecated": 0,
        "react/no-access-state-in-setstate": 0,
    }
};
