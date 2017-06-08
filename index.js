module.exports = {
  extends: [
    'eslint-config-airbnb',
    './node.js',
  ].map(require.resolve),

  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
  },

  globals: {
    __DEV__: false,
  },

  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      // Enable function comma-dangle because babel will drop it for us
      // <https://github.com/babel/babel/blob/master/packages/babel-plugin-syntax-trailing-function-commas>
      functions: 'always-multiline',
    }],
    // Disable it because it is really hard to obey.
    // <https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md>
    'jsx-a11y/no-static-element-interactions': 'off',
    // disallow console in browser
    'no-console': 'warn',
    // <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md>
    'react/forbid-prop-types': ['off', { forbid: ['any', 'array', 'object'] }],
    // Although this is a very helpful rule, but it has very many false positives,
    // so disable it now
    // <https://github.com/yannickcr/eslint-plugin-react/issues/976>
    'react/no-unused-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    // <https://github.com/airbnb/javascript/blob/master/react/README.md#ordering>
    // Just a loose order, because we use a lot [es7 public fields](https://github.com/tc39/proposal-class-public-fields).
    // And the usage of `this.x`(x is also a field) in es7 public fields
    // require `x` to be defined before it.
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
  },
}
