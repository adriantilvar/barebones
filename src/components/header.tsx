import Link from "next/link";

import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: ClassValue;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "z-50 flex items-center border-zinc-200 border-b bg-white",
        className
      )}
    >
      <div className="flex">
        <Link
          className="rounded-md border border-zinc-400 border-dashed p-2 font-mono text-zinc-900"
          href="/"
        >
          barebones
        </Link>
      </div>
    </header>
  );
};

export default Header;
