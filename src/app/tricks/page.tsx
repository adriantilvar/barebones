import { CT_EMOJI_FAVICON } from "@/lib/consts";

import CodePanel from "@/components/widgets/code-panel";

const tricks = [
  {
    name: "Emoji Favicon",
    location: "app/layout.tsx",
    description:
      "Use an emoji as your website's favicon. Just replace the emoji with one of your choosing and drop this in the root layout:",
    body: CT_EMOJI_FAVICON,
  },
];

const Page = () => {
  return (
    <main className="mx-auto w-fit max-w-xl">
      <h1 className="text-2xl font-semibold">Cool Tricks for Your Apps</h1>

      <ul className="mt-6 space-y-6">
        {tricks.map(({ name, location, description, body }) => {
          return (
            <li key={description}>
              <p className="font-medium">{name}</p>
              <p className="mt-1 text-sm">{description}</p>
              <CodePanel headline={location} body={body} className="mt-1" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
