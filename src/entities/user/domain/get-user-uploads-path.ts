import { getCurrentUser } from "./get-current-user";

export const getUserUploadsPath = async () => {
  const user = await getCurrentUser();
  return user.id;
};
