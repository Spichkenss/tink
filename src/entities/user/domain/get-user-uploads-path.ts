import { getCurrentUser } from "./get-current-user";

export const getUserUploadsPath = async () => {
  const user = await getCurrentUser();
  if (!user) return null;
  return user.id;
};
