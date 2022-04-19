module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-lines-per-function': 'off'
  },
  overrides: [
    {
      files: [
        '**/*.helpers.ts',
        '**/*.helpers.tsx',
        'src/helpers/**',
        'src/redux/**'
      ],
      rules: {
        'max-lines-per-function': ['error', 150]
      }
    }
  ]
}
