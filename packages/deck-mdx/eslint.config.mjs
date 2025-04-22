import library from '@repo/eslint-config/library';

export default [
  {
    ignores: [
      'dist/',
      'node_modules/',
      'test/**/*.output.js',
      'bin.js',
      'loader-mdx.cjs',
    ],
  },
  ...library,
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
