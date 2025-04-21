import { allDocs, allMetas } from 'content-collections';
import { loader } from 'deck-core/source';
import { createMDXSource } from '@deck/content-collections';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(allDocs, allMetas),
});
