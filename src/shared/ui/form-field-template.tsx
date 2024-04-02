import { cloneElement, PropsWithChildren, ReactElement } from "react";
import { FieldValues } from "react-hook-form";

import {
  FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "./form";

interface Props<TSchema extends FieldValues> extends PropsWithChildren {
  name: keyof TSchema;
  label?: string;
}

export const FormFieldTemplate = <TSchema extends FieldValues>({
  name,
  label,
  children,
}: Props<TSchema>) => {
  return (
    <FormField
      name={String(name)}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {cloneElement(children as ReactElement, { ...field })}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
