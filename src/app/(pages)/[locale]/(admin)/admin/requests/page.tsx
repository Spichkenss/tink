import { Metadata } from "next";

import { AdminDashboard } from "@/widgets/admin-dashboard/ui";

import { requestService } from "@/entities/request/model/services";
import { RequestEntityWithUser } from "@/entities/request/model/types";

export const metadata: Metadata = {
  title: "Заявки на пополнение баланса",
};

export default async function RequestsPage() {
  const requests = await requestService.getAllRequests({
    where: { isProcessed: false },
    include: { user: true },
  }) as RequestEntityWithUser[];

  return (
    <AdminDashboard list={requests} />
  );
}
