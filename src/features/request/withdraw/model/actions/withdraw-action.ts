"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/entities/user/domain";

import { prisma } from "@/shared/config/prisma";
import { Page } from "@/shared/config/routing";

import { WithdrawSchema, WithdrawSchemaType } from "../schemas";

export const withdrawAction = async (
  values: WithdrawSchemaType,
) => {
  const user = await getCurrentUser();

  const validatedFields = WithdrawSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Ошибка валидации данных!" };
  }

  if (validatedFields.data.amount > user.balance) {
    return { error: "Недостаточно средств!" };
  }

  await prisma.withdrawRequest.create({
    data: {
      tradingTerminalId: validatedFields.data.terminal,
      amount: validatedFields.data.amount,
      userId: user.id,
      contact: validatedFields.data.contact,
    },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: {
      balance: { decrement: validatedFields.data.amount },
    },
  });

  revalidatePath(Page.ACCOUNT);

  return { success: "Операция прошла успешно!" };
};
