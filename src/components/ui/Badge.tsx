import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning";
}

export function Badge({
  children,
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  const variants = {
    primary: "bg-deep-teal/10 text-deep-teal",
    secondary: "bg-fresh-lime/20 text-deep-teal",
    success: "bg-whatsapp-green/10 text-[#128C7E]",
    warning: "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
