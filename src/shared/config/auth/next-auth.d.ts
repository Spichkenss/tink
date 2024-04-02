import { Role } from "@prisma/client";

import { SharedSession } from "@/shared/domain/user/types";

declare module "next-auth" {
  interface Session {
    user: SharedSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role
  }
}
