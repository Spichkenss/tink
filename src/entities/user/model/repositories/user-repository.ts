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

  async findUniqueOrThrow(args: Prisma.UserFindUniqueOrThrowArgs): Promise<SharedUser> {
    return prisma.user.findUniqueOrThrow(args);
  }

  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<SharedUser | null> {
    return prisma.user.findUnique(args);
  }
}

export const userRepository = new UserRepository();
