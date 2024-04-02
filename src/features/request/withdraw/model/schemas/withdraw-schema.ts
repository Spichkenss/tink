import { z } from "zod";

export const WithdrawSchema = z.object({
  amount: z.coerce.number().min(1, "Введите валидное значение суммы!"),
  contact: z.string().min(1, "Поле не может быть пустым!"),
  terminal: z.string(),
});

export type WithdrawSchemaType = z.infer<typeof WithdrawSchema>;
