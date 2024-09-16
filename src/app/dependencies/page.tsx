import Link from "next/link";

import CodePanel from "@/components/code-panel";

const dependencies = [
  {
    description: "ESLint with Prettier",
    source: {
      text: "eslint-config-prettier",
      link: "https://github.com/prettier/eslint-config-prettier",
    },
    command: "npm install --save-dev eslint-config-prettier",
  },
];

const Page = () => {
  return (
    <main className="py-6">
      <div className="mx-auto w-fit">
        <h1 className="text-2xl font-semibold">Quick Setup Commands</h1>

        <ul className="mt-6 space-y-4">
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
                      href={source.link}>
                      {source.text}
                    </Link>
                  )}
                  {")"}
                </p>
                <CodePanel body={command} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Page;
