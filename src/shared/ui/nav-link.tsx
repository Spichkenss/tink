"use client";

import { PropsWithChildren } from "react";

import { Link, usePathname } from "@/shared/config/navigation";

import { cn } from "../lib/utils";

export const NavLink = ({ children, href }: PropsWithChildren & {href: string}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href as any}
      className={cn(
        "p-2 rounded-md w-[80px] text-center",
        { "bg-primary": pathname === href },
      )}
    >
      {children}
    </Link>
  );
};
