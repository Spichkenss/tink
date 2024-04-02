import { Fragment, PropsWithChildren } from "react";
import { Role } from "@prisma/client";

import { getUserRole } from "@/entities/user/domain";

import { redirect } from "@/shared/config/navigation";
import { DEFAULT_LOGIN_REDIRECT, Page } from "@/shared/config/routing";
import { NavLink } from "@/shared/ui/nav-link";

const AdminLayout = async ({ children }: PropsWithChildren) => {
  const role = await getUserRole();

  if (role !== Role.ADMIN) {
    redirect(DEFAULT_LOGIN_REDIRECT);
  }

  return (
    <Fragment>
      <div className="sticky top-16 inset-x-0 flex items-center justify-end gap-4 mx-4">
        <NavLink href={Page.REQUESTS}>Заявки</NavLink>
        <NavLink href={Page.ARCHIVE}>Архив</NavLink>
        <NavLink href={Page.WITHDRAW}>Выводы</NavLink>
      </div>
      <div className="p-4">
        {children}
      </div>
    </Fragment>

  );
};

export default AdminLayout;
