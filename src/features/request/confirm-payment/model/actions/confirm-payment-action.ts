"use server";

import { revalidatePath } from "next/cache";

import { paymentService } from "@/entities/request/model/services";
import { RequestEntity, RequestId } from "@/entities/request/model/types";
import { getUserUploadsPath } from "@/entities/user/domain";

import { Page } from "@/shared/config/routing";

export const confirmPaymentAction = async (requestId: RequestId, fileName: string):
  Promise<RequestEntity> => {
  const uploadsPath = await getUserUploadsPath();
  const request = await paymentService.confirmPayment(requestId, `${uploadsPath}/${fileName}`);
  revalidatePath(Page.ACCOUNT);
  return request;
};
