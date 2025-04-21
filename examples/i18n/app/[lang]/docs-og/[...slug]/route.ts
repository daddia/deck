import { metadataImage } from '@/lib/metadata';
import { generateOGImage } from 'deck-ui/og';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
  });
});
