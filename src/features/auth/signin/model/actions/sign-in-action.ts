"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/shared/config/auth";
import { redirect } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { ActionReturnType } from "@/shared/lib/types";

import { SignInSchema, SignInSchemaType } from "../schemas/signin-schema";

export const signInAction = async (values: SignInSchemaType): Promise<ActionReturnType> => {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Ошибка валидации данных!" };
  }

  try {
    await signIn("credentials", {
      ...validatedFields.data,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case "CredentialsSignin":
        return { error: "Неверный логин или пароль!" };
      default:
        return { error: error.message };
      }
    }
    throw error;
  }

  return redirect(Page.ACCOUNT);
};
