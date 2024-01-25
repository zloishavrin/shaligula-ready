module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
        quotes: ["warn", "double"],
        indent: ["warn", 4],
        "object-curly-spacing": ["error", "always"],
        "no-console": "warn",
        "no-unused-vars": "warn",
    },
};
  