import { Role } from "@prisma/client";

export type UserId = string;
export type Phone = string;

export interface SharedUser {
  id: UserId;
  firstName: string;
  lastName: string;
  middleName: string | null;
  phone: Phone;
  passwordHash: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  balance: number;
}

export interface SharedSession {
  user: Pick<
    SharedUser,
    | "id"
    | "firstName"
    | "lastName"
    | "middleName"
    | "phone"
    | "image"
    | "role"
    | "balance"
  >;
}
