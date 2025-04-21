// @ts-nocheck -- skip type checking
import { _runtimeAsync, buildConfig } from "deck-mdx/runtime/async"
const [err, _sourceConfig] = buildConfig(_source)
if (!_sourceConfig) throw new Error(err)
import { _runtime } from "deck-mdx"
import * as _source from "./config"
export const docs = _runtimeAsync.doc<typeof _source.docs>([{"info":{"path":"index.mdx","absolutePath":"$cwd/packages/mdx/test/fixtures/index.mdx"},"data":{},"content":"# Hello World\n"}, {"info":{"path":"folder/test.mdx","absolutePath":"$cwd/packages/mdx/test/fixtures/folder/test.mdx"},"data":{},"content":""}], "docs", _sourceConfig)