import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRightIcon,
  FileTextIcon,
  FolderTreeIcon,
  ListChecks,
  PackageOpen,
  ScrollText,
  SquareFunction,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "/section/todo-list",
    name: "To-Do List",
    icon: ListChecks,
    description:
      "A checklist of common tasks and steps for setting up a project.",
  },
  {
    id: "/section/files",
    name: "Files",
    icon: FileTextIcon,
    description: "Configuration files for various tools and frameworks.",
  },
  {
    id: "/section/dependencies",
    name: "Dependencies",
    icon: PackageOpen,
    description: "Commands to install suggested packages and libraries.",
  },
  {
    id: "/section/project-structure",
    name: "Project Structure",
    icon: FolderTreeIcon,
    description:
      "Recommended directory structures and organization for projects.",
  },
  {
    id: "/section/setups",
    name: "Setups",
    icon: Wrench,
    description: "Quick guides on how to set different, common things up. ",
  },
  {
    id: "/section/functions",
    name: "Utility Functions",
    icon: SquareFunction,
    description:
      "Reusable functions to help with repetitive or common operations.",
  },
  {
    id: "/section/scripts",
    name: "Scripts",
    icon: ScrollText,
    description: "Helpful scripts for automation and development tasks.",
  },
  {
    id: "/section/tricks",
    name: "Cool Tricks",
    icon: Star,
    description:
      "Cool stuff that you can do in your apps. They are mostly gimmicks.",
  },
];

export default function Home() {
  const intro =
    "Here you'll find a collection of tools and files designed to make life easier. Whether you're setting up a new project or looking for handy functions to quickly copy-paste, these resources are here to help.";

  return (
    <main className="container mx-auto flex flex-col p-12">
      <p className="mt-2">{intro}</p>
      <div className="mt-8 space-y-6">
        <ScrollArea className="h-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.id} className="h-44">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-1 text-lg">
                    <section.icon className="h-4 w-4 text-zinc-800/80" />
                    <span>{section.name}</span>
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href={{ pathname: section.id }} passHref>
                    <Button className="group w-full" variant="outline">
                      Explore {section.name}
                      <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
