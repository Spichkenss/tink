import { useCustomForm } from "@/shared/lib/hooks";
import { errorToast } from "@/shared/ui/error-toast";
import { successToast } from "@/shared/ui/success-toast";

import { uploadFileAction } from "../actions";
import { UploadFileSchema } from "../schemas";

export const useFileUploadForm = () => {
  return useCustomForm({
    schema: UploadFileSchema,
    callback: uploadFileAction,
    onError: (error) => errorToast({ title: "Ошибка загрузки файла", description: error }),
    onSuccess: (message) => successToast({ title: "Загрузка файла", description: message }),
  });
};
