"use client";

import { useState } from "react";

import { RequestId } from "@/entities/request/model/types";

import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { answerRequsetAction } from "../actions";
import { AnswerRequestSchema, AnswerRequestSchemaType } from "../schemas";

const defaultValues: AnswerRequestSchemaType = {
  cardHolderName: "",
  cardNumber: "",
  comment: "",
};

export const useAnswerRequestForm = (id: RequestId) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useCustomForm({
    defaultValues,
    callback: (values) => answerRequsetAction(values, id),
    schema: AnswerRequestSchema,
    onError: (error) => {
      errorToast({
        title: "Ошибка ответа на заявку",
        description: error,
      });
    },
    onSuccess: (message) => {
      successToast({
        title: "Ответ на заявку",
        description: message,
      });
      setIsOpen(false);
    },
  });

  return { ...form, isOpen, setIsOpen };
};
