"use client";

import { useTransition } from "react";
import { Request } from "@prisma/client";

import { Button } from "@/shared/ui/button";
import { successToast } from "@/shared/ui/success-toast";

import { acceptPamentAction } from "../model/actions/accept-payment-action";

interface AcceptPaymentButtonProps {
  requestId: Request["id"];
}

export const AcceptPaymentButton = ({ requestId }: AcceptPaymentButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async () => {
      await acceptPamentAction(requestId);
      successToast({
        title: "Ответ на подтверждение платежа",
        description: "Вы подтвердили платеж! Средства начислены клиенту!",
      });
    });
  };

  return (
    <Button
      className="w-full"
      onClick={handleClick}
      disabled={isPending}
    >
      Принять
    </Button>
  );
};
