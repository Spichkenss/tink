import { compare } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { SignInSchema } from "@/features/auth/signin/model/schemas/signin-schema";

import { userService } from "@/entities/user/model/services";

export default {
  providers: [
    Credentials({
      name: "credentials",
      type: "credentials",
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { phone, password } = validatedFields.data;

          const user = await userService.getByPhone(phone);
          if (!user || !user.passwordHash) return null;

          const passwordsMatch = await compare(
            password,
            user.passwordHash,
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
