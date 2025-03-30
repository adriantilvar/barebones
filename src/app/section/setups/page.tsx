import Link from "next/link";

import ArrowRight from "@/components/icons/arrow-right";

const SETUP_GUIDES = [
  {
    title: "Working with Type-Safe Environment Variables",
    path: "/section/setups/type-safe-env-variables",
    description:
      "Next.js loads environment variables automatically, but sometimes they might be missing when the application runs, or you might need them in a specific type. To prevent common issues when working with environment variables, you can use Zod for validation.",
  },
  {
    title: "Supporting multiple languages (aka Internationalization)",
    path: "/section/setups/internationalization-setup",
    description:
      "Next.js supports multiple languages through content localization (i18n) and internationalized routing. While there are several ways to implement this, we'll explore how to set it up using the sub-path approach, in which we prepend the language to every route (e.g., `/en/products`).",
  },
];

const Page = () => {
  return (
    <>
      <h1 className="text-xl font-semibold">Setup Guides</h1>

      <div className="my-8 flex gap-x-4">
        <span className="w-4 rounded-xl bg-zinc-100" />
        <div>
          {SETUP_GUIDES.map((guide) => (
            <article
              key={guide.path.replace("/", "")}
              className="group relative isolate mt-0 rounded-xl px-6 py-4 hover:bg-zinc-100"
            >
              <h2 className="font-semibold text-zinc-900">
                <Link href={{ pathname: guide.path }}>
                  <span className="absolute inset-0 z-10"></span>
                  {guide.title}
                </Link>
              </h2>

              <p className="mt-2 text-zinc-700 group-hover:text-zinc-900">
                {guide.description}
              </p>

              <p className="mt-2 flex flex-row items-center font-semibold text-blue-600">
                Implement{" "}
                <ArrowRight className="ml-2 h-4 w-4 stroke-3 transition-transform group-hover:translate-x-1" />
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
