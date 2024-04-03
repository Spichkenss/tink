import Image from "next/image";

import { cn } from "@/shared/lib/utils";

interface Props {
  title: string;
  description: string;
  picture: string;
  order?: "straight" | "reverse";
}

export const LandingCardWithPhone = ({
  description, title, picture, order = "straight",
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col text-center md:flex-row items-center p-4 xl:max-w-[75%] justify-around w-full mt-8 md:mt-0 gap-2",
        {
          "md:flex-row-reverse": order === "reverse",
        },
      )}
    >
      <Image
        src={picture}
        height={500}
        width={500}
        alt="mob-1"
      />
      <div>
        <h4 className="text-lg font-semibold mb-4">
          {title}
        </h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
