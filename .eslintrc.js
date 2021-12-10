module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/react',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'import',
    ],
    rules: {
        'no-extra-parens': [
            'error',
            'all',
            {
                conditionalAssign: false,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: 'all',
                enforceForArrowConditionals: false,
                enforceForSequenceExpressions: false,
                enforceForNewInMemberExpressions: false,
                enforceForFunctionPrototypeMethods: false,
            },
        ],
        // https://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 'error',

        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': 'error',

        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: true,
            },
        ],

        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': [
            'error',
            {
                allowKeywords: true,
            },
        ],

        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'error',

        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            },
        ],

        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': [
            'error',
            {
                exceptions: [],
            },
        ],
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': [
            'error',
            {
                // These numbers are used in simple cases, we can exclude them
                ignore: [
                    // eslint-disable-next-line no-magic-numbers
                    -1,
                    0,
                    1,
                    2,
                    100,
                ],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false,
            },
        ],

        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 'error',

        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',

        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': [
            'error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Use Object.defineProperty instead',
            },
            {
                property: '__defineSetter__',
                message: 'Use Object.defineProperty instead',
            },
            {
                object: 'require',
                message: 'Please call require() directly.',
            },
        ],

        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // https://eslint.org/docs/rules/require-await
        'require-await': 'error',

        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 'error',

        // https://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // https://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        // https://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'error',

        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': 'warn',

        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 'off',

        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': 'off',
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [
            'error',
            'never',
            {
                always: [],
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        'react/jsx-child-element-spacing': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [
            'error',
            {
                selfClosing: 'tag-aligned',
                nonEmpty: 'tag-aligned',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                allowMultiline: true,
                spacing: {
                    objectLiterals: 'never',
                },
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': ['error', 'never'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
        'react/jsx-fragments': ['error', 'syntax'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': [
            'error',
            {
                eventHandlerPrefix: 'on',
                eventHandlerPropPrefix: 'on',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        // eslint-disable-next-line no-magic-numbers
        'react/jsx-indent': ['error', 2],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        // eslint-disable-next-line no-magic-numbers
        'react/jsx-indent-props': ['error', 2],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': [
            'error',
            {
                max: 20,
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 3,
                when: 'multiline',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        'react/jsx-no-comment-textnodes': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [
            'error',
            {
                ignoreCase: false,
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-target-blank': [
            'error',
            {
                enforceDynamicLinks: 'always',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': [
            'warn',
            {
                allow: 'single-child',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': [
            'warn',
            {
                props: 'never',
                children: 'never',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: false,
                ignore: [],
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
        'react/prefer-read-only-props': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        'react/jsx-curly-newline': [
            'error',
            {
                multiline: 'consistent',
                singleline: 'consistent',
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        'react/jsx-no-useless-fragment': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
        'react/jsx-no-script-url': 'error',

        // These rules don't add much value, are better covered by TypeScript and good definition files
        'react/no-direct-mutation-state': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx'],
            },
        ],

        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',

        // https://www.npmjs.com/package/eslint-plugin-react-hooks
        'react-hooks/exhaustive-deps': [
            'error',
            {
                additionalHooks: '(useCallbackRefEffect)',
            },
        ],

        'eol-last': ['error', 'always'],
        'no-mixed-spaces-and-tabs': 'error',

        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-double'],

        // https://eslint.org/docs/rules/quotes
        quotes: ['error', 'single'],

        // https://eslint.org/docs/rules/semi
        semi: ['warn', 'always'],

        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': ['error', 'always'],

        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['warn', 'always-multiline'],

        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // https://eslint.org/docs/rules/linebreak-style
        // 'linebreak-style': ['error', 'unix'],

        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['warn', 'starred-block'],

        // https://eslint.org/docs/rules/multiline-comment-style
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],

        // https://eslint.org/docs/rules/brace-style
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],

        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
                maxBOF: 0,
            },
        ],

        // https://eslint.org/docs/rules/indent
        indent: [
            'error',
            // eslint-disable-next-line no-magic-numbers
            2,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                offsetTernaryExpressions: false,
                ignoredNodes: [],
                ignoreComments: true,
            },
        ],

        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],

        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: {
                        after: true,
                    },
                    throw: {
                        after: true,
                    },
                    case: {
                        after: true,
                    },
                },
            },
        ],

        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],

        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__'],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: false,
            },
        ],
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: true,
            },
        ],

        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },

            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },

            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'import/order': ['error', {
            pathGroups: [
                {
                    'pattern': '~/**',
                    'group': 'external',
                },
            ],
            'newlines-between': 'always',
        }],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }]
    },
    settings: {
        react: {
            version: 'detect',
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx"],
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
};
