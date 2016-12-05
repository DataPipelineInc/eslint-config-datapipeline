module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Using return statement will be more readable when body is verly large
    'arrow-body-style': 'off',
    // Disabled because it is silly sometimes
    'class-methods-use-this': 'off',
    // Allow using devDependencies because it is hard to tell what files
    // are used only for dev.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false }],
    'import/no-dynamic-require': 'off',
    // Sometime we just want to write a loader for one-place usage.
    // It is annoying to config in webpack config file
    'import/no-webpack-loader-syntax': 'off',
    // We didn't prefer default export
    'import/prefer-default-export': 'off',
    'no-mixed-operators': 'off',
    // Nested ternay isn't so unreadable
    'no-nested-ternary': 'off',
    semi: ['error', 'never'],
  },
}
