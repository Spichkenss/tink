import { TradingTerminal, WithdrawRequest } from "@prisma/client";

import { SharedUser } from "@/shared/domain/user/types";
import { Aggregate } from "@/shared/lib/types";
import { concat } from "@/shared/lib/utils";
import {
  Card, CardContent, CardCredItem, CardHeader, CardTitle,
} from "@/shared/ui/card";
import { Grid } from "@/shared/ui/grid";

interface Props {
  withdraws: Aggregate<
    WithdrawRequest,
    {
      user: SharedUser;
      tradingTerminal: TradingTerminal;
    }
  >[];
}

export const Withdraw = ({ withdraws }: Props) => {
  return (
    <Grid>
      {withdraws.map(({
        amount, contact, id, tradingTerminal, user,
      }) => {
        return (
          <Card key={id}>
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                <CardCredItem label={concat(user.lastName, user.firstName, user.middleName)}>
                  {amount}
                  &#x20bd;
                </CardCredItem>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardCredItem label="Торговый терминал">{tradingTerminal.name}</CardCredItem>
              <CardCredItem label="Контакт">{contact}</CardCredItem>
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  );
};
