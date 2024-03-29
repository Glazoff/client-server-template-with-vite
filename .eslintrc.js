module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  "ignorePatterns": ["./packages/server/*", "./packages/client/styles",  "./packages/client/ssr-dist/client.cjs",  "**.html", "*.json", "*.config.ts", "*.config.js", "dist"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
  },
}
