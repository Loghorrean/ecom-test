module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "next",
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react-hooks/exhaustive-deps": "off",
        "no-use-before-define": "warn",
        "no-unused-vars": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-no-bind": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-ts-comment": "off",
    },
    ignorePatterns: ["eslintrc.js", "jest.config.js", "next.config.js", "src/**/__generated__/**/*"],
};
