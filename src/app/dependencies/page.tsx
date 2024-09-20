import Link from "next/link";

import CodePanel from "@/components/code-panel";

const dependencies = [
  {
    description: "Prettier",
    source: {
      text: "prettier",
      link: "https://github.com/prettier/prettier",
    },
    command: "npm install --save-dev prettier",
  },
  {
    description: "Tailwind Prettier Plugin",
    source: {
      text: "prettier-plugin-tailwindcss",
      link: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss",
    },
    command: "npm install --save-dev prettier-plugin-tailwindcss",
  },
  {
    description: "ESLint configuration with Prettier",
    source: {
      text: "eslint-config-prettier",
      link: "https://github.com/prettier/eslint-config-prettier",
    },
    command: "npm install --save-dev eslint-config-prettier",
  },
  {
    description: "Import Order Sort Plugin",
    source: {
      text: "@trivago/prettier-plugin-sort-imports",
      link: "https://github.com/trivago/prettier-plugin-sort-imports",
    },
    command: "npm install --save-dev @trivago/prettier-plugin-sort-imports",
  },
  {
    description: "File Checking Plugin",
    source: {
      text: "eslint-plugin-check-file",
      link: "https://github.com/dukeluo/eslint-plugin-check-file",
    },
    command: "npm install --save-dev eslint-plugin-check-file",
  },
];

const Page = () => {
  const allInOneCommand = dependencies.reduce((previous, current) => {
    return `${previous} ${current.source.text}`;
  }, "npm install --save-dev");

  return (
    <main className="py-6">
      <div className="mx-auto w-fit">
        <h1 className="text-2xl font-semibold">Quick Setup Commands</h1>

        <div className="mt-6">
          <p className="text-base font-semibold">
            {"Going all in? Here's the all-in-one:"}
          </p>
          <CodePanel body={allInOneCommand} className="mt-1" />
        </div>

        <ul className="mt-6 space-y-6">
          <p className="text-base font-semibold">
            {"Not sure you need everything? Take them one by one:"}
          </p>
          {dependencies.map(({ description, source, command }) => {
            const hasSource = source.text && source.link;

            return (
              <li key={description}>
                <p className="text-base font-medium">
                  {description}
                  {" ("}
                  {hasSource && (
                    <Link
                      className="hover:text-blue-800 hover:underline"
                      href={{ pathname: source.link }}
                    >
                      {source.text}
                    </Link>
                  )}
                  {")"}
                </p>
                <CodePanel body={command} isInline className="mt-1" />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Page;
