import { PropsWithChildren } from "react";

import { cn } from "../lib/utils";

interface PageTemplateProps extends PropsWithChildren {
  centered?: boolean;
  className?: string;
}

export const PageTemplate = ({ children, className, centered = false }: PageTemplateProps) => (
  <main
    className={cn(
      "flex flex-1 flex-col overflow-auto justify-start container pt-6",
      { "justify-center items-center": centered },
      className,
    )}
  >
    {children}
  </main>
);
