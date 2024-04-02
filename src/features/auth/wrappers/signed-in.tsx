import { Fragment, PropsWithChildren } from "react";

import { getCurrentUser } from "@/entities/user/domain";

interface Props extends PropsWithChildren {}

export const SignedIn = async ({ children }: Props) => {
  const user = await getCurrentUser();
  if (user) return <Fragment>{children}</Fragment>;
  return null;
};
