"use client";

import { RedirectType } from "next/navigation";

import { redirect } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { signUpAction } from "../actions/sign-up-action";
import { SignUpSchema, SignUpSchemaType } from "../schemas/signup-schema";

const defaultValues: SignUpSchemaType = {
  phone: "",
  password: "",
  firstName: "",
  lastName: "",
  middleName: "",
};

export const useSignUpForm = () => {
  return useCustomForm({
    defaultValues,
    callback: signUpAction,
    schema: SignUpSchema,
    onError: (error) => {
      errorToast({
        title: "Ошибка регистрации",
        description: error,
      });
    },
    onSuccess: (message) => {
      successToast({
        title: "Успешная регистрация",
        description: message,
      });
      redirect(Page.SIGNIN, RedirectType.replace);
    },
  });
};
