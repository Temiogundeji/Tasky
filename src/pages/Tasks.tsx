/* eslint-disable import/no-unresolved */
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input.tsx";
import Select from "@/components/ui/Select.tsx";
import { Filter, Search } from "lucide-react";

const Tasks = () => {
  return (
    <div className="p-6">
      <PageHeader
        title="Tasks"
        subTitle="Manage your tasks and track progress"
      />
      <Card className="w-full flex flex-row justify-between gap-10">
        <Input
          type="text"
          icon={<Search size={16} />}
          placeholder="Search tasks..."
          name="task-searchbar"
          onChange={(e) => console.log(e.target.value)}
          className="w-7/12"
        />
        <Select
          className="w-5/12"
          name="task-type-filter"
          icon={<Filter />}
          value=""
          options={[
            { label: "Developer", value: "developer" },
            { label: "Designer", value: "designer" },
          ]}
          required
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </Card>
    </div>
  );
};

export default Tasks;
