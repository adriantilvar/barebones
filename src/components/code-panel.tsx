"use client";
import { useState } from "react";

import { sleep } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

type CodePanelProps = {
  headline: string;
  body: string;
};

const CodePanel = ({ headline, body }: CodePanelProps) => {
  const [isShowingCheck, setIsShowingCheck] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsShowingCheck(true);
    await sleep(1000).then(() => setIsShowingCheck(false));
  };

  return (
    <pre className="relative mt-2 max-w-xl overflow-scroll rounded-lg border border-zinc-200/50 bg-zinc-50">
      <p className="bg-zinc-100 px-2 py-1">{headline}</p>

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

      <div className="px-4 py-1">
        <code>{body}</code>
      </div>
    </pre>
  );
};

export default CodePanel;
