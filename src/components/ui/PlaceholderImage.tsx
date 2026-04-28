import { cn } from "@/lib/utils";
import { Utensils } from "lucide-react";

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  aspectRatio?: "4/3" | "16/9" | "square";
}

export function PlaceholderImage({
  text = "Zipplit Fresh Meal",
  aspectRatio = "4/3",
  className,
  ...props
}: PlaceholderImageProps) {
  const ratios = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    square: "aspect-square",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-stone-gray/10 text-stone-gray overflow-hidden",
        ratios[aspectRatio],
        className
      )}
      {...props}
    >
      <Utensils className="h-12 w-12 mb-2 opacity-20" />
      <span className="text-xs font-semibold opacity-40 uppercase tracking-widest px-4 text-center">
        {text}
      </span>
    </div>
  );
}
