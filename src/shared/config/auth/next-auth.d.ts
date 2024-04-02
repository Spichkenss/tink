import { Role } from "@prisma/client";

import { SessionEntity } from "@/entities/user";

declare module "next-auth" {
  interface Session {
    user: SessionEntity["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role
  }
}
