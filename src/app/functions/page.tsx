import {
  UF_QUICK_ARRAY,
  UF_SLEEP,
  UF_SLUG_TO_TITLE,
  UF_SLUGIFY,
  UF_TO_CAMEL_CASE,
} from "@/lib/consts";

import CodePanel from "@/components/code-panel";

const functions = [
  {
    name: "Sleep",
    description: "Stalls execution for a specified duration in milliseconds.",
    body: UF_SLEEP,
  },
  {
    name: "Quick Array",
    description:
      "Generates an array of a specified length. If a value is provided, the array will be filled with that value; otherwise, it will contain consecutive numbers starting from 1.",
    body: UF_QUICK_ARRAY,
  },
  {
    name: "Slugify",
    description: "Transforms a string into a 'slug'.",
    body: UF_SLUGIFY,
  },
  {
    name: "Transform Slug to Camel Case",
    description: "Transforms a string into a camelCase string.",
    body: UF_TO_CAMEL_CASE,
  },
  {
    name: "Slug To Title",
    description: "Transforms a slug string into a title case string.",
    body: UF_SLUG_TO_TITLE,
  },
];

const Page = () => {
  return (
    <main className="mx-auto w-fit max-w-xl py-8">
      <h1 className="text-2xl font-semibold">Potentially Helpful Functions</h1>

      <ul className="mt-6 space-y-6">
        {functions.map(({ name, description, body }) => {
          return (
            <li key={description}>
              <p className="font-medium">{name}</p>
              <p className="mt-1 text-sm">{description}</p>
              <CodePanel body={body} className="mt-1" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
