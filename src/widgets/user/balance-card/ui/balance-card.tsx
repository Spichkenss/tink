import { Banknote } from "lucide-react";

import { WithdrawModal } from "@/features/request/withdraw/ui";

import { tradingTerminalService } from "@/entities/trading-terminal/model/services";
import { getCurrentUser } from "@/entities/user/domain";

import {
  Card, CardContent, CardFooter, CardHeader,
} from "@/shared/ui/card";
import { Stack } from "@/shared/ui/stack";

export const BalanceCard = async () => {
  const user = await getCurrentUser();
  const terminals = await tradingTerminalService.getAllTradingTerminals();

  return (
    <Card className="h-full w-full md:w-64 shrink-0">
      <CardHeader>
        <Stack direction="horizontal" gap={8} className="items-center">
          <div className="bg-green-600 text-white p-1 rounded-full">
            <Banknote />
          </div>
          <span className="font-semibold text-xl">Баланс</span>
        </Stack>
      </CardHeader>
      <CardContent className="font-medium text-xl">
        <span>{user?.balance}</span>
        {" \u20bd"}
      </CardContent>
      <CardFooter>
        <WithdrawModal terminals={terminals} />
      </CardFooter>
    </Card>
  );
};
