const config = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "globals": {}, // added programatically later
  "rules": {
    "import/no-unresolved": [2, { ignore: ['meteor/*'] }], // ignore meteor imports
    "no-unused-expressions": 0, // allows to do x && x();
    "no-underscore-dangle": 0, // allows x._bla
    "consistent-return": 0, // allow () => { if (x) { return; } ... }
    "no-empty": 0, // allow {} // used for error catching like try {...} catch (e) {}
    "react/wrap-multilines": 0, // allow normal html syntax
    "jsx-a11y/img-has-alt": 0, // allow no alt attribute on images
    "global-require": 0,
    "no-param-reassign": 1, // allow to change input parameters

    "react/jsx-no-bind": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-curly-spacing": [2, "never"],
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "brace-style": [0, "1tbs"]
  },
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  globals: {
    Meteor: true,
    FlowRouter: true,
  },
};

module.exports = config;

