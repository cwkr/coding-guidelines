module.exports = {
    "defaultSeverity": "warning",
    "rules": {
        "color-no-invalid-hex": true,
        "font-family-no-duplicate-names": true,
        "function-calc-no-invalid": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "unit-no-unknown": true,
        "property-no-unknown": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": [
          true,
          {ignorePseudoElements: ["ng-deep"]}
        ],
        "selector-type-no-unknown": [
          true,
          {ignore: ["custom-elements"]}
        ],
        "no-extra-semicolons": true,
        "length-zero-no-unit": true,
        "shorthand-property-no-redundant-values": true,
        "color-hex-case": "lower",
        "function-name-case": "lower",
        "function-url-quotes": "always",
        "number-leading-zero": "never",
        "unit-case": "lower",
        //"value-keyword-case": "lower",
        "property-case": "lower",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-element-case": "lower",
        "selector-type-case": "lower",
        "media-feature-name-case": "lower",
        "at-rule-name-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "linebreaks": "unix",
        "no-missing-end-of-source-newline": true,
        "unicode-bom": "never"
      }
};
