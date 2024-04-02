"use client";

import { useState } from "react";
import { TradingTerminal } from "@prisma/client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

import { useWithdrawForm } from "../model/hooks";

import { WithdrawForm } from "./withdraw-form";

interface WithdrawModalProps {
  terminals: TradingTerminal[];
}

export const WithdrawModal = ({ terminals }: WithdrawModalProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { isOpen, onOpenChange, ...restForm } = useWithdrawForm();

  const toggleConfirmed = () => setIsConfirmed((prev) => !prev);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full">Запросить вывод</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Пополнение торгового терминала</DialogTitle>
          <DialogDescription>Заполните форму для пополнения торгового терминала</DialogDescription>
        </DialogHeader>
        <WithdrawForm
          terminals={terminals}
          isConfirmed={isConfirmed}
          toggleConfirmed={toggleConfirmed}
          {...restForm}
        />
      </DialogContent>
    </Dialog>
  );
};
