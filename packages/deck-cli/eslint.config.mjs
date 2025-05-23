import library from '@repo/eslint-config/library';

export default [
  {
    ignores: ['dist', 'node_modules', 'test/repo', 'test/repo-2'],
  },
  ...library,
  {
    rules: {
      'import/no-relative-packages': 'off',
    },
  },
];
