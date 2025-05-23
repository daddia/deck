import next from '@repo/eslint-config/next';

export default [
  {
    ignores: ['dist/', 'node_modules/', '*.test.ts', '*.output.js'],
  },
  ...next,
  {
    rules: {
      'no-console': 'off',
      // handled by bundler
      'import/no-cycle': 'off',
    },
  },
];
