"use server";

import { revalidatePath } from "next/cache";

import { getUserUploadsPath } from "@/entities/user/domain";

import { Page } from "@/shared/config/routing";
import createSupabaseServerClient from "@/shared/config/supabase/supabase";
import { ActionReturnType } from "@/shared/lib/types";

export const uploadFileAction = async (formData: FormData): Promise<ActionReturnType> => {
  const supabase = await createSupabaseServerClient();
  const uploadPath = await getUserUploadsPath();

  const file = formData.get("bill") as File;

  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_UPLOADS_BACKET_NAME!)
    .upload(`${uploadPath}/${file.name}`, file);

  revalidatePath(Page.ACCOUNT);

  if (data) {
    return { success: "Файл успешно загружен" };
  }

  return { error: error.message };
};
