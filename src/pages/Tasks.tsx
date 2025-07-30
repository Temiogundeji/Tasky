/* eslint-disable import/no-unresolved */
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input.tsx";
import Select from "@/components/ui/Select.tsx";
import Button from "@/components/ui/Button";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import FullTask from "@/components/FullTask";
import { Tasks as MockTasks } from "@/utils/mock-content";

const Tasks = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="p-6">
      <div className="flex flex-row justify-between">
        <PageHeader
          title="Tasks"
          subTitle="Manage your tasks and track progress"
        />
        <Button
          onClick={() => {
            console.log();
          }}
          icon={<b className="font-extrabold text-2xl align-center">+</b>}
          size="medium"
          type="button"
          borderRadius="rounded-md"
          className="h-10 bg-gray-700"
        >
          New Task
        </Button>
      </div>

      <Card className="w-full h-full items-center flex flex-row justify-between gap-5">
        <div className="w-8/12">
          <Input
            type="text"
            icon={<Search size={16} />}
            placeholder="Search tasks..."
            name="task-searchbar"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="">
          <Select
            name="task-type-filter"
            icon={<Filter size={20} />}
            value={selectedCategory}
            options={[
              { label: "Developer", value: "developer" },
              { label: "Designer", value: "designer" },
              { label: "User Interface", value: "User Interface" },
              { label: "Backend", value: "Backend" },
            ]}
            required
            onChange={() => setSelectedCategory}
          />
        </div>
      </Card>
      <div className="mt-10">
        {MockTasks?.map((task) => (
          <FullTask className="mb-4" key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
