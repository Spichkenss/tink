import { z } from "zod";

export const AnswerRequestSchema = z.object({
  comment: z.string().min(1, "Поле не может быть пустым!"),
  cardHolderName: z.string().min(1, "Поле не может быть пустым!"),
  cardNumber: z.string().min(1, "Поле не может быть пустым!"),
});

export type AnswerRequestSchemaType = z.infer<typeof AnswerRequestSchema>;
