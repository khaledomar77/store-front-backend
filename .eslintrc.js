module.exports = {
     env: {
          es2021: true,
     },
     extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
     overrides: [],
     parser: '@typescript-eslint/parser',
     parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
     },
     plugins: ['@typescript-eslint'],
     rules: {
          "semi": ["error", "always"],
        "quotes": 0,
        "no-console": 0
     },
}