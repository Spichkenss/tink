import { Bank } from "@prisma/client";

export const banks: Record<Bank, string> = {
  [Bank.SBER]: "Сбер",
  [Bank.TINKOFF]: "Тинькофф",
  [Bank.ALPHA]: "Альфа",
  [Bank.VTB]: "ВТБ",
};
