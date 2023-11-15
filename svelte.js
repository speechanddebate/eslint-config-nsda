module.exports = {
	"extends": [
		'plugin:svelte/base',
	],
    "plugins": [
        "import",
		"svelte"
    ],
    "env": {
        "browser": true,
        "node": true,
		"jest": true
    },
    "parserOptions": {
        "ecmaVersion": 2022,
    },
};
