import type { Guide } from "@/lib/types";

export const PRETTIER_CONFIG = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindFunctions: ["cn"],
  importOrder: [
    "server-only",
    "use client",
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

export const ESLINT_CONFIG = `import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import n from "eslint-plugin-n";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginTs from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    plugins: {
      prettier,
      "check-file": checkFile,
      n,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": ["off"],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArray: true,
        },
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
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!^[.*": "KEBAB_CASE",
        },
      ],
      "n/no-process-env": ["error"],
    },
  },
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
];
`;

export const TAILWIND_CONFIG = `import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      listStyleType: {
        hyphen: "'―  '",
        circle: "circle",
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
  plugins: [animate],
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
  "typescript.preferences.importModuleSpecifier": "non-relative",
};

export const ZSH_CONFIG = `# Find and set branch name var if in git repository.
function git_branch_name()
{
  branch=$(git symbolic-ref HEAD 2> /dev/null | awk 'BEGIN{FS="/"} {print $
  if [[ $branch == "" ]];
  then
    :
  else
    echo ' %F{#a5b4fc}['$branch']%f'
  fi
}

# Enable autocomplete
autoload -Uz compinit && compinit

# Enable substitution in the prompt
setopt prompt_subst

# Config for prompt. PS1 synonym.
current_folder='%F{#fdba74}%1/%f'
prompt='adrian@\${current_folder}$(git_branch_name)$ '

#aliases
alias pn="pnpm"`;

export const UF_SLEEP = `export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};`;

export const UF_SAFE_TRY = `export const safeTry = async <T, E = Error>(
  promise: Promise<T>
): Promise<[null, T] | [E, null]> => {
  try {
    const result = await promise;
    return [null, result];
  } catch (e) {
    return [e as E, null];
  }
};`;

export const UF_QUICK_ARRAY = `export const quickArray = (length: number, fillValue?: any) =>
  Array.from({ length }, (_, i) => fillValue || i + 1);`;

export const UF_COMPUTE_SHA256 = `export const computeSHA256 = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};`;

export const UF_SLUGIFY = `export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -`;

export const UF_TO_CAMEL_CASE = `export const toCamelCase = (slug: string) => {
  const regex = /^[a-z-]+$/;

  if (!regex.test(slug)) {
    throw new Error("Invalid slug");
  }

  return slug
    .split("-")
    .map((word, index) =>
      index ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join("");
};`;

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

export const CT_EMOJI_FAVICON = `<head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
    />
    ...
</head>`;

const ZOD_ENV_SERVER = `import { z } from "zod";

// Here you can define all your environment variables
const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
});

export type Env = z.infer<typeof EnvSchema>;

let env: Env;

try {
  // eslint-disable-next-line n/no-process-env
  env = EnvSchema.parse(process.env);
} catch (e) {
  const error = e as z.ZodError;
  console.error("🚫 Invalid environment variables:");
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
`;

const ZOD_ENV_NEXT_CONFIG_TS = `import type { NextConfig } from "next";

import "@/env/server.ts";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
`;

const ZOD_ENV_NEXT_CONFIG_MJS = `import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
 
// Validate env during build
jiti("./app/env");
 
/** @type {import('next').NextConfig} */
export default {
  /** ... */
};`;

const G_INTERNATIONALIZATION_DEPENDENCIES =
  "pnpm add negotiator @formatjs/intl-localematcher";

const G_INTERNATIONALIZATION_DEV_DEPENDENCIES = "pnpm add -D @types/negotiator";

const G_VERIFY_LOCALE = `import "server-only";
import { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

export const SUPPORTED_LOCALES = ["en", "da"];
export const DEFAULT_LOCALE = "en";

const getLocale = (request: NextRequest) => {
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") ?? "",
    },
  }).languages();

  return match(languages, SUPPORTED_LOCALES, DEFAULT_LOCALE);
};

