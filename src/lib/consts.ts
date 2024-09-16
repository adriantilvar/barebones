export const PRETTIER_CONFIG = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"],
  importOrder: [
    "^next",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  trailingComma: "es5",
  semi: true,
  singleAttributePerLine: true,
  bracketSameLine: true,
  bracketSpacing: true,
  withNodeModules: true,
};

export const ESLINT_CONFIG = {
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
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
