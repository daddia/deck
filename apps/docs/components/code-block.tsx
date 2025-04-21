import * as Base from 'deck-ui/components/codeblock';
import { highlight } from 'deck-core/highlight';

export interface CodeBlockProps {
  code: string;
  wrapper?: Base.CodeBlockProps;
  lang: string;
}

export async function CodeBlock({ code, lang, wrapper }: CodeBlockProps) {
  const rendered = await highlight(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'vesper',
    },
    components: {
      pre: Base.Pre,
    },
  });

  return <Base.CodeBlock {...wrapper}>{rendered}</Base.CodeBlock>;
}
