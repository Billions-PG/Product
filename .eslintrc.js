module.exports = {
    "env": {
        "browser": true,
        "commonjs":true,
        "es6":true,
        "node": true,
        "jest/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    }
};
