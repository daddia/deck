import { createMetadataImage } from 'deck-core/server';
import { source } from '@/lib/source';

export const metadataImage = createMetadataImage({
  source,
});
