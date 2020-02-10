module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'node': true,
        'mocha': true
    },
    'extends': [
        'prettier',
        'prettier/react',
        'airbnb',
        'plugin:react/recommended',
    ],
    'plugins': [
        'import',
        'prettier',
        'react',
    ],
    'rules': {
        'linebreak-style': 0,
        'react/sort-comp': 0,
        'max-classes-per-file': 0,
        'import/prefer-default-export': 0,
        'consistent-return': 0,
        'no-unused-expressions': 0,
        'jsx-props-no-spreading': 0,
        'class-methods-use-this': 0,
        'eol-last': 0,
        'react/prefer-stateless-function': 0,
        'react/static-property-placement': 0,
        'react/jsx-props-no-spreading': 0,
        'no-use-before-define': 0,
        'global-require': 0,
        'arrow-body-style': 0,
        'jsx-a11y/click-events-have-key-events': 0, // there are valid cases for this e.g. forms
        'jsx-a11y/interactive-supports-focus': 0, // there are valid cases for this e.g. forms
        'jsx-a11y/label-has-associated-control': 0, // rule seems buggy, doesn't understand some htmlFor cases
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/mouse-events-have-key-events': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0, // rule seems buggy, doesn't understand some htmlFor cases
        'max-len': 0,
        'no-multi-assign': 0,
        'no-nested-ternary': 0,
        'no-param-reassign': 0, //Disabled to it not looking for global components
        'no-plusplus': 0,
        'no-restricted-globals': 'off',
        'no-return-assign': 0,
        'camelcase': 0,
        'no-underscore-dangle': 0,
        'object-curly-newline': 0,
        'prefer-destructuring': 0,
        'quote-props': 0,
        'radix': 0,
        'indent': [
            "error", 4,
            {
                SwitchCase: 1,
                ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            },
        ],
        'react/jsx-indent': ["error", 4],
        'react/jsx-indent-props': ["error", 2],
        'react/jsx-max-props-per-line': [1,
            {
                'maximum': 3
            }
        ],
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-no-undef': 0,
        'react/jsx-pascal-case': 0,
        'react/jsx-tag-spacing': 0, //Disabled to it not looking for global components
        'react/no-access-state-in-setstate': 0,
        'react/no-array-index-key': 0, // there are valid cases for this where a key can not be determined
        'react/no-direct-mutation-state': 0,
        'react/no-find-dom-node': 0,
        'react/no-multi-comp': 0,
        'react/no-string-refs': 0, // todo: Disable for now, need to update probably for react 17
        'react/no-unescaped-entities': 0, // there are valid cases for this where a key can not be determined
        'react/require-default-props': 0,
    },
    'globals': {
        '_': true,
        '__DEV__': true,
        'API': true,
        'E2E': true,
        'Utils': true,
        'Constants': true,
        'Strings': true,
        'describe': true,
        'Format': true,
        'FormGroup': true,
        'ga': true,
        'Link': true,
        'openAlert': true,
        'openConfirm': true,
        'mixpanel': true,
        'Loader': true,
        'Project': true,
        'propTypes': true,
        'Radio': true,
        'React': true,
        'ReactDOM': true,
        'Row': true,
        'pact': true,
    }
};
