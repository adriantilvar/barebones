import Link from "next/link";

import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: ClassValue;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "z-50 flex items-center border-b border-zinc-200 bg-white shadow-sm shadow-zinc-200/50",
        className
      )}
    >
      <div className="flex">
        <Link
          className="rounded-md border border-dashed p-2 text-gray-900"
          href="/"
        >
          barebones
        </Link>
      </div>
    </header>
  );
};

export default Header;
