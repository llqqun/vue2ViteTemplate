/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    complexity: ['error', 15],
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    "prettier/prettier": 0
  },
};
