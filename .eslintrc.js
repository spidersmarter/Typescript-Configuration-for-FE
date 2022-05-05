module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-case-declarations': 'off',
    'react/no-danger': 'off', // it's self explainatory that no-danger should be used sparingly
    'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
    'react/prop-types': 'off', // as long as TS strict mode is off this is not required
    'no-console': 'off', // no console statements allowed
    'prettier/prettier': 'off', // don't show prettier errors as it will be fixed when saved anyway
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': [
      'off',
      {
        ignoreRestArgs: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^draft'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
