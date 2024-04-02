import { Metadata } from "next";

import { AdminDashboard } from "@/pages/admin-dashboard/ui";

import { requestService } from "@/entities/request/model/services";
import { RequestEntityWithUser } from "@/entities/request/model/types";

export const metadata: Metadata = {
  title: "Заявки на пополнение баланса",
};

export const getData = async (): Promise<RequestEntityWithUser[]> => {
  return await requestService.getAllRequests({
    where: { isProcessed: false },
    include: { user: true },
  }) as RequestEntityWithUser[];
};

export default async function RequestsPage() {
  const requests = await getData();

  return (
    <AdminDashboard list={requests} />
  );
}
