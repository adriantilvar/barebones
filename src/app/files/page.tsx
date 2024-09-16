import { ESLINT_CONFIG, PRETTIER_CONFIG, TAILWIND_CONFIG } from "@/lib/consts";

import CodePanel from "@/components/code-panel";

const files = [
  {
    title: "Prettier Config",
    filename: ".prettierrc",
    content: PRETTIER_CONFIG,
    isJson: true,
  },
  {
    title: "ESLint Config",
    filename: ".eslintrc.json",
    content: ESLINT_CONFIG,
    isJson: true,
  },
  {
    title: "Tailwind Config",
    filename: "tailwind.config.ts",
    content: TAILWIND_CONFIG,
    isJson: false,
  },
];

const FilesPage = () => {
  return (
    <main className="py-6">
      <div className="mx-auto w-fit">
        <h1 className="text-2xl font-semibold">Quick Setup Files</h1>

        <ul className="mt-6 space-y-4">
          {files.map(({ title, filename, content, isJson }, index) => {
            //@ts-ignore: Will be correctly stringified if it's JSON
            const panelBody: string = isJson
              ? JSON.stringify(content, null, 2)
              : content;

            return (
              <li key={filename}>
                <p className="font-medium">
                  <span className="font-normal text-zinc-400">
                    {index + 1}.{" "}
                  </span>
                  {title}
                </p>
                <CodePanel
                  headline={filename}
                  body={panelBody}
                  isCollapsible={true}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default FilesPage;
