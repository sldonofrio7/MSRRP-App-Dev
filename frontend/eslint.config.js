const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const baseConfig = require('../eslint.config.mjs').default;

module.exports = defineConfig([
  ...baseConfig,
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
