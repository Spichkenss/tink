import { Metadata } from "next";

import { AdminDashboard } from "@/pages/admin-dashboard/ui";

import { requestService } from "@/entities/request/model/services";
import { RequestEntityWithUser } from "@/entities/request/model/types";

export const metadata: Metadata = {
  title: "Архив заявок на пополнение баланса",
};

const ArchivePage = async () => {
  const archive = await requestService.getArchivedRequests() as RequestEntityWithUser[];

  return (
    <AdminDashboard list={archive} />
  );
};

export default ArchivePage;
