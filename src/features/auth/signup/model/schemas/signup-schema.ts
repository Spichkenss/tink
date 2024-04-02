import { z } from "zod";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const SignUpSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат!"),
  password: z
    .string()
    .min(1, "Обязательное поле")
    .min(4, "Минимальная длина пароля: 4 символа")
    .max(16, "Максимальная длина пароля: 16 символов"),
  firstName: z.string().min(1, "Обязательное поле"),
  lastName: z.string().min(1, "Обязательное поле"),
  middleName: z.string(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
