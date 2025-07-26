export type Task = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string; // ISO date string
};

export const Tasks: Task[] = [
  {
    id: "1",
    title: "Complete project documentation",
    description: "Write detailed documentation for the project.",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-10-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Fix bugs in the application",
    description: "Resolve all reported bugs before the next release.",
    status: "pending",
    priority: "medium",
    createdAt: "2023-10-03T09:30:00Z",
  },
  {
    id: "3",
    title: "Implement new feature",
    description: "Develop the new feature as per the requirements.",
    status: "completed",
    priority: "low",
    createdAt: "2023-10-05T08:45:00Z",
  },
  {
    id: "4",
    title: "Review pull requests",
    description: "Review and merge pending pull requests.",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-10-07T13:00:00Z",
  },
];
