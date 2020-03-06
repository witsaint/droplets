module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'guard-for-in': 'off',
    'prefer-destructuring': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'import/extensions': 'off',
    'linebreak-style':'off',
    'max-len': 'off',
    'quotes':'off',
    'eqeqeq':'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-bitwise': 'off',
    'no-empty': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'func-names':'off',
    'no-restricted-syntax': 'off',
    'one-var':'off',
    'no-prototype-builtins':'off',
    'vue/require-prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-return-assign': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['off', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
