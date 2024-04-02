import { tradingTerminalRepository } from "../repositories";

class TradingTerminalService {
  async getAllTradingTerminals() {
    return tradingTerminalRepository.getAll();
  }
}

export const tradingTerminalService = new TradingTerminalService();
