"use server";

import { revalidatePath } from "next/cache";

import { requestService } from "@/entities/request/model/services/request.service";
import { getCurrentUser } from "@/entities/user/domain";

import { Page } from "@/shared/config/routing";
import { ActionReturnType } from "@/shared/lib/types";

import { CreateRequestSchema, CreateRequestSchemaType } from "../schemas/create-request-schema";

export const createRequestAction = async (
  values: CreateRequestSchemaType,
): Promise<ActionReturnType> => {
  const validatedFields = CreateRequestSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Ошибка валидации данных!" };
  }

  try {
    const user = await getCurrentUser();
    if (!user) return { error: "не авторизован" };
    const { amount, bank } = validatedFields.data;
    await requestService.createRequest({
      bank,
      amount: Number(amount),
      userId: user.id,
    });

    revalidatePath(Page.ACCOUNT);

    return { success: "Успешно!" };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    }
  }

  return { success: "Успех!" };
};
