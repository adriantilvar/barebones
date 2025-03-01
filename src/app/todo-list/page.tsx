"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

type Task = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const defaultTasks = [
  { id: 1, text: "Create repository", isCompleted: false },
  { id: 2, text: "Create project using CLI", isCompleted: false },
  { id: 4, text: "Configure tooling", isCompleted: false },
  {
    id: 5,
    text: "Set up working with environment variables",
    isCompleted: false,
  },
  {
    id: 6,
    text: "If you need translations, set it up right away",
    isCompleted: false,
  },
  { id: 7, text: "Deploy app", isCompleted: false },
];

const ToDoPage = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <main className="mx-auto flex h-full max-w-2xl flex-col py-8 text-zinc-900">
      <h1 className="text-2xl font-semibold">Project Starting Checklist</h1>

      <ul className="mt-6 space-y-4">
        {tasks.map(({ id, text, isCompleted }) => (
          <li key={id} className="flex items-center space-x-2">
            <Checkbox
              id={`task-${id}`}
              checked={isCompleted}
              onCheckedChange={() => toggleTask(id)}
            />
            <label
              htmlFor={`task-${id}`}
              className={cn(
                "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                {
                  "text-zinc-400 line-through": isCompleted,
                }
              )}
            >
              {text}
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Progress value={progress} />

        <p className="mt-2 text-sm">
          {completedTasks} of {tasks.length} tasks completed
        </p>
      </div>
    </main>
  );
};

export default ToDoPage;
