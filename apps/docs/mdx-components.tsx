import defaultMdxComponents from 'deck-ui/mdx';
import { File, Files, Folder } from 'deck-ui/components/files';
import { Tab, Tabs } from 'deck-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from 'deck-ui/components/accordion';
import * as icons from 'lucide-react';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    File,
    Files,
    Folder,
    Tabs,
    Tab,
    Accordion,
    Accordions,
    ...components,
  };
}
