/* eslint-disable import/no-unresolved */
import Card from "../components/ui/Card";
import { CheckSquare, Calendar, Target, Clock, Clock1 } from "lucide-react";
import Task from "../components/Task";
import { Tasks } from "../utils/mock-content";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";

const Dashboard = () => {
  type CardContent = {
    title: string;
    value: string;
    description: string;
    icon?: React.ReactNode;
    hasGraph?: boolean;
  };
  const dashboardCardContent: CardContent[] = [
    {
      title: "Total Tasks",
      value: "150",
      description: "Total tasks created in the system.",
      icon: <CheckSquare className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Today's Tasks",
      value: "120",
      description: "Tasks completed successfully.",
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
    },
    // {
    //   title: "Pending Tasks",
    //   value: "30",
    //   description: "Tasks that are still pending.",
    // },
    {
      title: "Completion Rate",
      value: "30",
      description: "Tasks that are still pending.",
      icon: <Target className="h-4 w-4 text-muted-foreground" />,
      hasGraph: true,
    },
    {
      title: "Time Today",
      value: "30",
      description: "Tasks that are still pending.",
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <div className="p-6 lg:p-6">
      <div className="mb-6 lg:mb-6">
        <PageHeader
          title="Dashboard"
          subTitle="Welcome back! Here's an overview of your tasks and productivity."
        />
      </div>
      <div className="w-full flex flex-nowrap gap-4">
        {dashboardCardContent.map((item, index) => (
          <Card
            key={index}
            className="w-3/12 rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="flex flex-row mb-2 items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span>{item.icon}</span>
            </div>

            <p className="text-2xl font-bold text-primary my-2">{item.value}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="w-full mt-10 flex justify-between gap-5">
        <div className="w-1/2">
          <Card>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                Recent Tasks
              </h3>
              <p className="text-sm text-muted-foreground">
                Your latest tasks and their current status
              </p>
            </div>
            <div>
              {Tasks.map((task) => (
                <Task className="mb-4" key={task.id} task={task} />
              ))}
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                Time Tracking
              </h3>
              <p className="text-sm text-muted-foreground">
                Your latest tasks and their current status
              </p>
            </div>
            <div className="mt-5 flex flex-col">
              <Card className="w-full p-4 py-10 mb-4 bg-foreground-accent">
                <div className="flex  flex-col items-center justify-center">
                  <Clock1 className="text-primary" size={50} />
                  <h3 className="mt-5">No Active Timer</h3>
                  <Button
                    className="mt-5 bg-gray-700"
                    onClick={() => {
                      console.log("Huff!");
                    }}
                    borderRadius="rounded-lg"
                    color="secondary"
                  >
                    Start Timer
                  </Button>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
