import { cn } from "@/lib/utils";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ step, title, description, className }: StepCardProps) {
  return (
    <div className={cn("relative flex flex-col gap-4 p-6", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-teal text-fresh-lime text-2xl font-black">
        {step}
      </div>
      <h3 className="text-xl font-extrabold text-bold-black uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-stone-gray text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
