import library from '@repo/eslint-config/library';

export default [
  ...library,
  {
    ignores: ['dist/', 'node_modules/', '*.test.ts'],
  },
];
