import * as fs from 'node:fs/promises';
import path from 'node:path';

export const templates = {
  'lib/default': './examples/default-deck/lib/source.ts',
};

export async function sync(): Promise<void> {
  const generated: Record<string, string> = {};

  const resolve = Object.entries(templates).map(async ([name, file]) => {
    generated[name] = await fs
      .readFile(
        // from root dir
        path.resolve('../../', file),
      )
      .then((v) => v.toString());
  });

  await Promise.all(resolve);
  const out = `
  export const generated = ${JSON.stringify(generated)}
  `;

  await fs.writeFile('./src/generated.js', out);
}

void sync();
