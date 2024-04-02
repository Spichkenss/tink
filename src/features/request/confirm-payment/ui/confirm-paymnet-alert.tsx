"use client";

import { useState } from "react";

import { RequestEntity } from "@/entities/request/model/types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";

import { ConfirmPaymentButton } from "./confirm-payment-button";

interface ConfirmPaymentAlertProps {
  request: RequestEntity;
  file: File | null;
}

export const ConfirmPaymentAlert = ({ request, file }: ConfirmPaymentAlertProps) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="m-0 w-full" disabled={request.isPaymentConfirmPressed || !file}>
          Подтвердить оплату
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Подтверджение оплаты</AlertDialogTitle>
          <AlertDialogDescription>Вы точно хотите подтвердить оплату?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction asChild>
            <ConfirmPaymentButton
              request={request}
              file={file}
              onConfirm={() => setOpen(false)}
            >
              Да, подтвердить!
            </ConfirmPaymentButton>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
