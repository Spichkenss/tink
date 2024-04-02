"use server";

import { Request } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { paymentService } from "@/entities/request/model/services";

import { prisma } from "@/shared/config/prisma";
import { Page } from "@/shared/config/routing";

export const acceptPamentAction = async (requestId: Request["id"]) => {
  const request = await paymentService.acceptPayment(requestId);
  await prisma.user.update({
    where: { id: request.userId },
    data: { balance: { increment: request.amount } },
  });
  revalidatePath(Page.REQUESTS);
};
