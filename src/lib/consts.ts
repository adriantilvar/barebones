export const PRETTIER_CONFIG = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindFunctions: ["cn"],
  importOrder: [
    "^(react|next?/?([a-zA-z/]*))$",
    "<THIRD_PARTY_MODULES>",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export const ESLINT_CONFIG = {
  extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  plugins: ["check-file", "n"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
    "prefer-arrow-callback": ["error"],
    "prefer-template": ["error"],
    quotes: ["error", "double"],
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_[^_].*$|^_$",
        varsIgnorePattern: "^_[^_].*$|^_$",
        caughtErrorsIgnorePattern: "^_[^_].*$|^_$",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./", "../"],
            message: "Relative imports are not allowed.",
          },
        ],
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true, // for stuff like next.config.mjs
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        // Everything should be kebab-case, except for dynamic routes
        "src/**/!^[.*": "KEBAB_CASE",
      },
    ],
    "n/no-process-env": ["error"],
  },
};

export const TAILWIND_CONFIG = `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      listStyleType: {
        hyphen: "'―  '",
        circle: "circle",
      },
      spacing: {
        "96": "384px",
        "128": "512px",
        "160": "640px",
        "192": "768px",
        "224": "896px",
        "256": "1024px",
        "288": "1152px",
        "320": "1280px",
      },
    },
    fontSize: {
      xs: ["14px", "20px"],
      sm: ["16px", "24px"],
      base: ["18px", "28px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["30px", "36px"],
      "3xl": ["36px", "40px"],
      "4xl": ["48px", "1"],
      "5xl": ["60px", "1"],
      "6xl": ["72px", "1"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
`;

export const VSCODE_CONFIG = {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.organizeImports": "always",
  },
  "workbench.editor.customLabels.patterns": {
    "**/app/**/page.tsx": "${dirname} (page)",
    "**/app/**/layout.tsx": "${dirname} (layout)",
  },
  "files.associations": {
    "*.css": "tailwindcss",
  },
  "typescript.tsdk": "node_modules/typescript/lib",
};

export const NEXT_CONFIG = `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
`;

export const UF_SLEEP = `export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};`;

export const UF_QUICK_ARRAY = `export const quickArray = (length: number, fillValue?: any) =>
  Array.from({ length }, (_, i) => fillValue || i + 1);`;

export const UF_SLUGIFY = `export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -`;

export const UF_SLUG_TO_TITLE = `export const slugToTitle = (slug: string) => {
  const exceptions = [
    "the",
    "and",
    "or",
    "but",
    "nor",
    "a",
    "an",
    "so",
    "for",
    "yet",
    "at",
    "by",
    "from",
    "of",
    "on",
    "to",
    "with",
    "in",
    "up",
    "over",
    "as",
  ];

  const words = slug.split("-");

  return words
    .map((word, index) => {
      if (
        index === 0 ||
        index === words.length - 1 ||
        !exceptions.includes(word)
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(" ");
};`;

export const G_T3_ENV_SERVER = `import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string()
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1)
  },
  emptyStringsAsUndefined: true,
  experimental__runtimeEnv: process.env
});`;

export const G_T3_NEXT_CONFIG = `import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
 
// Validate env during build
jiti("./app/env");
 
/** @type {import('next').NextConfig} */
export default {
  /** ... */
};`;

export const G_NEXT_AUTH_ROUTE_HANDLER = `import NextAuth from "next-auth"

import options from "@/config/auth";

const handler = NextAuth(options);

export { handler as GET, handler as POST }`;

export const G_NEXT_AUTH_CONFIG = `import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env/server";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ]
}
  
export default options;`;

export const CT_EMOJI_FAVICON = `<head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
    />
    ...
</head>`;
