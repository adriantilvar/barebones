"use client";
import { useState } from "react";

import { cn, sleep } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import CircleArrowDown from "./icons/circle-arrow-down";
import CircleArrowUp from "./icons/circle-arrow-up";

type CodePanelProps = {
  headline: string;
  body: string;
};

const CodePanel = ({ headline, body }: CodePanelProps) => {
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
        "relative mt-2 max-w-xl overflow-scroll overflow-y-hidden rounded-lg border border-zinc-200/50 bg-zinc-50",
        {
          "h-40": !isExpanded,
        }
      )}>
      <p className="bg-zinc-100 px-2 py-1 text-sm">{headline}</p>

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

      <div className="px-2 pb-14 pt-4">
        <code>{body}</code>
      </div>

      {!isExpanded && (
        <>
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
            aria-hidden="true"></div>
        </>
      )}

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
    </pre>
  );
};

export default CodePanel;
