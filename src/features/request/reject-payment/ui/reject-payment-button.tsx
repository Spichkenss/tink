"use client";

import { useTransition } from "react";

import { RequestId } from "@/entities/request/model/types";

import { Button } from "@/shared/ui/button";
import { successToast } from "@/shared/ui/success-toast";

import { rejectPaymentAction } from "../model/actions/reject-payment-action";

interface RejectPaymentButtonProps {
  requestId: RequestId;
}

export const RejectPaymentButton = ({ requestId }: RejectPaymentButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async () => {
      await rejectPaymentAction(requestId);
      successToast({
        title: "Ответ на подтверждение платежа",
        description:
          "Платеж не был подтвержден! Ожидайте повторного запроса на подтверждение платежа от клиента!",
      });
    });
  };

  return (
    <Button className="w-full" variant="destructive" onClick={handleClick} disabled={isPending}>
      Отклонить
    </Button>
  );
};
