"use client";

import { useState } from "react";

import { RequestEntity } from "@/entities/request/model/types";

import { BillUploader } from "./bill-uploader";
import { ConfirmPaymentAlert } from "./confirm-paymnet-alert";

interface Props {
  request: RequestEntity;
}

export const ConfirmPaymentForm = ({ request }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="my-4">
      {!request.isPaymentConfirmPressed ? (
        <BillUploader
          file={file}
          setFile={setFile}
        />
      ) : null}
      <ConfirmPaymentAlert
        request={request}
        file={file}
      />
      <div className="text-sm text-red-600 m-1">
        Подтвердите после оплаты!
      </div>
    </div>
  );
};