//Better approach: Have a list with all possible locales, check if the URL contains a locale in that list, and then check if the locale is supported
export const verifyLocale = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const [, firstParam, ...rest] = pathname.split("/");

  const hasLocale = firstParam.length === 2;
  const hasSupportedLocale =
    hasLocale && SUPPORTED_LOCALES.includes(firstParam);

  if (hasSupportedLocale) return { needsRedirect: false };

  const trailingUrl = rest.length ? rest.join("/") : "";

  return {
    needsRedirect: true,
    redirectPath:
      firstParam.length && !hasLocale
        ? \`/\${getLocale(request)}/\${firstParam}/\${trailingUrl}\`
        : \`/\${getLocale(request)}/\${trailingUrl}\`,
  };
};
`;

const G_LOCALE_MIDDLEWARE = `import { NextRequest, NextResponse } from "next/server";

import { verifyLocale } from "./middleware/check-locale";

export const middleware = async (request: NextRequest) => {
  const { needsRedirect, redirectPath } = verifyLocale(request);

  if (needsRedirect) {
    request.nextUrl.pathname = redirectPath!;
    return NextResponse.redirect(request.nextUrl);
  }
};

export const config = {
  matcher: [
    "/((?!api|_next).*)",
    // Optional: only run on root (/) URL
    // "/",
  ],
};
`;

const G_ENGLISH_DICTIONARY = `{
  "products": {
    "cart": "Add to Cart"
  }
}`;

const G_DANISH_DICTIONARY = `{
  "products": {
    "cart": "Tilføj til kurv"
  }
}`;

const G_DICTIONARIES_FUNC = `import "server-only";

export type Locale = "en" | "da";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  da: () => import("@/dictionaries/da.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
`;

const G_LOCALE_CONTEXT = `"use client";

import { createContext, type ReactNode, use } from "react";

type LocaleDictionary = {
  products: {
    cart: string;
  };
};

type LocaleState = {
  dictionary: LocaleDictionary;
};

const LocaleContext = createContext<LocaleState | null>(null);

export const useLocale = () => {
  const localeContext = use(LocaleContext);

  if (!localeContext)
    throw new Error("useLocale must be used within a LocaleProvider");

  return localeContext;
};

const LocaleProvider = ({
  dictionary,
  children,
}: {
  dictionary: LocaleDictionary;
  children: ReactNode;
}) => {
  return <LocaleContext.Provider value={{ dictionary }}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
`;

const G_LOCALE_LAYOUT = `export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}>) {
  const locale = (await params).lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider dictionary={dictionary}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
`;

export const SETUP_GUIDES: Guide[] = [
  {
    title: "Working with Type-Safe Environment Variables",
    slug: "type-safe-env-variables",
    description:
      "Next.js loads up environment variables out of the box, but it's possible that you may be missing some of them while running the application, or you may need a specific type. We can use Zod to prevent some annoying issues that come from working with the environment variables.",
    steps: [
      {
        name: "Installing the dependencies",
        code: "pnpm add zod",
        isInline: true,
      },
      {
        name: "Create server schema:",
        headline: "env/server.ts",
        code: ZOD_ENV_SERVER,
        isInline: false,
      },
      {
        name: "Import env/server.ts to validate the environment variables",
        headline: "next.config.ts",
        code: ZOD_ENV_NEXT_CONFIG_TS,
        isInline: false,
      },
      {
        name: "IF you are using next.config.mjs, you can do it like this",
        headline: "next.config.mjs",
        code: ZOD_ENV_NEXT_CONFIG_MJS,
        isInline: false,
      },
      {
        name: "Prevent using 'process.env' in the code with 'eslint-plugin-n'.",
      },
    ],
  },
  {
    title: "Supporting multiple languages (aka Internationalization)",
    slug: "internationalization-setup",
    description:
      "Supporting multiple languages is done in Next.js through translated content (localization) and internationalized routes. This guide follows the sub-path way of doing it (e.g. /en/products) and makes use of middleware to automatically redirect the user. Additionally, it will show how to enable language switching programmatically.",
    steps: [
      {
        name: "Installing the dependencies:",
        code: G_INTERNATIONALIZATION_DEPENDENCIES,
        isInline: true,
      },
      {
        name: "During development, we need to add an additional dependency for negotiatior:",
        code: G_INTERNATIONALIZATION_DEV_DEPENDENCIES,
        isInline: true,
      },
      {
        name: "We now create a middleware that gets the user's language preference and checks if the URL contains a (valid) locale. If it doesn't, we provide a redirection URL:",
        headline: "middlewares/verify-locale.ts",
        code: G_VERIFY_LOCALE,
        isInline: false,
      },
      {
        name: "Use middleware to check every URL for the locale:",
        headline: "{root}/middleware.ts",
        code: G_LOCALE_MIDDLEWARE,
        isInline: false,
      },
      {
        name: "Nest all other routes inside of app/ within app/[lang], which allows every layout to access the lang parameter",
      },
      {
        name: "Create an English dictionary:",
        headline: "dictionaries/en.json",
        code: G_ENGLISH_DICTIONARY,
        isInline: false,
      },
      {
        name: "Create another dictionary (Danish in this case):",
        headline: "dictionaries/da.json",
        code: G_DANISH_DICTIONARY,
        isInline: false,
      },
      {
        name: "Create a function to load the translations for the requested locale:",
        headline: "dictionaries/get-dictionary.ts",
        code: G_DICTIONARIES_FUNC,
        isInline: false,
      },
      {
        name: "You can just call the function in whichever component needs values from the dictionary. However, using the Context API makes it nicer to work with the dictionary:",
        headline: "contexts/locale-context.tsx",
        code: G_LOCALE_CONTEXT,
        isInline: false,
      },
      {
        name: "Now you only need to retrieve the dictionary once in the RootLayout and provide it, so that it can be accessed anywhere in the app using the useLocale hook:",
        headline: "app/[lang]/layout.tsx",
        code: G_LOCALE_LAYOUT,
        isInline: false,
      },
    ],
  },
];
