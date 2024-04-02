import { WithdrawRequest } from "@prisma/client";

export type CreateWithdrawRequestDto = Pick<
  WithdrawRequest,
  "amount" | "contact" | "tradingTerminalId" | "userId"
>;
