import { Metadata } from "next";

import { prisma } from "@/shared/config/prisma";
import { concat } from "@/shared/lib/utils";
import {
  Card, CardContent, CardCredItem, CardHeader, CardTitle,
} from "@/shared/ui/card";
import { Grid } from "@/shared/ui/grid";

export const metadata: Metadata = {
  title: "Заявки на вывод",
};

const WithdrawPage = async () => {
  const withdraws = await prisma.withdrawRequest.findMany({
    include: { user: true, tradingTerminal: true },
  });

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

export default WithdrawPage;
