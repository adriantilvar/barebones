import {
  ESLINT_CONFIG,
  PRETTIER_CONFIG,
  TAILWIND_CONFIG,
  VSCODE_CONFIG,
  ZSH_CONFIG,
} from "@/lib/consts";

import CodePanel from "@/components/widgets/code-panel";

const files = [
  {
    title: "VSCode Config",
    filename: ".vscode/settings.json",
    content: VSCODE_CONFIG,
    isJson: true,
  },
  {
    title: "Prettier Config",
    filename: ".prettierrc.json",
    content: PRETTIER_CONFIG,
    isJson: true,
  },
  {
    title: "ESLint Config",
    filename: "eslint.config.mjs",
    content: ESLINT_CONFIG,
    isJson: false,
  },
  {
    title: "Tailwind Config",
    filename: "tailwind.config.ts",
    content: TAILWIND_CONFIG,
    isJson: false,
  },
  {
    title: "Terminal (zsh) config",
    filename: "~/.zshrc",
    content: ZSH_CONFIG,
    isJson: false,
  },
];

const FilesPage = () => {
  return (
    <main className="mx-auto w-fit py-8">
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
                <span className="font-normal text-zinc-400">{index + 1}. </span>
                {title}
              </p>
              <CodePanel
                headline={filename}
                body={panelBody}
                isCollapsible={true}
                className="mt-1"
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default FilesPage;
