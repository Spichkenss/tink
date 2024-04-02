"use server";

import { signOut } from "@/shared/config/auth";

export const signOutAction = async () => {
  await signOut();
};
