import { Prisma } from "@prisma/client";

import { prisma } from "@/shared/config/prisma";
import { SharedUser } from "@/shared/domain/user/types";

import { CreateUserDto } from "../dtos";

interface FindUniqueProps {
  where: Prisma.UserWhereUniqueInput;
}

class UserRepository {
  async create(user: CreateUserDto): Promise<SharedUser> {
    return prisma.user.create({
      data: user,
    });
  }

  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<SharedUser | null> {
    try {
      const user = await prisma.user.findUnique(args);
      return user;
    } catch (e) {
      return null;
    }
  }
}

export const userRepository = new UserRepository();
