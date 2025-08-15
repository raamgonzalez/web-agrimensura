module.exports = {
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'prettier'],
  plugins: ['astro'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
