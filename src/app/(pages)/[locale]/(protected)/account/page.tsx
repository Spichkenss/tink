import { Metadata } from "next";

import { BalanceCard } from "@/widgets/user/balance-card/ui";
import { CurrentRequestCard } from "@/widgets/user/current-request/ui";
import { RequsestsHistoryList } from "@/widgets/user/requests-history/ui";

import { CreateNewRequestModal } from "@/features/request/create-new-request/ui";

import { requestService } from "@/entities/request/model/services";
import { getCurrentUser } from "@/entities/user/domain";

import { PageTemplate } from "@/shared/ui/page-template";

export const metadata: Metadata = {
  title: "Личный кабинет",
};

const AccountPage = async () => {
  const user = await getCurrentUser();

  if (!user) return null;

  const currentRequest = await requestService.getCurrentRequest(user.id);

  return (
    <PageTemplate>
      <div className="flex flex-col md:flex-row md:items-start w-full gap-2">
        <div className="flex flex-col gap-2 h-full">
          <CreateNewRequestModal disabled={!!currentRequest} />
          <BalanceCard />
        </div>
        <div className="w-full flex flex-col gap-4">
          <CurrentRequestCard />
          <RequsestsHistoryList />
        </div>
      </div>
    </PageTemplate>
  );
};

export default AccountPage;
