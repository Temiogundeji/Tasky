type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-card rounded-lg shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
