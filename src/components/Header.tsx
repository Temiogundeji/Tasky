import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full bg-background border-b-1 shadow p-5">
      <div>
        <h1 className="text-xl font-semibold">Task Management</h1>
      </div>
      <div>
        <User
          className="rounded-full bg-secondary h-8 w-8 text-primary"
          size={18}
        />
      </div>
    </header>
  );
};

export default Header;
