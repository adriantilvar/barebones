import { SETUP_GUIDES } from "@/lib/consts";

import CodePanel from "@/components/widgets/code-panel";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const guideSlug: string = (await params).slug;

  const guide = SETUP_GUIDES.find((guide) => guide.slug === guideSlug);

  if (!guide) {
    return <div>Guide does not exist</div>;
  }

  return (
    <article className="mx-auto max-w-2xl space-y-8 py-10">
      <h1 className="text-xl font-semibold">{guide.title}</h1>

      <p>{guide.description}</p>

      <ol className="space-y-6">
        {guide.steps.map(({ name, headline, code, isInline }, index) => (
          <li key={name}>
            <p>
              <span className="text-zinc-400">{index + 1}.</span> {name}
            </p>

            {code && (
              <CodePanel
                className="mt-1"
                headline={headline ?? ""}
                body={code}
                isInline={isInline}
              />
            )}
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Page;
