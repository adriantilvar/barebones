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

const pages = [
  {
    id: "todo-list",
    name: "To-Do List",
    icon: <ListChecksIcon className="h-4 w-4" />,
    description:
      "A checklist of common tasks and steps for setting up a project.",
  },
  {
    id: "files",
    name: "Files",
    icon: <FileText className="h-4 w-4" />,
    description: "Configuration files for various tools and frameworks.",
  },
  {
    id: "dependencies",
    name: "Dependencies",
    icon: <PackageIcon className="h-4 w-4" />,
    description: "Commands to install suggested packages and libraries.",
  },
  {
    id: "project-structure",
    name: "Project Structure",
    icon: <FolderTree className="h-4 w-4" />,
    description:
      "Recommended directory structures and organization for projects.",
  },
  {
    id: "setups",
    name: "Setups",
    icon: <WrenchIcon className="h-4 w-4" />,
    description: "Quick guides on how to set different things up",
  },
  {
    id: "functions",
    name: "Utility Functions",
    icon: <SquareFunctionIcon className="h-4 w-4" />,
    description:
      "Reusable functions to help with repetitive or common operations.",
  },
  {
    id: "scripts",
    name: "Scripts",
    icon: <ScrollTextIcon className="h-4 w-4" />,
    description: "Helpful scripts for automation and development tasks.",
  },
  {
    id: "tricks",
    name: "Cool Tricks",
    icon: <StarIcon className="h-4 w-4" />,
    description:
      "Cool stuff that you can do in your apps. They are mostly gimmicks.",
  },
];

export default function Home() {
  const intro =
    "Here you'll find a collection of tools and files designed to make life easier. Whether you're setting up a new project or looking for handy functions to quickly copy-paste, these resources are here to help.";

  return (
    <main className="flex h-full flex-col overflow-scroll p-6">
      <p className="mt-2">{intro}</p>
      <div className="mx-auto mt-4 max-w-6xl flex-1 space-y-6">
        <ScrollArea className="h-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map(({ id, name, icon, description }) => (
              <Card key={id} className="h-44">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {icon}
                    <span>{name}</span>
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href={{ pathname: `/${id}` }} passHref>
                    <Button className="group w-full" variant="outline">
                      Explore {name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
