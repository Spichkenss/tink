import { auth } from "@/shared/config/auth";
import { SharedSession } from "@/shared/domain/user/types";

export const getCurrentUser = async (): Promise<SharedSession["user"]> => {
  try {
    const session = await auth();
    if (!session) throw new Error("Не авторизован!");
    return session.user;
  } catch (e) {
    throw new Error("Не авторизован!");
  }
};
