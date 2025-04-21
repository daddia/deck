import { writeFileSync } from 'node:fs';
import { defineConfig } from 'tsup';
import contentCollectionsPkg from '../content-collections/package.json';
import corePkg from '../deck-core/package.json';
import mdxRemotePkg from '../mdx-remote/package.json';
import mdxPkg from '../deck-mdx/package.json';
import uiPkg from '../deck-ui/package.json';

const versions = {
  'deck-core': corePkg.version,
  'deck-ui': uiPkg.version,
  'deck-mdx': mdxPkg.version,
  '@deck/mdx-remote': mdxRemotePkg.version,
  '@deck/content-collections': contentCollectionsPkg.version,
};

writeFileSync(
  './src/versions.js',
  `export const versions = ${JSON.stringify(versions)}`,
);

console.log('Create-deck-App: versions.json updated');

export default defineConfig({
  entry: ['./src/index.ts', './src/create-app.ts'],
  format: 'esm',
  target: 'node18',
  dts: true,
});
