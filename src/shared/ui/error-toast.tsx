import { AlertCircle } from "lucide-react";

import { toast } from "../lib/hooks";

interface Props {
  title?: string;
  description?: string;
}

export const errorToast = ({ description, title }: Props) => {
  return toast({
    variant: "destructive", title, description, icon: <AlertCircle />,
  });
};
