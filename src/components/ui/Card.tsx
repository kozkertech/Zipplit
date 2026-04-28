import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-premium transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
