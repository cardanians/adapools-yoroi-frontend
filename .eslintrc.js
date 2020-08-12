module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
    jest: true,
    es2020: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 1,
    'react/sort-comp': 0,
    'react/jsx-fragments': 'off',
    'react/static-property-placement': ['warn', 'static public field'],
    'react/jsx-curly-newline': 'off',
    'class-methods-use-this': 0,
    'no-continue': 0,
    'no-duplicate-imports': 0,
    indent: 'off',
    'object-curly-spacing': 1,
    'spaced-comment': 1,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-multiple-empty-lines': 1,
    'import/imports-first': 1,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/media-has-caption': 0,
  },
  plugins: ['import', 'promise', 'react', 'flowtype'],
};