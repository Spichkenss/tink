"use client";

import { UseFormReturn } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormFieldTemplate } from "@/shared/ui/form-field-template";
import { Input } from "@/shared/ui/input";

import { AnswerRequestSchemaType } from "../model/schemas";

interface AnswerRequestFormProps {
  form: UseFormReturn<AnswerRequestSchemaType>;
  isPending: boolean;
  onSubmit: (values: AnswerRequestSchemaType) => void;
}

export const AnswerRequestForm = ({
  form,
  isPending,
  onSubmit,
}: AnswerRequestFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormFieldTemplate label="ФИО" name="cardHolderName">
          <Input type="text" disabled={isPending} />
        </FormFieldTemplate>
        <FormFieldTemplate label="Номер телефона \ карты" name="cardNumber">
          <Input type="text" disabled={isPending} />
        </FormFieldTemplate>
        <FormFieldTemplate label="Комментарий к платежу" name="comment">
          <Input type="text" disabled={isPending} />
        </FormFieldTemplate>
        <Button type="submit" disabled={isPending} className="w-full">
          Подтвердить
        </Button>
      </form>
    </Form>
  );
};
