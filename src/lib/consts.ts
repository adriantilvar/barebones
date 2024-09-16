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
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_[^_].*$|^_$",
        varsIgnorePattern: "^_[^_].*$|^_$",
        caughtErrorsIgnorePattern: "^_[^_].*$|^_$",
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
