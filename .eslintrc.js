module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        project: './tsconfig.strictNullChecks.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'strict-null-checks',
        'react-hooks',
        'ulbi-tv-plugin',
        'unused-imports',
    ],
    rules: {
        // "react/jsx-indent": [2, 4],
        // "react/jsx-indent-props": [2, 4],
        // indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        'ulbi-tv-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'ulbi-tv-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
        // 'unused-imports/no-unused-imports': 'error',
        // правило подсвечивает если нет перевода в i18next в тексте компонета
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'direction',
                    'as',
                    'border',
                    'align',
                    'justify',
                    'feature',
                    'color',
                    'variant',
                    'sizeInput',
                    'size',
                ],
            },
        ],
        'strict-null-checks/all': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
