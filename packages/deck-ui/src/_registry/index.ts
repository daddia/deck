import { fileURLToPath } from 'node:url';
import type { Registry } from '@deck/cli/build';
import * as path from 'node:path';

const importMap = {
  'contexts/sidebar.tsx': 'deck-ui/contexts/sidebar',
  'contexts/search.tsx': 'deck-ui/contexts/search',
  'contexts/tree.tsx': 'deck-ui/contexts/tree',
  'contexts/i18n.tsx': 'deck-ui/contexts/i18n',
  'contexts/layout.tsx': 'deck-ui/contexts/layout',
  'utils/get-sidebar-tabs.tsx': 'deck-ui/utils/get-sidebar-tabs',
  'utils/use-copy-button.ts': 'deck-ui/utils/use-copy-button',
};

const srcDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../');

export const registry: Registry = {
  dir: srcDir,
  rootDir: '../',
  namespaces: {
    components: 'components',
    utils: 'lib',
    '': 'components',
  },
  components: [
    {
      name: 'layouts/docs-min',
      description: 'Replace Docs Layout (Minimal)',
      files: [
        {
          in: '_registry/layout/docs-min.tsx',
          out: 'components:layouts/docs.tsx',
        },
        {
          in: '_registry/layout/page-min.tsx',
          out: 'components:layouts/page.tsx',
        },
      ],
      mapImportPath: importMap,
      unlisted: true,
    },
    {
      name: 'layouts/docs',
      files: ['layouts/docs.tsx'],
      unlisted: true,
      mapImportPath: importMap,
    },
    {
      name: 'layouts/notebook',
      files: ['layouts/notebook.tsx'],
      unlisted: true,
      mapImportPath: importMap,
    },
    {
      name: 'layouts/page',
      files: [
        {
          in: 'page.tsx',
          out: 'components:layouts/page.tsx',
        },
      ],
      mapImportPath: importMap,
      unlisted: true,
    },
    {
      name: 'layouts/home',
      files: ['layouts/home.tsx'],
      mapImportPath: importMap,
      unlisted: true,
    },
    {
      name: 'layout/root-toggle',
      description: 'the UI of Sidebar Tabs',
      files: ['components/layout/root-toggle.tsx'],
      mapImportPath: importMap,
    },
    {
      name: 'layout/language-toggle',
      description: 'Language Select',
      files: ['components/layout/language-toggle.tsx'],
      mapImportPath: importMap,
    },
    { name: 'accordion', files: ['components/accordion.tsx'] },
    {
      name: 'github-info',
      files: ['components/github-info.tsx'],
      description: 'A card to display GitHub repo info',
    },
    { name: 'banner', files: ['components/banner.tsx'] },
    { name: 'callout', files: ['components/callout.tsx'] },
    { name: 'card', files: ['components/card.tsx'] },
    { name: 'codeblock', files: ['components/codeblock.tsx'] },
    { name: 'files', files: ['components/files.tsx'] },
    { name: 'heading', files: ['components/heading.tsx'] },
    {
      name: 'image-zoom',
      description: 'Zoomable Image',
      files: ['components/image-zoom.tsx', 'components/image-zoom.css'],
    },
    { name: 'inline-toc', files: ['components/inline-toc.tsx'] },
    { name: 'steps', files: ['components/steps.tsx'] },
    { name: 'tabs', files: ['components/tabs.tsx'] },
    { name: 'type-table', files: ['components/type-table.tsx'] },
    {
      name: 'button',
      unlisted: true,
      files: ['components/ui/button.tsx'],
    },
  ],
  dependencies: {
    'deck-core': {
      type: 'runtime',
    },
    'deck-ui': {
      type: 'runtime',
    },
    next: {
      type: 'runtime',
    },
  },
};
