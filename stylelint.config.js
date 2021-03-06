module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  ignoreFiles: [
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'] },
    ],
    'no-descending-specificity': null,
    'no-empty-source': null,
  },
}
