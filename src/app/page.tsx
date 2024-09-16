import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import FileText from "@/components/icons/file-text";
import FolderTree from "@/components/icons/folder-tree";
import ArrowRight from "@/components/icons/arrow-right";
import ScrollTextIcon from "@/components/icons/scroll-text";
import ListChecksIcon from "@/components/icons/list-checks";
import ComponentIcon from "@/components/icons/component";
import SquareFunctionIcon from "@/components/icons/square-function";
import PackageIcon from "@/components/icons/package";

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
    id: "icon-components",
    name: "Icon Components",
    icon: <ComponentIcon className="h-4 w-4" />,
    description:
      "React components based on Lucide icons for use in UI development.",
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
];

export default function Home() {
  const intro =
    "Here you'll find a collection of tools and files designed to make life easier. Whether you're setting up a new project or looking for handy functions to quickly copy-paste, these resources are here to help.";

  return (
    <main className="flex-grow p-6">
      <p>{intro}</p>
      <div className="mx-auto mt-8 max-w-6xl space-y-6">
        <ScrollArea className="h-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map(({ id, name, icon, description }) => (
              <Card key={id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {icon}
                    <span>{name}</span>
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/${id}`}
                    passHref>
                    <Button
                      className="group w-full"
                      variant="outline">
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
