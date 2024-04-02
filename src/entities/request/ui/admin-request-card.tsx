import { AcceptPaymentButton } from "@/features/request/accept-payment/ui";
import { AnswerRequestModal } from "@/features/request/answer-request/ui";
import { RejectPaymentButton } from "@/features/request/reject-payment/ui";

import { banks } from "@/shared/lib/consts";
import {
  Card,
  CardContent,
  CardCredItem,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { RelativeTime } from "@/shared/ui/relative-time";

import { RequestEntityWithUser } from "../model/types";

interface AdminRequestCardProps {
  request: RequestEntityWithUser;
}

export const AdminRequestCard = ({ request }: AdminRequestCardProps) => {
  const {
    user,
    amount,
    bank,
    cardHolderName,
    cardNumber,
    comment,
    id,
    isPaymentConfirmPressed,
    isProcessed,
    isAnswered,
    billUrl,
    createdAt,
  } = request;

  const buttons = () => {
    if (isProcessed) {
      return null;
    }
    if (isAnswered === false) {
      return <AnswerRequestModal requestId={id} />;
    }
    if (isPaymentConfirmPressed && !isProcessed) {
      return (
        <>
          <AcceptPaymentButton requestId={id} />
          <RejectPaymentButton requestId={id} />
        </>
      );
    }
    return null;
  };

  const fullname = `${user.lastName} ${user.firstName[0]}. ${user.middleName?.[0]}.`;

  const url = `${process.env.SUPABASE_UPLOADS_URL}/${billUrl}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          <CardCredItem label={fullname}>
            {amount}
            &#x20bd;
          </CardCredItem>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {billUrl && (
          <CardCredItem label="Чек">
            <a href={url}>Открыть</a>
          </CardCredItem>
        )}
        <CardCredItem label="Банк">{banks[bank]}</CardCredItem>
        <CardCredItem label="ФИО">{cardHolderName}</CardCredItem>
        <CardCredItem label="Номер">{cardNumber}</CardCredItem>
        <CardCredItem label="Комментарий к платежу">{comment}</CardCredItem>
        <CardCredItem label="Дата создания">
          <RelativeTime date={createdAt} />
        </CardCredItem>
        <CardCredItem label="Статус">
          {isPaymentConfirmPressed ? (
            <span className="text-green-600">Подтвержден</span>
          ) : (
            <span className="text-red-600">Не подтвержден</span>
          )}
        </CardCredItem>
      </CardContent>
      <CardFooter className="gap-2">{buttons()}</CardFooter>
    </Card>
  );
};
