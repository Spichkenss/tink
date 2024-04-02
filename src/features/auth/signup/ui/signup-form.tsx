"use client";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormFieldTemplate } from "@/shared/ui/form-field-template";
import { Input } from "@/shared/ui/input";

import { useSignUpForm } from "../model/hooks";

export const SignUpForm = () => {
  const { form, onSubmit, isPending } = useSignUpForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <FormFieldTemplate name="phone" label="Номер моб. телефона">
            <Input type="tel" disabled={isPending} />
          </FormFieldTemplate>
          <FormFieldTemplate name="password" label="Пароль">
            <Input type="password" disabled={isPending} />
          </FormFieldTemplate>
          <FormFieldTemplate name="firstName" label="Имя">
            <Input type="text" disabled={isPending} />
          </FormFieldTemplate>
          <FormFieldTemplate name="lastName" label="Фамилия">
            <Input type="text" disabled={isPending} />
          </FormFieldTemplate>
          <FormFieldTemplate name="middleName" label="Отчество">
            <Input type="text" disabled={isPending} />
          </FormFieldTemplate>
          <Button type="submit" className="w-full" disabled={isPending}>
            Отправить
          </Button>
        </div>
      </form>
    </Form>
  );
};
