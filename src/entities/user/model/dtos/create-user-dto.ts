import { SharedUser } from "@/shared/domain/user/types";

export type CreateUserDto = Pick<
  SharedUser,
  "firstName" | "lastName" | "middleName" | "phone" | "passwordHash"
>;
