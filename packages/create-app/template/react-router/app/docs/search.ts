import type { Route } from './+types/search';
import { createSearchAPI } from 'deck-core/search/server';
import { source } from '@/source';
import { structure } from 'deck-core/mdx-plugins';

const server = createSearchAPI('advanced', {
  indexes: source.getPages().map((page) => ({
    id: page.url,
    url: page.url,
    title: page.data.title ?? '',
    description: page.data.description,
    structuredData: structure(page.data.content),
  })),
});

export async function loader({ request }: Route.LoaderArgs) {
  return server.GET(request);
}
