import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'deck-mdx/config';
import { transformerTwoslash } from 'deck-twoslash';
import { createFileSystemTypesCache } from 'deck-twoslash/cache-fs';
import remarkMath from 'remark-math';
import { fileGenerator, remarkDocGen, remarkInstall } from 'deck-docgen';
import { remarkTypeScriptToJavaScript } from 'deck-docgen/remark-ts2js';
import rehypeKatex from 'rehype-katex';
import { z } from 'zod';
import { rehypeCodeDefaultOptions, remarkSteps } from 'deck-core/mdx-plugins';
import { remarkAutoTypeTable } from 'deck-typescript';

export const docs = defineDocs({
  docs: {
    async: true,
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      /**
       * API routes only
       */
      method: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  async: true,
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: ['ts', 'js', 'html', 'tsx', 'mdx'],
      inline: 'tailing-curly-colon',
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash({
          typesCache: createFileSystemTypesCache(),
        }),
        {
          name: 'transformers:remove-notation-escape',
          code(hast) {
            for (const line of hast.children) {
              if (line.type !== 'element') continue;

              const lastSpan = line.children.findLast(
                (v) => v.type === 'element',
              );

              const head = lastSpan?.children[0];
              if (head?.type !== 'text') return;

              head.value = head.value.replace(/\[\\!code/g, '[!code');
            }
          },
        },
      ],
    },
    remarkPlugins: [
      remarkSteps,
      remarkMath,
      remarkAutoTypeTable,
      [remarkInstall, { persist: { id: 'package-manager' } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
      remarkTypeScriptToJavaScript,
    ],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
