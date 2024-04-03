import Image from "next/image";

import { cn } from "@/shared/lib/utils";
import { Heading } from "@/shared/ui/heading";

interface Props {
  icon: string;
  label: string;
  current: string;
  diff: string;
  diffColor: "red" | "green";
}

export const CurrencyItem = ({
  current, icon, label, diff, diffColor,
}: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image
        src={icon}
        alt="icon"
        width={128}
        height={128}
        className="rounded-full shrink-0 w-10 h-10"
      />
      <div>
        <Heading as="h3">{label}</Heading>
        <span>
          {`${current} `}
          &#x20bd;
          &bull;
          <span className={cn({ "ml-2 font-semibold text-green-600": { "text-red-600": diffColor === "red" } })}>
            {diff}
          </span>
        </span>
      </div>
    </div>
  );
};
