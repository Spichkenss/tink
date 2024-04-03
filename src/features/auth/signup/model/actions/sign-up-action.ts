"use server";

import bcrypt from "bcryptjs";

import { userRepository } from "@/entities/user/model/repositories/user-repository";
import { userService } from "@/entities/user/model/services";

import { redirect } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { ActionReturnType } from "@/shared/lib/types";

import { SignUpSchema, SignUpSchemaType } from "../schemas/signup-schema";

export const signUpAction = async (values: SignUpSchemaType): Promise<ActionReturnType> => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Ошибка валидации данных!" };
  }

  const { password, phone, ...rest } = validatedFields.data;

  const existingUser = await userService.getByPhone(phone);
  if (existingUser) {
    return { error: "Номер уже занят!" };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await userRepository.create({ passwordHash, phone, ...rest });

  redirect(Page.SIGNIN);

  return { success: "Пользователь создан успешно!" };
};
