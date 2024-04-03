import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
}

export const SectionTitle = ({ icon: Icon, label }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center mt-6 md:mt-0">
      <div className="bg-primary w-fit p-1 rounded-full">
        <Icon className="text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-semibold">{label}</h1>
    </div>
  );
};
