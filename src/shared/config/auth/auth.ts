import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import NextAuth from "next-auth";

import { userService } from "@/entities/user/model/services";

import authConfig from "@/shared/config/auth/auth-config";

import prisma from "../prisma/prisma";
import { Page } from "../routing";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider !== "credentials") return true;
      const existingUser = await userService.getById(user.id as string);
      return !!existingUser;
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token;

      const existingUser = await userService.getById(token.sub);

      if (!existingUser) return token;

      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.middleName = existingUser.middleName;
      token.phone = existingUser.phone;
      token.image = existingUser.image;
      token.role = existingUser.role;
      token.balance = existingUser.balance;

      return token;
    },
    session: async ({ token, session }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.middleName = token.middleName as string;
        session.user.phone = token.phone as string;
        session.user.image = token.image as string;
        session.user.role = token.role as Role;
        session.user.balance = token.balance as number;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
