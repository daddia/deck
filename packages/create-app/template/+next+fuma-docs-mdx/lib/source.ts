import { docs } from '@/.source';
import { loader } from 'deck-core/source';

// See https://deck.daddia.com/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.todeckSource(),
});
