module.exports = {
    "plugins": [
        "jest",
    ],
    "extends": ["airbnb", "plugin:jest/recommended", "./index.js", "./react.js"],
    "rules": {
        "jest/prefer-expect-assertions": "off",
        "jest/expect-expect": "off"
    }
};
