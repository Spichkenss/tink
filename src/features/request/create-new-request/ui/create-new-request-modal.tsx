"use client";

import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

import { useCreateRequestForm } from "../model/hooks/use-create-request-form";

import { CreateNewRequestForm } from "./create-new-request-form";

interface CreateNewRequestModalProps {
  buttonVariant?: VariantProps<typeof buttonVariants>;
  disabled?: boolean;
}

export const CreateNewRequestModal = ({
  buttonVariant,
  disabled = false,
}: CreateNewRequestModalProps) => {
  const { isOpen, setIsOpen, ...restForm } = useCreateRequestForm();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant?.variant} disabled={disabled} className="w-full">
          {disabled ? "Недоступно" : "Создать"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Новая заявка</DialogTitle>
          <DialogDescription>Заполните форму для создания новой заявки</DialogDescription>
        </DialogHeader>
        <CreateNewRequestForm {...restForm} />
      </DialogContent>
    </Dialog>
  );
};
