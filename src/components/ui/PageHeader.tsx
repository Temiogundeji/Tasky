import clsx from "clsx";

type PageHeaderProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
  subTitle: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  className,
  title,
  subTitle,
}) => {
  return (
    <div className="mb-6 lg:mb-6">
      <h1 className={clsx("text-3xl font-bold mb-4", className)}>{title}</h1>
      <p>{subTitle}</p>
      <p>{children}</p>
    </div>
  );
};

export default PageHeader;
