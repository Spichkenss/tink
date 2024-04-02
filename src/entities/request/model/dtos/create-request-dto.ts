import { UserId } from "@/shared/domain/user/types";

import { CreateRequestSchemaType } from "../../../../features/request/create-new-request/model/schemas/create-request-schema";

export type CreateRequestDto = CreateRequestSchemaType & {
  userId: UserId
};
