export default {
    "plugins": [
        "jest",
    ],
    "files": ['**/*.test.js'],
    "extends": ["airbnb", "plugin:jest/recommended", "./index.js", "./react.js"],
    "rules": {
        "jest/prefer-expect-assertions": "off",
        "jest/expect-expect": "off"
    }
};
