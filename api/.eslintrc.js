module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        'comma-dangle': ['error', 'never'],
        'no-console': 'off',
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['user'] }]
    }
};