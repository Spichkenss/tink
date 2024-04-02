import { auth } from "@/shared/config/auth";
import { SharedSession } from "@/shared/domain/user/types";

export const getCurrentUser = async (): Promise<SharedSession["user"] | null> => {
  const session = await auth();
  return session?.user ?? null;
};
