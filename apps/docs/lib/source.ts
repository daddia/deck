import { createMDXSource } from 'deck-mdx';
import type { InferMetaType, InferPageType } from 'deck-core/source';
import { loader } from 'deck-core/source';
import { icons } from 'lucide-react';
import { attachFile, createOpenAPI } from 'deck-openapi/server';
import { createElement } from 'react';
import { docs, blog as blogPosts } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  source: docs.todeckSource(),
  pageTree: {
    attachFile,
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});

export const openapi = createOpenAPI({
  proxyUrl: '/api/proxy',
  shikiOptions: {
    themes: {
      dark: 'vesper',
      light: 'vitesse-light',
    },
  },
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
