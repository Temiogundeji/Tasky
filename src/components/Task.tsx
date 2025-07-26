import Card from "./ui/Card";
import { AlertCircle, Loader, CheckCircle, Clock, XCircle } from "lucide-react";
import type { Task as TaskType } from "../utils/mock-content"; // Rename to avoid clash with component name
import clsx from "clsx"; // Optional: for cleaner className handling

type TaskProps = {
  task: TaskType;
  className?: string;
};

const Task = ({ task, className }: TaskProps) => {
  const { title, priority, status } = task;

  return (
    <Card
      className={clsx(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
    >
      <div className="flex flex-row justify-between">
        <h3 className="font-semibold w-2/4">{title}</h3>

        <span
          className={`lg:px-2 px-5 lg:py-1 py-0 text-white text-sm text-center rounded-full w-1/4 lg:w-1/8 ${
            priority === "high"
              ? "bg-red-600"
              : priority === "medium"
              ? "bg-yellow-500"
              : "bg-gray-400"
          }`}
        >
          {priority}
        </span>

        <span>
          {status === "pending" ? (
            <AlertCircle className="text-yellow-500" />
          ) : status === "in-progress" ? (
            <Loader className="text-blue-500" />
          ) : status === "completed" ? (
            <CheckCircle className="text-green-600" />
          ) : status === "scheduled" ? (
            <Clock className="text-gray-500" />
          ) : status === "cancelled" ? (
            <XCircle className="text-red-500" />
          ) : null}
        </span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {new Date(task.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </Card>
  );
};

export default Task;
