import { PropsWithChildren } from "react";

import { Card, CardContent } from "@/shared/ui/card";

interface EmptyPlugCardProps extends PropsWithChildren {
  plug: string;
}

export const EmptyPlugCard = ({ children, plug }: EmptyPlugCardProps) => {
  return (
    <Card>
      <CardContent className="text-xl text-center mt-6 space-y-2">
        <div>{plug}</div>
        {children}
      </CardContent>
    </Card>
  );
};
