"use client";

import { RedirectType } from "next/navigation";

import { redirect } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { signInAction } from "../actions";
import { SignInSchema, SignInSchemaType } from "../schemas";

const defaultValues: SignInSchemaType = {
  phone: "",
  password: "",
};

export const useSignInForm = () => {
  return useCustomForm({
    defaultValues,
    callback: signInAction,
    schema: SignInSchema,
    onError: (error) => {
      errorToast({
        title: "Ошибка входа",
        description: error,
      });
    },
    onSuccess: (message) => {
      successToast({
        title: "Вход выполнен успешно",
        description: message,
      });
      redirect(Page.ACCOUNT, RedirectType.replace);
    },
  });
};
