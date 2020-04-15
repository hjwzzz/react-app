module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析现代 es 特性
    sourceType: "module", // 允许使用 imports
    ecmaFeatures: {
      jsx: true, // 允许解析 jsx
    },
  },
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "no-undef": "off",
    // 类名与接口名必须为驼峰式
    "@typescript-eslint/class-name-casing": "error",
  },
};
