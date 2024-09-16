"use client";
import { useState } from "react";

import { cn, sleep } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import CircleArrowDown from "@/components/icons/circle-arrow-down";
import CircleArrowUp from "@/components/icons/circle-arrow-up";
import CheckIcon from "@/components/icons/check";
import CopyIcon from "@/components/icons/copy";

type CodePanelProps = {
  headline?: string;
  body: string;
  isCollapsible?: boolean;
  isInline?: boolean;
};

const CodePanel = ({
  headline,
  body,
  isCollapsible = false,
  isInline = false,
}: CodePanelProps) => {
  const [isShowingCheck, setIsShowingCheck] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsShowingCheck(true);
    await sleep(1000).then(() => setIsShowingCheck(false));
  };

  return (
    <pre
      className={cn(
        "relative mt-2 max-w-xl overflow-scroll overflow-y-hidden rounded-lg border border-zinc-200/50 bg-zinc-50 text-sm",
        {
          "h-40": isCollapsible && !isExpanded,
        }
      )}>
      {!isInline &&
        (headline ? (
          <p className="flex h-8 items-center border-b-zinc-200/50 bg-zinc-100 px-2">
            {headline}
          </p>
        ) : (
          <div className="h-8 border-b border-b-zinc-200/50 bg-zinc-100" />
        ))}

      <div className="absolute right-1 top-1 rounded-md p-1 hover:bg-zinc-300/50">
        {isShowingCheck ? (
          <CheckIcon className="h-4 w-4 text-zinc-600 hover:text-zinc-800" />
        ) : (
          <CopyIcon
            className="h-4 w-4 text-zinc-600 hover:text-zinc-800"
            onClick={() => copyToClipboard(body)}
          />
        )}
      </div>

      <div
        className={cn(
          "px-2 py-2",
          { "pb-14": isCollapsible },
          { "flex h-8 items-center pr-8": isInline }
        )}>
        <code>{body}</code>
      </div>

      {isCollapsible && !isExpanded && (
        <>
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
            aria-hidden="true"></div>
        </>
      )}

      {isCollapsible && (
        <Button
          size="icon"
          className={cn(
            "absolute right-2 top-28 rounded-xl border border-zinc-200/50 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-800",
            {
              "bottom-2 top-[none]": isExpanded,
            }
          )}
          onClick={() => setIsExpanded((state) => !state)}>
          {isExpanded ? (
            <CircleArrowUp className="h-4" />
          ) : (
            <CircleArrowDown className="h-4" />
          )}
        </Button>
      )}
    </pre>
  );
};

export default CodePanel;
