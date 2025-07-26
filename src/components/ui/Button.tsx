import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  borderRadius: "rounded-lg" | "rounded-md" | "rounded-sm";
  color?:
    | "primary"
    | "secondary"
    | "destructive"
    | "success"
    | "warning"
    | "muted";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  icon?: React.ReactNode;
  backgroundColor?:
    | "bg-primary"
    | "bg-secondary"
    | "bg-accent"
    | "bg-foreground";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  borderRadius = "rounded-md",
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  loading = false,
  icon,
}) => {
  // Map color prop to Tailwind color classes
  const colorClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    muted: "bg-gray-200 text-black hover:bg-gray-300",
      bgPrimary: "bg-primary",
    bgForeground: "bg-foreground"
  };

  // Map size prop to padding/text size
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "flex items-center gap-2 transition-all duration-200 focus:outline-none",
        borderRadius,
        colorClasses[color],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        <>
          {icon && <span className="mr-1">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
export default Button;
