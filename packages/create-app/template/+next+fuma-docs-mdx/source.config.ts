import { defineDocs, defineConfig } from 'deck-mdx/config';

// Options: https://deck.daddia.com/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
