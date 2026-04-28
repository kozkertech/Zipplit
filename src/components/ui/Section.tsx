import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "white" | "light" | "teal";
}

export function Section({
  children,
  className,
  variant = "white",
  ...props
}: SectionProps) {
  const variants = {
    white: "bg-white text-charcoal-gray",
    light: "bg-stone-gray/5 text-charcoal-gray",
    teal: "bg-deep-teal text-white",
  };

  return (
    <section
      className={cn("py-16 md:py-24 overflow-hidden", variants[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
