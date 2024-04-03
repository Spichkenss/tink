"use client";

import { useState } from "react";
import { Bank } from "@prisma/client";

import {
  CreateRequestSchema,
  CreateRequestSchemaType,
} from "@/features/request/create-new-request/model/schemas/create-request-schema";

import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { createRequestAction } from "../actions";

const defaultValues: CreateRequestSchemaType = {
  amount: 0,
  bank: Bank.SBER,
};

export const useCreateRequestForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useCustomForm({
    defaultValues,
    callback: createRequestAction,
    schema: CreateRequestSchema,
    onError: (error) => errorToast({ title: "Ошибка создания заявки", description: error }),
    onSuccess: (message) => {
      successToast({ title: "Заявка была успешно создана" });
      setIsOpen(false);
    },
  });

  return { ...form, isOpen, setIsOpen };
};
