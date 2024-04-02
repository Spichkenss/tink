import { Prisma, WithdrawRequest } from "@prisma/client";

import { UserId } from "@/shared/domain/user/types";

import { CreateWithdrawRequestDto } from "../dtos";
import { withdrawRepository } from "../repositories/withdraw.repository";

class WithdrawService {
  async createWithdrawRequest(
    createWithdrawRequestDto: CreateWithdrawRequestDto,
  ): Promise<WithdrawRequest> {
    return withdrawRepository.create(createWithdrawRequestDto);
  }

  async getAllWithdrawRequest(
    args?: Prisma.WithdrawRequestFindManyArgs,
  ): Promise<WithdrawRequest[]> {
    return withdrawRepository.getAll(args);
  }

  async getAllUserWithdrawRequest(
    userId: UserId,
  ): Promise<WithdrawRequest[]> {
    return withdrawRepository.getAll({ where: { userId } });
  }
}

export const withdrawService = new WithdrawService();
