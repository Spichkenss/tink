import { User } from "lucide-react";

import { SignOutButton } from "@/features/auth/signout/ui/signout-button";

import { getCurrentUser } from "@/entities/user/domain/get-current-user";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { ForAdmin } from "@/shared/ui/for-admin";

export const HeaderUserGroup = async () => {
  const user = await getCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-secondary p-1 rounded-full">
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{`${user?.firstName} ${user?.lastName}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ForAdmin>
          <DropdownMenuItem>
            <Link href={Page.REQUESTS}>Панель управления</Link>
          </DropdownMenuItem>
        </ForAdmin>
        <SignOutButton>
          <DropdownMenuItem>Выход</DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
