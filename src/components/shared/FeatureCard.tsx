import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-start gap-4 p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fresh-lime/10 text-deep-teal">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-extrabold text-bold-black">{title}</h3>
      <p className="text-stone-gray text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
