import { createMDXSource } from 'deck-mdx';
import { loader } from 'deck-core/source';
import { i18n } from '@/lib/i18n';
import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  i18n,
});
