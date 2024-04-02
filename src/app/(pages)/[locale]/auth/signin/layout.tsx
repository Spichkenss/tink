import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход в аккаунт",
};

export default function SignInLayout({ children }: PropsWithChildren) {
  return children;
}
