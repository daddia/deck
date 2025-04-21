import { defineConfig } from 'tsup';

export default defineConfig({
  external: ['server-only', 'deck-ui', 'deck-core', 'react'],
  dts: true,
  target: 'es6',
  format: 'esm',
  entry: ['src/index.ts', 'src/ui/index.ts'],
});
