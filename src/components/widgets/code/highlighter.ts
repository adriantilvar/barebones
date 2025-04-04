import { type ComponentProps, Fragment, type JSX } from "react";

import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { jsx, jsxs } from "react/jsx-runtime";
import { createHighlighter } from "shiki";

export const extractLanguage = (className: string | undefined): string => {
  if (!className) return "";
  const match = className.match(/\b(language-[a-zA-Z]+)\b/g);

  return match?.[0].split("language-")[1] ?? "";
};

type AllowedMetadataKeys = "caption" | "showLineNumbers";
type Metadata = Record<AllowedMetadataKeys, string | boolean>;

export const extractMetadata = (className: string) => {
  const lines = className.split("\n");
  const match = lines[0].match(/^\/\*.*\*\/$/);

  if (match) {
    const properties = match[0]
      .replace(/\/\*|\*\//g, "")
      .replace(/\[|\]/g, "")
      .trim()
      .split(" ");

    const metadata = properties.reduce((accumulator, previous) => {
      const hasValue = previous.includes(":");
      const key = (
        hasValue ? previous.split(":")[0] : previous
      ) as AllowedMetadataKeys;

      accumulator[key] = hasValue ? previous.split(":")[1] : true;

      return accumulator;
    }, {} as Metadata);

    return [metadata, lines.toSpliced(0, 1).join("\n")] as const;
  }

  return [undefined, className] as const;
};

export const highlighter = await createHighlighter({
  themes: ["github-light", "github-dark"],
  langs: ["html", "javascript", "typescript", "jsx", "tsx", "bash", "json"],
});

export const getJsxElement = ({
  hast,
  pre,
}: {
  // biome-ignore lint: Can't figure out the type passed
  hast: any;
  pre: (props: ComponentProps<"pre">) => JSX.Element;
}) =>
  toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: pre,
    },
  });
