import { Bank } from "@prisma/client";

import { SharedUser, UserId } from "@/shared/domain/user/types";
import { Aggregate } from "@/shared/lib/types";

export type RequestId = string;

export interface RequestEntity {
  id: RequestId;
  userId: UserId;
  cardHolderName: string | null;
  cardNumber: string | null;
  bank: Bank;
  amount: number;
  comment: string | null;
  billUrl: string | null;
  isAnswered: boolean;
  isPaymentConfirmPressed: boolean;
  isProcessed: boolean;
  createdAt: Date;
}

export interface HistoryEntity {
  id: string;
  createdAt: Date;
  amount: string;
}

export type RequestEntityWithUser = Aggregate<RequestEntity, { user: SharedUser }>;
