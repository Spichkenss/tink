import { cache } from "react";
import { Prisma } from "@prisma/client";

import { UserId } from "@/shared/domain/user/types";

import { CreateRequestDto } from "../dtos/create-request-dto";
import { UpdateRequestDto } from "../dtos/update-request-dto";
import { requestRepository } from "../repositories/request.repository";
import { RequestEntity, RequestId } from "../types";

class RequestService {
  async answerRequest(id: RequestId, updateRequestDto: UpdateRequestDto): Promise<RequestEntity> {
    return requestRepository.update({
      where: { id },
      data: { ...updateRequestDto, isAnswered: true },
    });
  }

  async createRequest(createRequestDto: CreateRequestDto): Promise<RequestEntity> {
    return requestRepository.createRequest(createRequestDto);
  }

  getAllRequests = cache(async (args?: Prisma.RequestFindManyArgs): Promise<RequestEntity[]> => {
    return requestRepository.getAll(args);
  });

  async getCurrentRequest(userId: UserId): Promise<RequestEntity | null> {
    return requestRepository.findFirst({ where: { userId, isProcessed: false } });
  }

  async getArchivedRequests(userId?: UserId): Promise<RequestEntity[]> {
    return requestRepository.getAll({
      where: { isProcessed: true, userId },
      include: { user: true },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export const requestService = new RequestService();
