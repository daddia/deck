import library from '@repo/eslint-config/library';

export default [
  {
    ignores: ['dist/', 'node_modules', '*.test.ts'],
  },
  ...library,
  {
    rules: {
      // typescript is CommonJS
      'import/no-named-as-default-member': 'off',
    },
  },
];
