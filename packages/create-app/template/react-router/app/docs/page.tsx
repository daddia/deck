import type { Route } from './+types/page';
import { DocsLayout } from 'deck-ui/layouts/docs';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'deck-ui/page';
import { source } from '@/source';
import defaultMdxComponents from 'deck-ui/mdx';
import { executeMdxSync } from '@deck/mdx-remote/client';
import type { PageTree } from 'deck-core/server';
import { createCompiler } from '@deck/mdx-remote';
import * as path from 'node:path';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}
const compiler = createCompiler({
  development: false,
});

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'].split('/').filter((v) => v.length > 0);
  const page = source.getPage(slugs);
  if (!page) throw new Error('Not found');

  const compiled = await compiler.compileFile({
    path: path.resolve('content/docs', page.file.path),
    value: page.data.content,
  });

  return {
    page,
    compiled: compiled.toString(),
    tree: source.pageTree,
  };
}

export default function Page(props: Route.ComponentProps) {
  const { page, compiled, tree } = props.loaderData;
  const { default: Mdx, toc } = executeMdxSync(compiled);

  return (
    <DocsLayout
      nav={{
        title: 'React Router',
      }}
      tree={tree as PageTree.Root}
    >
      <DocsPage toc={toc}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <Mdx components={defaultMdxComponents} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
