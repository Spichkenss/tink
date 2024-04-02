import Link from "next-intl/navigation";
import { getFormatter } from "next-intl/server";

interface Props {
  date: Date;
}

export const RelativeTime = async ({ date }: Props) => {
  const format = await getFormatter();

  // Renders "Nov 20, 2020"
  format.dateTime(date, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Renders "11:36 AM"
  return format.dateTime(date, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
