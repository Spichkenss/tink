import { UseFormReturn } from "react-hook-form";
import { TradingTerminal } from "@prisma/client";

import { TradingTerminalSelect } from "@/entities/trading-terminal/ui";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form } from "@/shared/ui/form";
import { FormFieldTemplate } from "@/shared/ui/form-field-template";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { WithdrawSchemaType } from "../model/schemas";

interface WithdrawFormProps {
  isConfirmed: boolean;
  toggleConfirmed: () => void;
  form: UseFormReturn<WithdrawSchemaType>;
  isPending: boolean;
  onSubmit: (values: WithdrawSchemaType) => void;
  terminals: TradingTerminal[];
}

export const WithdrawForm = ({
  form,
  isConfirmed,
  isPending,
  toggleConfirmed,
  onSubmit,
  terminals,
}: WithdrawFormProps) => {
  const onSelectValueChange = (terminalId: string) => {
    form.setValue("terminal", terminalId);
  };

  const isTerminalPicked = !!form.getValues().terminal;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFieldTemplate name="amount" label="Сумма">
          <Input type="number" disabled={isPending} />
        </FormFieldTemplate>
        <FormFieldTemplate name="contact" label="Контакт">
          <Input type="text" disabled={isPending} />
        </FormFieldTemplate>
        <FormFieldTemplate name="teminal" label="Торговый терминал">
          <TradingTerminalSelect terminals={terminals} onValueChange={onSelectValueChange} />
        </FormFieldTemplate>
        <Label className="flex flex-row items-center gap-2 mb-8">
          <Checkbox
            checked={isConfirmed}
            defaultChecked={false}
            onCheckedChange={toggleConfirmed}
            className="w-4 h-4"
          />
          <span>Я подтверждаю правильность введенных данных</span>
        </Label>
        <Button
          className="w-full"
          type="submit"
          disabled={isPending || !isConfirmed || !isTerminalPicked}
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
};
