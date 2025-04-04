"use client";

import {
  Children,
  type ComponentProps,
  type ReactElement,
  useState,
} from "react";

import { cn, sleep } from "@/lib/utils";

import { Button } from "@/components/ui/button.tsx";
import { Check, Copy } from "lucide-react";
import {
  extractLanguage,
  extractMetadata,
  getJsxElement,
  highlighter,
} from "./highlighter.ts";

const CodePanel = (props: ComponentProps<"pre">) => {
  const [isShowingCheck, setIsShowingCheck] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsShowingCheck(true);
    await sleep(1000).then(() => setIsShowingCheck(false));
  };

  const child = Children.only(props.children) as ReactElement;
  if (!child) return null;

  const { className, children } = child.props as ComponentProps<"code">;

  if (!children || typeof children !== "string" || !children.length)
    return null;

  const language = extractLanguage(className);
  const [metadata, code] = extractMetadata(children);

  const highlightedCode = highlighter.codeToHast(code.trim(), {
    lang: language,
    theme: "github-light",
    transformers: [
      {
        code(node) {
          this.addClassToHast(node, "is-highlighted");
        },
      },
    ],
  });

  return getJsxElement({
    hast: highlightedCode,
    pre: ({ className, ...rest }) => (
      <div className="relative min-w-2xl rounded-xl border border-zinc-200 bg-zinc-100 p-1 shadow-xs">
        <Button
          variant="ghost"
          className={cn("absolute top-2 right-2 size-7 p-1 hover:bg-zinc-100", {
            "top-1 hover:bg-zinc-200/80": metadata?.caption,
          })}
          onClick={() => !isShowingCheck && copyToClipboard(code)}
        >
          {isShowingCheck ? (
            <Check className="size-4 text-zinc-600 hover:text-zinc-800" />
          ) : (
            <Copy className="size-4 text-zinc-600 hover:cursor-pointer hover:text-zinc-800" />
          )}
        </Button>

        {metadata?.caption && (
          <p className="inline-block px-2 py-1 font-mono text-zinc-700">
            {metadata.caption}
          </p>
        )}

        <pre
          className={cn(
            className,
            "overflow-x-auto rounded-lg border border-zinc-200 p-2",
            {
              "[&_code]:[counter-reset:line] [&_code_.line]:[counter-increment:line] [&_code_.line]:before:my-0 [&_code_.line]:before:mr-8 [&_code_.line]:before:ml-4 [&_code_.line]:before:inline-block [&_code_.line]:before:w-6 [&_code_.line]:before:text-zinc-400 [&_code_.line]:before:[content:counter(line)]":
                metadata?.showLineNumbers,
            }
          )}
          {...rest}
        />
      </div>
    ),
  });
};

const Code = (props: ComponentProps<"code">) => (
  <code
    className="not-[is-highlighted]:mx-0.5 not-[is-highlighted]:rounded-sm not-[is-highlighted]:border not-[is-highlighted]:border-zinc-200 not-[is-highlighted]:bg-zinc-100 not-[is-highlighted]:px-1 not-[is-highlighted]:py-0.5"
    {...props}
  />
);

export { Code, CodePanel };
