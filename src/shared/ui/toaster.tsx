"use client";

import { useToast } from "@/shared/lib/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/shared/ui/toast";

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({
        id, title, description, action, icon, ...props
      }) => {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-4 items-center">
              {icon || null}
              <div className="grid gap-1 grow">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};
