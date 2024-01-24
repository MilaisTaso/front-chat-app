module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    // eslint-config-airbnb（eslint)
    'spaced-comment': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'arrow-body-style': 'off',
    // eslint-config-airbnb（eslint-plugin-import)
    'import/prefer-default-export': 'off',
    // eslint-config-airbnb（eslint-plugin-react）
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    // eslint-config-airbnb（eslint-plugin-react-hook）
    'react-hooks/exhaustive-deps': 'warn',
    // eslint-config-airbnb-typescript（eslint-typescript）
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    // eslint-plugin-react-refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // dependencies内のパッケージについてもエラーが出てしまう 原因調査中
    'import/no-extraneous-dependencies': 'warn',
    // airbnb import/extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      },
    ],
  },
};