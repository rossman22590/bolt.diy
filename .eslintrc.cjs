module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Turn off linebreak-style rule to avoid conflicts
    'linebreak-style': 'off',
    // Make Prettier warnings instead of errors and use auto line endings
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
