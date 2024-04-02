import { UseFormReturn } from "react-hook-form";
import { Bank } from "@prisma/client";

import { banks } from "@/shared/lib/consts";
import { Button } from "@/shared/ui/button";
import { DialogFooter } from "@/shared/ui/dialog";
import { Form } from "@/shared/ui/form";
import { FormFieldTemplate } from "@/shared/ui/form-field-template";
import { Input } from "@/shared/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/shared/ui/select";

import { CreateRequestSchemaType } from "../model/schemas/create-request-schema";

interface Props {
  form: UseFormReturn<CreateRequestSchemaType>;
  onSubmit: (values: CreateRequestSchemaType) => void;
  isPending: boolean;
}

export const CreateNewRequestForm = ({ form, isPending, onSubmit }: Props) => {
  const onSelectValueChange = (value: string) => {
    const index = Object.values(banks).indexOf(value);
    const key = Object.keys(banks)[index] as Bank;
    form.setValue("bank", key);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormFieldTemplate name="amount" label="Сумма">
          <Input type="number" />
        </FormFieldTemplate>

        <Select onValueChange={onSelectValueChange}>
          <FormFieldTemplate name="bank" label="Банк">
            <SelectTrigger id="bank" className="w-full">
              <SelectValue placeholder="СБЕР" className="bg-secondary w-full" />
            </SelectTrigger>
          </FormFieldTemplate>
          <SelectContent>
            {Object.entries(banks).map(([key, value]) => (
              <SelectItem value={value} key={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DialogFooter>
          <Button type="submit" className="w-full" disabled={isPending}>
            Отправить
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
