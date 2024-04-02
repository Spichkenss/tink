import { PropsWithChildren } from "react";

import { PageTemplate } from "@/shared/ui/page-template";

interface AuthPagesLayoutProps extends PropsWithChildren {}

const AuthPagesLayout = ({ children }: AuthPagesLayoutProps) => (
  <PageTemplate centered>
    {children}
  </PageTemplate>
);

export default AuthPagesLayout;
