"use client";

import { PropsWithChildren } from "react";

import { Button } from "@/shared/ui/button";

import { signOutAction } from "../model/actions";

export const SignOutButton = ({ children }: PropsWithChildren) => {
  const handleClick = () => {
    signOutAction();
  };

  return (
    <Button
      onClick={handleClick}
      className="w-full h-8 font-normal justify-start p-2 text-red-600"
      asChild
      variant="ghost"
    >
      {children}
    </Button>

  );
};
