import { WithdrawRequest } from "@prisma/client";

import { cn } from "@/shared/lib/utils";
import {
  Card, CardContent, CardCredItem, CardHeader, CardTitle,
} from "@/shared/ui/card";
import { RelativeTime } from "@/shared/ui/relative-time";

import { RequestEntity } from "../model/types";

interface UserRequestCardProps {
  item: WithdrawRequest | RequestEntity;
  isPositive: boolean;
}

export const UserRequestCard = ({ item, isPositive }: UserRequestCardProps) => {
  const {
    amount, createdAt,
  } = item;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <CardCredItem
            label="Сумма"
            className={cn("text-red-600", { "text-green-600": isPositive })}
          >
            {`${isPositive ? "+" : "-"}${amount} `}
            &#x20bd;
          </CardCredItem>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardCredItem label="Дата создания">
          <RelativeTime date={createdAt} />
        </CardCredItem>
      </CardContent>
    </Card>
  );
};
