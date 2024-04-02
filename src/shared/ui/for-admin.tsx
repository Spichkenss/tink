import { Fragment, PropsWithChildren } from "react";
import { Role } from "@prisma/client";

import { getUserRole } from "@/entities/user/domain";

interface Props extends PropsWithChildren {}

export const ForAdmin = async ({ children }: Props) => {
  const role = await getUserRole();
  if (role === Role.ADMIN) {
    return <Fragment>{children}</Fragment>;
  }
  return null;
};
