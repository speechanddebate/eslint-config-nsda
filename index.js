module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
    ],
    "env": {
        "node": true,
        "mocha": true,
    },
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1, "MemberExpression": "off", "flatTernaryExpressions": true, "ignoredNodes": ["ConditionalExpression"]}],
        "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "no-shadow": [2, {"builtinGlobals": false, "hoist": "functions", "allow": ["err", "error", "req", "res", "request", "response", "rows", "done", "next", "callback", "props"]}],
        "no-unused-vars": [2, {"argsIgnorePattern": "err|rows|req|res|next"}],
        "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
        "no-lonely-if": 0,
        "object-curly-newline": 0,
        "no-return-assign": [2, "except-parens"],
        "prefer-destructuring": 0,
        "no-console": 0,
        "func-names": 0,
        "function-paren-newline": 0,
        "no-param-reassign": 0,
        "no-buffer-constructor": 0,
        "radix": 0,
        "consistent-return": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "no-underscore-dangle": 0,
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore",
        }],
        "no-else-return": 1,
        "operator-linebreak": 0,
        "import/no-named-as-default": 0,
        "import/no-mutable-exports": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-useless-path-segments": 1,
        "import/no-named-as-default-member": 0,
    }
};
