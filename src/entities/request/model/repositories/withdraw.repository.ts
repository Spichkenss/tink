import { Prisma, WithdrawRequest } from "@prisma/client";

import { prisma } from "@/shared/config/prisma";

import { CreateWithdrawRequestDto } from "../dtos";

class WithdrawRepository {
  async create(createWithdrawRequestDto: CreateWithdrawRequestDto): Promise<WithdrawRequest> {
    return prisma.withdrawRequest.create({ data: createWithdrawRequestDto });
  }

  async getAll(args?: Prisma.WithdrawRequestFindManyArgs): Promise<WithdrawRequest[]> {
    return prisma.withdrawRequest.findMany(args);
  }
}

export const withdrawRepository = new WithdrawRepository();
