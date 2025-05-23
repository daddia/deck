import * as OpenAPI from 'deck-openapi';
import { rimraf } from 'rimraf';

const out = './content/docs/(api)';

async function generate() {
  // clean generated files
  await rimraf(out, {
    filter(v) {
      return !v.endsWith('index.mdx') && !v.endsWith('meta.json');
    },
  });

  await OpenAPI.generateFiles({
    // input files
    input: ['./openapi.json'],
    output: out,
    groupBy: 'tag',
  });
}

void generate();
