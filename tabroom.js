module.exports = {
    "extends": ["airbnb", "./index.js", "./jest.js", "./svelte.js"],
    "rules": {
        "no-tabs"                     : 0,
		"no-use-before-define"        : 0,
        "key-spacing"                 : 0,
        "comma-spacing"               : 0,
        "implicit-arrow-linebreak"    : 0,
        "space-before-function-paren" : 0,
		"no-await-in-loop"            : 0,
        "space-in-parens"             : 0,
        "import/no-dynamic-require"   : 0,
        "global-require"              : 0,
        "padded-blocks"               : 0,
		"no-restricted-syntax"        : ["error", "LabeledStatement", "WithStatement"],
        "no-plusplus"                 : 0,
        "indent": [
          "error",
          "tab"
        ],
        "no-multi-spaces": [
          0,
          {
            "exceptions": {
              "Property"           : true,
              "VariableDeclarator" : true
            }
          }
        ],
    }
};
