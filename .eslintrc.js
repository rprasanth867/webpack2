module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: 'warn',
    quotes: ['error', 'single'],
    'no-await-in-loop': 'error',
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': 2
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
