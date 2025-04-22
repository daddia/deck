import next from '@repo/eslint-config/next';

export default [
  {
    ignores: ['dist/', 'node_modules/', 'test/out/'],
  },
  ...next,
  {
    rules: {
      // commonjs compatibility
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      // some arrays will not be changed
      'react/no-array-index-key': 'off',
    },
  },
];
