"use client";

import { RequestId } from "@/entities/request/model/types";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

import { useAnswerRequestForm } from "../model/hooks";

import { AnswerRequestForm } from "./answer-request-form";

interface AnswerRequestModalProps {
  requestId: RequestId;
}

export const AnswerRequestModal = ({ requestId }: AnswerRequestModalProps) => {
  const { isOpen, setIsOpen, ...restForm } = useAnswerRequestForm(requestId);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Ответить</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ответ на заявку</DialogTitle>
          <DialogDescription>Задайте реквизиты</DialogDescription>
        </DialogHeader>
        <AnswerRequestForm {...restForm} />
      </DialogContent>
    </Dialog>
  );
};
