import { SignedIn, SignedOut } from "@/features/auth/wrappers";

import { Link } from "@/shared/config/navigation";
import { Page } from "@/shared/config/routing";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";

import { HeaderLogo } from "./header-logo";
import { HeaderUserGroup } from "./header-user-group";

export const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 bg-background shadow-md z-50">
      <Stack direction="horizontal" className="container w-full items-center justify-between py-2">
        <HeaderLogo />
        <Stack direction="horizontal" className="space-x-1 items-center">
          <SignedIn>
            <HeaderUserGroup />
          </SignedIn>
          <SignedOut>
            <Button asChild>
              <Link href={Page.SIGNIN}>Войти</Link>
            </Button>
          </SignedOut>
        </Stack>
      </Stack>
    </header>
  );
};
