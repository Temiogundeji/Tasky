import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  CheckSquare,
  Timer,
  BarChart3,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Tasks",
    to: "/tasks",
    icon: <CheckSquare size={20} />,
  },
  {
    title: "Time Tracking",
    to: "/time-tracking",
    icon: <Timer size={20} />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings size={20} />,
  },
  // Add more pages here as needed
];

const Sidebar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 p-2 rounded-lg transition-colors ${
      isActive
        ? "bg-gray-700 text-white font-semibold"
        : "text-gray-700 hover:bg-gray-700 hover:text-white font-semibold"
    }`;

  return (
    <div className="w-64 h-full bg-background text-white p-4 flex flex-col space-y-4">
      <div className="border-b-1 border-sidebar-border pb-4 mb-4">
        <div className="flex flex-row items-center gap-2 mb-4 ">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <CheckSquare className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="text-primary font-semibold text-xl">Tasky</h3>
        </div>

        <span className="text-primary text-sm">Task Manager</span>
      </div>
      <h4 className="text-secondary font-semibold">Navigation</h4>

      <nav className="flex flex-col gap-2">
        {navItems.map(({ title, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={linkClass}
            end={to === "/"} // only `end` on root path
          >
            {icon}
            <span>{title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
