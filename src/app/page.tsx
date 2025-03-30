import Link from "next/link";

import ArrowRight from "@/components/icons/arrow-right";
import FileText from "@/components/icons/file-text";
import FolderTree from "@/components/icons/folder-tree";
import ListChecksIcon from "@/components/icons/list-checks";
import PackageIcon from "@/components/icons/package";
import ScrollTextIcon from "@/components/icons/scroll-text";
import SquareFunctionIcon from "@/components/icons/square-function";
import StarIcon from "@/components/icons/start";
import WrenchIcon from "@/components/icons/wrench";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  {
    id: "/section/todo-list",
    name: "To-Do List",
    icon: ListChecksIcon,
    description:
      "A checklist of common tasks and steps for setting up a project.",
  },
  {
    id: "/section/files",
    name: "Files",
    icon: FileText,
    description: "Configuration files for various tools and frameworks.",
  },
  {
    id: "/section/dependencies",
    name: "Dependencies",
    icon: PackageIcon,
    description: "Commands to install suggested packages and libraries.",
  },
  {
    id: "/section/project-structure",
    name: "Project Structure",
    icon: FolderTree,
    description:
      "Recommended directory structures and organization for projects.",
  },
  {
    id: "/section/setups",
    name: "Setups",
    icon: WrenchIcon,
    description: "Quick guides on how to set different, common things up. ",
  },
  {
    id: "/section/functions",
    name: "Utility Functions",
    icon: SquareFunctionIcon,
    description:
      "Reusable functions to help with repetitive or common operations.",
  },
  {
    id: "/section/scripts",
    name: "Scripts",
    icon: ScrollTextIcon,
    description: "Helpful scripts for automation and development tasks.",
  },
  {
    id: "/section/tricks",
    name: "Cool Tricks",
    icon: StarIcon,
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
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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
