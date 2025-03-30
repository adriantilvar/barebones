import type { MDXComponents } from "mdx/types";

import { Code, CodePanel } from "@/components/widgets/code/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 {...props} className="text-xl font-semibold" />,
    h2: (props) => <h2 {...props} className="text-md font-medium" />,
    pre: (props) => <CodePanel {...props} />,
    code: (props) => <Code {...props} />,
    ol: (props) => (
      <ol {...props} className="*:list-decimal *:marker:font-semibold" />
    ),
    ul: (props) => <ul {...props} className="space-y-8" />,
    li: (props) => (
      <li {...props} className="space-y-2 [&_p]:first:font-medium" />
    ),
  };
}
