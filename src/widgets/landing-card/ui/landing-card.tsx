import { ReactNode } from "react";

import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/shared/ui/card";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export const LandingCard = ({ description, icon, title }: Props) => {
  return (
    <Card className="bg-gray-300 w-full sm:max-w-64">
      <CardHeader>
        <CardTitle className="flex flex-col gap-8">
          <div className="shrink-0">
            {icon}
          </div>
          <span className="grow">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  );
};
