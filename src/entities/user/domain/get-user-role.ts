import { Role } from "@prisma/client";

import { auth } from "@/shared/config/auth";

export const getUserRole = async (): Promise<Role | null> => {
  const session = await auth();
  if (!session) return null;
  return session.user?.role;
};
