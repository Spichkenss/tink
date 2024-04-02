"use server";

import { error } from "console";
import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/entities/user/domain";

import { Page } from "@/shared/config/routing";
import createSupabaseServerClient from "@/shared/config/supabase/supabase";
import { ActionReturnType } from "@/shared/lib/types";

export const deleteFileAction = async (fileName: string): Promise<ActionReturnType> => {
  const supabase = await createSupabaseServerClient();
  const user = await getCurrentUser();
  if (!user) return { error: "Не авторизован" };
  await supabase.storage
    .from(process.env.SUPABASE_UPLOADS_BACKET_NAME!)
    .remove([`${user.id}/${fileName}`]);
  revalidatePath(Page.ACCOUNT);
  return { success: "Файл удален" };
};
