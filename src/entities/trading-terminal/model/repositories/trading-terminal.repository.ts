import { TradingTerminal } from "@prisma/client";

import { prisma } from "@/shared/config/prisma";

class TradingTerminalRepository {
  async getAll(): Promise<TradingTerminal[]> {
    return prisma.tradingTerminal.findMany();
  }
}

export const tradingTerminalRepository = new TradingTerminalRepository();
