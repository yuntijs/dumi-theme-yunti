const config = require('@yuntijs/lint').stylelint;

module.exports = {
  ...config,
  rules: {
    'custom-property-pattern': null,
    'selector-pseudo-element-no-unknown': null,
  },
};
