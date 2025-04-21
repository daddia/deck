import { docs } from '@/.source';
import { loader } from 'deck-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.todeckSource(),
});
