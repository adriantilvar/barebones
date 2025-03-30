import type { Metadata } from "next";
import { ReactNode } from "react";

import Header from "@/components/header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Barebones",
  description: "Everything to make life easier when developing a webapp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="flex size-[screen] flex-col">
        <Header className="sticky top-0 h-20 shrink-0 px-4" />
        {children}
      </body>
    </html>
  );
}
