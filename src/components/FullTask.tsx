import Card from "./ui/Card";
import { AlertCircle, Loader, CheckCircle, Clock, XCircle } from "lucide-react";
import type { Task as TaskType } from "../utils/mock-content"; // Rename to avoid clash with component name
import clsx from "clsx"; // Optional: for cleaner className handling

type TaskProps = {
  task: TaskType;
  className?: string;
};

const FullTask = ({ task, className }: TaskProps) => {
  const { title, priority, status, description } = task;

  return (
    <Card
      className={clsx(
        "rounded-lg border bg-card text-card-foreground shadow-sm w-full",
        className
      )}
    >
      <div className="w-full flex flex-row justify-between gap-x-60">
        <div className="flex flex-row gap-2.5 items-center w-2/3">
          <div>
            <input
              className="p-3"
              name="is-complted-checkbox"
              type="checkbox"
              value="terms"
            />
          </div>
          <div className="font-semibold text-base">{title}</div>
          <div>
            <span
              className={`rounded-full w-6 px-3 py-0.5 text-white text-sm font-semibold ${
                priority === "high"
                  ? "bg-red-600"
                  : priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}
            >
              {priority}
            </span>
          </div>
          <div>
            <span
              className={`rounded-full w-6 px-3 py-0.5 text-white text-sm font-normal text-center self-center  ${
                status === "pending"
                  ? "bg-gray-200"
                  : status === "in-progress"
                  ? "bg-gray-400"
                  : status === "completed"
                  ? "bg-green-700"
                  : ""
              }`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <Clock size={18} />
        </div>
      </div>

      <div className="mt-5">{description}</div>
    </Card>
  );
};

export default FullTask;
