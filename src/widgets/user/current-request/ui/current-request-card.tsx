import { Clock } from "lucide-react";

import { EmptyPlugCard } from "@/widgets/empty-plug-card/ui";

import { RedirectToChatButton } from "@/features/redirect-to-chat/ui";
import { ConfirmPaymentForm } from "@/features/request/confirm-payment/ui";
import { CreateNewRequestModal } from "@/features/request/create-new-request/ui";

import { requestService } from "@/entities/request/model/services";
import { getCurrentUser } from "@/entities/user/domain";

import { banks } from "@/shared/lib/consts";
import { Card, CardContent, CardCredItem } from "@/shared/ui/card";
import { RelativeTime } from "@/shared/ui/relative-time";

export const CurrentRequestCard = async () => {
  const user = await getCurrentUser();
  if (!user) return null;
  const request = await requestService.getCurrentRequest(user.id);

  return (
    <>
      <div className="flex flex-row gap-2 items-center mt-6 md:mt-0">
        <div className="bg-primary w-fit p-1 rounded-full">
          <Clock className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-semibold">Текущая заявка</h1>
      </div>
      {!request ? (
        <EmptyPlugCard plug="Нет текущих заявок">
          <CreateNewRequestModal />
        </EmptyPlugCard>
      ) : (
        <Card className="h-full">
          <CardContent className="pt-4 pb-2">
            <CardCredItem label="Банк">{banks[request.bank]}</CardCredItem>
            <CardCredItem label="Сумма">
              <>
                {request.amount}
                {" \u20bd"}
              </>
            </CardCredItem>
            <CardCredItem label="ФИО">{request.cardHolderName}</CardCredItem>
            <CardCredItem label="Номер">{request.cardNumber}</CardCredItem>
            <CardCredItem label="Комментарий к платежу">
              {request.comment}
            </CardCredItem>
            <CardCredItem label="Дата создания">
              <RelativeTime date={request.createdAt} />
            </CardCredItem>
            {request.isAnswered ? (
              <ConfirmPaymentForm request={request} />
            ) : (
              <div className="text-center my-4">Дождитесь ответа от оператора</div>
            )}
            <RedirectToChatButton />
          </CardContent>
        </Card>
      )}
    </>
  );
};
