"use client";

import { useState, useTransition } from "react";
import {
  DefaultValues, FieldValues, useForm, UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodObject } from "zod";

import { ActionReturnType } from "../types";

interface UseCustomFormProps<TSchema extends FieldValues> {
  defaultValues?: DefaultValues<TSchema>;
  schema: unknown;
  callback: (values: TSchema, ...args: unknown[]) => Promise<ActionReturnType>;
  onSuccess?: (message: string) => void;
  onError?: (error: string) => void;
}

interface UseCustomFormReturnType<TSchema extends FieldValues> {
  isPending: boolean;
  form: UseFormReturn<TSchema>;
  onSubmit: (values: TSchema) => void;
}

export const useCustomForm = <TSchema extends FieldValues>({
  defaultValues, schema, callback, onError, onSuccess,
}: UseCustomFormProps<TSchema>): UseCustomFormReturnType<TSchema> => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<TSchema>({
    defaultValues,
    resolver: zodResolver(schema as ZodObject<TSchema>),
  });

  const onSubmit = (values: TSchema): void => {
    startTransition(async () => {
      const response = await callback(values);
      if (response.error) {
        onError?.(response.error);
      } else if (response.success) {
        onSuccess?.(response.success);
      }
    });
  };

  return {
    form,
    isPending,
    onSubmit,
  };
};
