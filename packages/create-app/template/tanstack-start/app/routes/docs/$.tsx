import { createFileRoute, notFound } from '@tanstack/react-router';
import { DocsLayout } from 'deck-ui/layouts/docs';
import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'deck-ui/page';
import { executeMdxSync } from '@deck/mdx-remote/client';
import defaultMdxComponents from 'deck-ui/mdx';
import { createServerFn } from '@tanstack/react-start';
import type { PageTree } from 'deck-core/server';
import { createCompiler } from '@deck/mdx-remote';
import * as path from 'node:path';

export const Route = createFileRoute('/docs/$')({
  component: Page,
  async loader({ params }) {
    const slugs = (params._splat ?? '').split('/');

    return loader({ data: slugs });
  },
});

const compiler = createCompiler({
  development: false,
});

const loader = createServerFn({
  method: 'GET',
})
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    if (!page) throw notFound();

    const { content, ...rest } = page.data;
    const compiled = await compiler.compileFile({
      path: path.resolve('content/docs', page.file.path),
      value: content,
    });

    return {
      tree: source.pageTree as object,
      ...rest,
      compiled: compiled.toString(),
    };
  });

function Page() {
  const { tree, compiled, ...data } = Route.useLoaderData();
  const { toc, default: MdxContent } = executeMdxSync(compiled);

  return (
    <DocsLayout
      nav={{
        title: 'Tanstack Start',
      }}
      tree={tree as PageTree.Root}
    >
      <DocsPage toc={toc}>
        <DocsTitle>{data.title}</DocsTitle>
        <DocsDescription>{data.title}</DocsDescription>
        <DocsBody>
          <MdxContent components={defaultMdxComponents} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
