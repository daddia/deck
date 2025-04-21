var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// lib/source.ts
var source_exports = {};
__export(source_exports, {
  source: () => source,
});
import { loader } from 'deck-core/source';
import matter from 'gray-matter';
import * as path from 'node:path';
import FastGlob from 'fast-glob';
import * as fs from 'node:fs';
var files, virtualFiles, source;
var init_source = __esm({
  'lib/source.ts'() {
    if (typeof import.meta.glob === 'function') {
      files = Object.entries(
        import.meta.glob('/content/docs/**/*', {
          eager: true,
          query: '?raw',
          import: 'default',
        }),
      );
    } else {
      files = FastGlob.sync('content/docs/**/*').map((file) => {
        return [file, fs.readFileSync(file).toString()];
      });
    }
    virtualFiles = files.flatMap(([file, content]) => {
      const ext = path.extname(file);
      const virtualPath = path.relative(
        'content/docs',
        path.join(process.cwd(), file),
      );
      if (ext === '.mdx' || ext === '.md') {
        const parsed = matter(content);
        return {
          type: 'page',
          path: virtualPath,
          data: {
            ...parsed.data,
            content: parsed.content,
          },
        };
      }
      if (ext === '.json') {
        return {
          type: 'meta',
          path: virtualPath,
          data: JSON.parse(content),
        };
      }
      return [];
    });
    source = loader({
      source: {
        files: virtualFiles,
      },
      baseUrl: '/docs',
    });
  },
});

// app.config.ts
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
var app_config_default = defineConfig({
  server: {
    preset: 'vercel',
    hooks: {
      'prerender:routes': async (routes) => {
        const { source: source2 } = await Promise.resolve().then(
          () => (init_source(), source_exports),
        );
        const pages = source2.getPages();
        for (const page of pages) {
          routes.add(page.url);
        }
      },
    },
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        // Shiki results in a huge bundle because Rollup tries to bundle every language/theme
        external: ['shiki'],
        // most React.js libraries now include 'use client'
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
          }
          warn(warning);
        },
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
    ],
  },
});
export { app_config_default as default };
