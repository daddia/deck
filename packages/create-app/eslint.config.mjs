import library from '@repo/eslint-config/next';

export default [
  {
    ignores: ['dist/', 'scripts/', 'node_modules/', 'template/'],
  },
  ...library,
  {
    rules: {
      'import/no-relative-packages': 'off',
    },
  },
];
