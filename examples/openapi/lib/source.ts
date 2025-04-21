import { createMDXSource } from 'deck-mdx';
import { loader } from 'deck-core/source';
import { attachFile, createOpenAPI } from 'deck-openapi/server';
import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
});

export const openapi = createOpenAPI();
