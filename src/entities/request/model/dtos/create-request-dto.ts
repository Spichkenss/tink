import { CreateRequestSchemaType } from "@/features/request/create-new-request/model/schemas";

import { UserId } from "@/shared/domain/user/types";

export type CreateRequestDto = CreateRequestSchemaType & {
  userId: UserId
};
