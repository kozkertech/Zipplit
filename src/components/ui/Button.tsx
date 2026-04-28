import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  asChild?: boolean; // We'll handle a simple version of this
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  asChild,
  ...props
}: ButtonProps) {

  const variants = {
    primary: "bg-fresh-lime text-bold-black hover:bg-fresh-lime/90 shadow-sm",
    secondary: "bg-deep-teal text-white hover:bg-deep-teal/90 shadow-sm",
    outline: "border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-md",
    ghost: "text-deep-teal hover:bg-deep-teal/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
    icon: "p-2",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props} />
  );
}

