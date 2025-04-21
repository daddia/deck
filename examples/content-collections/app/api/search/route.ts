import { source } from '@/lib/source';
import { createFromSource } from 'deck-core/search/server';

export const { GET } = createFromSource(source);
