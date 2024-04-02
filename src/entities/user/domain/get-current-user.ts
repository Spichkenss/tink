import { auth } from "@/shared/config/auth";
import { SharedSession } from "@/shared/domain/user/types";

export const getCurrentUser = async (): Promise<SharedSession["user"]> => {
  try {
    const session = await auth();
    return session?.user || null;
  } catch (e) {
    throw new Error("Не авторизован!");
  }
};
