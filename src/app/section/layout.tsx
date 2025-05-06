import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="container mx-auto max-w-4xl space-y-8 p-12 text-zinc-950">
      {children}
    </main>
  );
}
