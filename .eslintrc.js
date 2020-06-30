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
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',


    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'camelcase': 'off',
    // 'no-unused-vars': ["error", { "args": "none", "caughtErrors": "none" }],
    // 'no-unused-vars': process.env.NODE_ENV === 'production' ? ["error", { "args": "none", "caughtErrors": "none" }] : 'off',
    // 'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    'no-unused-vars': 'off',
    /** new **/
    'vue/no-unused-vars': 'off',
    'dot-notation': 'off',
    'vue/no-unused-components': 'off',
    'quote-props': 'off',
    'prefer-const': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'array-bracket-spacing': 'off',
    'no-prototype-builtins': 'off'
  }
}
