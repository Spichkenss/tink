import { PropsWithChildren } from "react";

import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/shared/ui/card";

interface AuthFormWrapperProps extends PropsWithChildren {
    heading: string;
    description: string;
}

export const AuthFormCard = ({ heading, description, children }: AuthFormWrapperProps) => (
  <Card className="shadow-none md:shadow-2xl shadow-black border-none md:border bg-secondary md:bg-card w-full max-w-[450px]">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">
        {heading}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-2">
      {children}
    </CardContent>
  </Card>
);
