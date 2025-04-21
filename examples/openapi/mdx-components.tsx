import defaultMdxComponents from 'deck-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { openapi } from '@/lib/source';
import { APIPage } from 'deck-openapi/ui';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
    ...components,
  };
}
