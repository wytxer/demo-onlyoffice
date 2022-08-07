module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'no-trailing-spaces': 'warn',
    'import/newline-after-import': 'error',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-multi-spaces': 'warn'
  }
}
