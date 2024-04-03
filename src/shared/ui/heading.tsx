import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "text-3xl md:text-5xl xl:text-6xl",
      h2: "text-xl md:text-3xl xl:text-4xl ",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
    },
  },
});

interface Props extends ComponentProps<HeadingAs>, VariantProps<typeof headingVariants> {
  as: HeadingAs;
}

export const Heading = ({
  as, className, variant, ...rest
}: Props) => {
  const Component = as;

  return (
    <Component
      className={cn(headingVariants({ variant: as }))}
      {...rest}
    />
  );
};
