import { z } from "zod";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?(-?\s?[0-9])+$/;

export const SignInSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат!"),
  password: z
    .string()
    .min(1, "Обязательное поле")
    .min(4, "Минимальная длина пароля: 4 символа")
    .max(16, "Максимальная длина пароля: 16 символов"),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
