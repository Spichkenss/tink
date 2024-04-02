"use server";

import { revalidatePath } from "next/cache";

import { requestService } from "@/entities/request/model/services";
import { RequestId } from "@/entities/request/model/types";

import { Page } from "@/shared/config/routing";

import { AnswerRequestSchema, AnswerRequestSchemaType } from "../schemas";

export const answerRequsetAction = async (values: AnswerRequestSchemaType, id: RequestId) => {
  const validatedValues = AnswerRequestSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Ошибка валидации при обновлении запроса!" };
  }

  await requestService.answerRequest(id, validatedValues.data);

  revalidatePath(Page.REQUESTS);

  return { success: "Реквизиты были доставлены клиенту!" };
};
