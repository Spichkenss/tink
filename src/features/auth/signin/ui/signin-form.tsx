"use client";

import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormFieldTemplate } from "@/shared/ui/form-field-template";
import { Input } from "@/shared/ui/input";

import { useSignInForm } from "../model/hooks";

export const SignInForm = () => {
  const { form, isPending, onSubmit } = useSignInForm();

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
          <Button type="submit" className="w-full" disabled={isPending}>
            Отправить
          </Button>
        </div>
      </form>
    </Form>
  );
};
