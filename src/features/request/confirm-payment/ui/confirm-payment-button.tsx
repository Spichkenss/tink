"use client";

import { PropsWithChildren, useTransition } from "react";

import { RequestEntity } from "@/entities/request/model/types";

import { Button } from "@/shared/ui/button";
import { successToast } from "@/shared/ui/success-toast";

import { confirmPaymentAction } from "../model/actions";

interface ConfirmPaymentButtonProps extends PropsWithChildren {
  request: RequestEntity;
  onConfirm: () => void;
  file: File | null;
}

export const ConfirmPaymentButton = ({
  children,
  request,
  onConfirm,
  file,
}: ConfirmPaymentButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (!file) return;
    startTransition(async () => {
      await confirmPaymentAction(request.id, file.name);
      successToast({
        title: "Подтверждение платежа",
        description: "Вы подтвердили платеж! Ожидайте ответа оператора!",
      });
      onConfirm();
    });
  };

  return (
    <Button onClick={handleClick} disabled={isPending}>
      {children}
    </Button>
  );
};
