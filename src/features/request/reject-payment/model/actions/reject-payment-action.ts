"use server";

import { Request } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { paymentService } from "@/entities/request/model/services";

import { Page } from "@/shared/config/routing";

export const rejectPaymentAction = async (requestId: Request["id"]) => {
  await paymentService.rejectPayment(requestId);
  revalidatePath(Page.REQUESTS);
};
