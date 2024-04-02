"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/entities/user/domain";

import { Page } from "@/shared/config/routing";
import createSupabaseServerClient from "@/shared/config/supabase/supabase";

export const deleteFileAction = async (fileName: string) => {
  const supabase = await createSupabaseServerClient();
  const user = await getCurrentUser();
  await supabase.storage
    .from(process.env.SUPABASE_UPLOADS_BACKET_NAME!)
    .remove([`${user.id}/${fileName}`]);
  revalidatePath(Page.ACCOUNT);
};
