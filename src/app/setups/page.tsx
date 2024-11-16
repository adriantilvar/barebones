import {
  G_NEXT_AUTH_CONFIG,
  G_NEXT_AUTH_ROUTE_HANDLER,
  G_T3_ENV_SERVER,
  G_T3_NEXT_CONFIG,
} from "@/lib/consts";

import CodePanel from "@/components/code-panel";

const guides = [
  {
    title: "Working with Type-safe Environment Variables",
    description:
      "Next.js loads up environment variables out of the box, but it's possible that you may be missing some of them while running the application, or you may need a specific type. By using a tool like t3-env, you can prevent some annoying issues that come from working with the environment variables.",
    steps: [
      {
        name: "Installing the dependencies",
        code: "pnpm add @t3-oss/env-nextjs zod",
        isInline: true,
      },
      {
        name: "Create server schema:",
        headline: "env/server.ts",
        code: G_T3_ENV_SERVER,
        isInline: false,
      },
      {
        name: "Modify Next config:",
        headline: "next.config.mjs",
        code: G_T3_NEXT_CONFIG,
        isInline: false,
      },
      {
        name: "Prevent using 'process.env' in the code with 'eslint-plugin-n'.",
      },
    ],
  },
  {
    title: "Setting up authentication with NextAuth.js",
    description:
      "This is the most popular authentication library in the Next.js ecosystem. It is open-source and completely free. There are other popular paid, hosted services out there, which provide out-of-the-box solutions for fancy things like one-click email login, and more. But the drawback is that they typically charge more when the number of active users start increasing in your app.",
    steps: [
      {
        name: "Installing the dependency:",
        code: "pnpm add next-auth",
        isInline: true,
      },
      {
        name: "Initialize NextAuth using route handlers:",
        headline: "/app/api/auth/[...nextauth]/route.ts",
        code: G_NEXT_AUTH_ROUTE_HANDLER,
        isInline: false,
      },
      {
        name: "Create a config file for supporting Google login:",
        headline: "/config/auth.ts",
        code: G_NEXT_AUTH_CONFIG,
        isInline: false,
      },
    ],
  },
];

const Page = () => {
  return (
    <main className="mx-auto w-fit max-w-2xl py-8">
      <h1 className="text-2xl font-semibold">Setup Guides</h1>

      <div className="col mt-6 flex flex-col gap-y-6">
        {guides.map(({ title, description, steps }) => (
          <section key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>

            <p className="mt-2">{description}</p>

            <ol className="mt-2 list-decimal space-y-4">
              {steps.map(({ name, headline, code, isInline }) => (
                <li key={name}>
                  <p>{name}</p>

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
          </section>
        ))}
      </div>
    </main>
  );
};

export default Page;
