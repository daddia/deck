import library from '@repo/eslint-config/library';

export default [
  {
    ignores: ['dist', 'node_modules', '*.test.ts', 'eslint.config.mjs'],
  },
  ...library,
];
