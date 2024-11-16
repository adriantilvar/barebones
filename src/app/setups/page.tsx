import Link from "next/link";

import { SETUP_GUIDES } from "@/lib/consts";

import ArrowRight from "@/components/icons/arrow-right";

const Page = () => {
  return (
    <main className="mx-10 w-fit py-8">
      <h1 className="text-2xl font-semibold">Setup Guides</h1>

      <ul className="col mt-6 flex max-w-2xl flex-col gap-y-4 border-l-4 pl-4">
        {SETUP_GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={{ pathname: `/setups/${guide.slug}` }}
            passHref
          >
            <li className="group cursor-pointer rounded-xl px-6 py-4 transition-all hover:bg-zinc-100/90">
              <h2 className="text-lg font-semibold text-zinc-900">
                {guide.title}
              </h2>
              <p className="mt-2 text-zinc-800">{guide.description}</p>
              <p className="mt-2 flex flex-row items-center font-semibold text-blue-600">
                Implement{" "}
                <ArrowRight className="ml-2 h-4 w-4 stroke-[3] transition-transform group-hover:translate-x-1" />
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Page;
