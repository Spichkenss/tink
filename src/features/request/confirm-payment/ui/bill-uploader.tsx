"use client";

import {
  ChangeEventHandler,
  Dispatch, SetStateAction, useRef,
} from "react";
import { X } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { deleteFileAction, uploadFileAction } from "../model/actions";

interface Props {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}

export const BillUploader = ({ file, setFile }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      ref?.current?.click();
    }
  };

  const onReset = () => {
    if (file) {
      deleteFileAction(file.name);
      setFile(null);
    }
  };

  return (
    <form action={uploadFileAction} onReset={onReset}>
      <div className="grid w-full max-w-sm items-center mb-4 gap-1">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <Input
              type="file"
              name="bill"
              accept="image/jpeg, image/jpg, image/png, image/webp"
              onChange={handleChange}
            />
          </div>
          {file ? (
            <Button
              type="reset"
              variant="ghost"
            >
              <X size={16} />
            </Button>
          )
            : null}
        </div>
      </div>
      <button ref={ref} type="submit" className="sr-only">send iamge</button>
    </form>
  );
};
