module.exports = {
    configs: {
        recommended: {
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 2020
            },
            "plugins": [
                "@typescript-eslint"
            ],
            "rules": {
                "@typescript-eslint/adjacent-overload-signatures": [
                    "warn"
                ],
                "@typescript-eslint/ban-ts-comment": [
                    "warn"
                ],
                "@typescript-eslint/ban-types": [
                    "warn"
                ],
                "@typescript-eslint/no-array-constructor": [
                    "warn"
                ],
                "@typescript-eslint/no-empty-function": [
                    "warn"
                ],
                "@typescript-eslint/no-empty-interface": [
                    "warn"
                ],
                "@typescript-eslint/naming-convention": [
                    "warn",
                    {
                        "selector": "variableLike",
                        "format": [
                            "camelCase"
                        ]
                    },
                    {
                        "selector": "memberLike",
                        "format": [
                            "camelCase"
                        ]
                    },
                    {
                        "selector": "typeLike",
                        "format": [
                            "PascalCase"
                        ]
                    }
                ],
                "@typescript-eslint/quotes": [
                    "warn",
                    "single"
                ],
                "@typescript-eslint/semi": [
                    "warn",
                    "always"
                ],
                "@typescript-eslint/explicit-module-boundary-types": [
                    "warn"
                ],
                "@typescript-eslint/member-ordering": [
                    "warn",
                    {
                        "default": [
                            "field",
                            "method"
                        ]
                    }
                ],
                "@typescript-eslint/no-explicit-any": [
                    "warn"
                ],
                "@typescript-eslint/no-extra-non-null-assertion": [
                    "warn"
                ],
                "@typescript-eslint/no-extra-semi": [
                    "warn"
                ],
                "@typescript-eslint/no-inferrable-types": [
                    "warn"
                ],
                "@typescript-eslint/no-misused-new": [
                    "warn"
                ],
                "@typescript-eslint/no-namespace": [
                    "warn"
                ],
                "@typescript-eslint/no-non-null-asserted-optional-chain": [
                    "warn"
                ],
                "@typescript-eslint/no-non-null-assertion": [
                    "warn"
                ],
                "@typescript-eslint/no-this-alias": [
                    "warn"
                ],
                "@typescript-eslint/no-unused-vars": [
                    "warn"
                ],
                "@typescript-eslint/no-var-requires": [
                    "warn"
                ],
                "@typescript-eslint/prefer-as-const": [
                    "warn"
                ],
                "@typescript-eslint/prefer-namespace-keyword": [
                    "warn"
                ],
                "@typescript-eslint/triple-slash-reference": [
                    "warn"
                ],
                "no-var": [
                    "warn"
                ],
                "prefer-const": [
                    "warn"
                ],
                "prefer-rest-params": [
                    "warn"
                ],
                "prefer-spread": [
                    "warn"
                ],
                "for-direction": [
                    "warn"
                ],
                "no-async-promise-executor": [
                    "warn"
                ],
                "no-case-declarations": [
                    "warn"
                ],
                "no-class-assign": [
                    "warn"
                ],
                "no-compare-neg-zero": [
                    "warn"
                ],
                "no-cond-assign": [
                    "warn"
                ],
                "no-constant-condition": [
                    "warn"
                ],
                "no-control-regex": [
                    "warn"
                ],
                "no-debugger": [
                    "warn"
                ],
                "no-delete-var": [
                    "warn"
                ],
                "no-dupe-else-if": [
                    "warn"
                ],
                "no-duplicate-case": [
                    "warn"
                ],
                "no-empty": [
                    "warn"
                ],
                "no-empty-character-class": [
                    "warn"
                ],
                "no-empty-pattern": [
                    "warn"
                ],
                "no-ex-assign": [
                    "warn"
                ],
                "no-extra-boolean-cast": [
                    "warn"
                ],
                "no-fallthrough": [
                    "warn"
                ],
                "no-global-assign": [
                    "warn"
                ],
                "no-inner-declarations": [
                    "warn"
                ],
                "no-invalid-regexp": [
                    "warn"
                ],
                "no-irregular-whitespace": [
                    "warn"
                ],
                "no-misleading-character-class": [
                    "warn"
                ],
                "no-mixed-spaces-and-tabs": [
                    "warn"
                ],
                "no-octal": [
                    "warn"
                ],
                "no-prototype-builtins": [
                    "warn"
                ],
                "no-regex-spaces": [
                    "warn"
                ],
                "no-self-assign": [
                    "warn"
                ],
                "no-shadow-restricted-names": [
                    "warn"
                ],
                "no-sparse-arrays": [
                    "warn"
                ],
                "no-unexpected-multiline": [
                    "warn"
                ],
                "no-unsafe-finally": [
                    "warn"
                ],
                "no-unused-labels": [
                    "warn"
                ],
                "no-useless-catch": [
                    "warn"
                ],
                "no-useless-escape": [
                    "warn"
                ],
                "no-with": [
                    "warn"
                ],
                "require-yield": [
                    "warn"
                ],
                "use-isnan": [
                    "warn"
                ]
            }
        }
    }
};
