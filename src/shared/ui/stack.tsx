import { ComponentProps } from "react";

import { cn } from "../lib/utils";

type Direction = "vertical" | "horizontal";

interface Props extends ComponentProps<"div"> {
  direction?: Direction;
  gap?: number;
}

export const Stack = ({
  children,
  className,
  direction = "vertical",
  gap = 0,
}: Props) => {
  return (
    <div
      className={cn("flex flex-col", {
        "flex-row": direction === "horizontal",
      }, className)}
      style={{ gap }}
    >
      {children}
    </div>
  );
};
