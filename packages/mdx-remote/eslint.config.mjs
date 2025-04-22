import library from '@repo/eslint-config/library';

export default [
  {
    ignores: ['dist/', 'node_modules/', 'test/**/*'],
  },
  ...library,
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
];
