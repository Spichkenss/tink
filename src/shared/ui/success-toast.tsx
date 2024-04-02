import { CheckCircle } from "lucide-react";

import { toast } from "../lib/hooks";

interface Props {
  title?: string;
  description?: string;
}

export const successToast = ({ description, title }: Props) => {
  return toast({
    variant: "success", title, description, icon: <CheckCircle />,
  });
};
