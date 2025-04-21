import algosearch from 'algoliasearch';
import { sync } from 'deck-core/search/algolia';
import * as fs from 'node:fs';

const content = fs.readFileSync('.next/server/app/static.json.body');

// now you can pass it to `sync`
/** @type {import('deck-core/search/algolia').DocumentRecord[]} **/
const records = JSON.parse(content.toString());

const client = algosearch('id', 'key');

void sync(client, {
  documents: records, // [!code highlight]
});
