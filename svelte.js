module.exports = {
    "extends": ["airbnb", "plugin:testing-library/svelte", "./index.js"],
    "plugins": [
        "import",
        "svelte",
        "testing-library",
    ],
    "env": {
        "browser": true,
        "node": true,
        "vite": true
    },
    "parserOptions": {
        "ecmaVersion": 2022,
    },
};
