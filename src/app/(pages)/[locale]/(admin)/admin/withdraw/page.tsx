import { Metadata } from "next";

import { Withdraw } from "@/pages/withdraw/ui";

import { prisma } from "@/shared/config/prisma";

export const metadata: Metadata = {
  title: "Заявки на вывод",
};

const WithdrawPage = async () => {
  const withdraws = await prisma.withdrawRequest.findMany({
    include: { user: true, tradingTerminal: true },
  });

  return <Withdraw withdraws={withdraws} />;
};

export default WithdrawPage;
