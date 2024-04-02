import { Prisma } from "@prisma/client";

import { prisma } from "@/shared/config/prisma";

import { CreateRequestDto } from "../dtos";
import { RequestEntity } from "../types";

class RequestRepository {
  async createRequest(createRequestDto: CreateRequestDto): Promise<RequestEntity> {
    return prisma.request.create({
      data: {
        ...createRequestDto,
      },
    });
  }

  async getAll(args?: Prisma.RequestFindManyArgs): Promise<RequestEntity[]> {
    return prisma.request.findMany(args);
  }

  async update(args: Prisma.RequestUpdateArgs): Promise<RequestEntity> {
    return prisma.request.update(args);
  }

  async findFirst(args: Prisma.RequestFindFirstOrThrowArgs): Promise<RequestEntity | null> {
    return prisma.request.findFirst(args);
  }
}

export const requestRepository = new RequestRepository();
