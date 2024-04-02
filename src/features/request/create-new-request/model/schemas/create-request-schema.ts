import { Bank } from "@prisma/client";
import { z } from "zod";

export const CreateRequestSchema = z.object({
  amount: z.coerce.number().min(1, "Введите валидное значение суммы!"),
  bank: z.nativeEnum(Bank),
});

export type CreateRequestSchemaType = z.infer<typeof CreateRequestSchema>;
