"use client";

import { useState } from "react";

import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { withdrawAction } from "../actions";
import { WithdrawSchema, WithdrawSchemaType } from "../schemas";

const defaultValues: WithdrawSchemaType = {
  amount: 0,
  contact: "",
  terminal: "",
};

export const useWithdrawForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useCustomForm({
    defaultValues,
    callback: withdrawAction,
    schema: WithdrawSchema,
    onError: (error) => {
      errorToast({ title: "Вывод средств", description: error });
    },
    onSuccess: (message) => {
      successToast({ title: "Вывод средств", description: message });
      setIsOpen(false);
    },
  });

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    form.form.reset();
  };

  return {
    ...form,
    isOpen,
    onOpenChange,
  };
};
