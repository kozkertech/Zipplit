import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverse?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  inverse = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-extrabold uppercase tracking-widest",
            inverse ? "text-fresh-lime" : "text-deep-teal"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
          inverse ? "text-white" : "text-bold-black"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg md:text-xl",
            inverse ? "text-white/80" : "text-stone-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
