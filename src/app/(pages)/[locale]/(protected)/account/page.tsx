import { Suspense } from "react";
import { Clock, History } from "lucide-react";
import { Metadata } from "next";

import { CurrencyCard } from "@/widgets/currency-card/ui";
import { GiftForFriend } from "@/widgets/gift-for-friend/ui";
import { LearnCard } from "@/widgets/learn/ui";
import { SectionTitle } from "@/widgets/section-title/ui";
import { BalanceCard, BalanceCardSkeleton } from "@/widgets/user/balance-card/ui";
import { CurrentRequestCard, CurrentRequestCardSkeleton } from "@/widgets/user/current-request/ui";
import {
  RequestHistoryListSkeleton,
  RequsestsHistoryList,
} from "@/widgets/user/requests-history/ui";

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
          <Suspense fallback={<BalanceCardSkeleton />}>
            <BalanceCard />
          </Suspense>
          <CurrencyCard />
        </div>
        <div className="w-full flex flex-col gap-4">
          <SectionTitle icon={Clock} label="Текущая заявка" />
          <Suspense fallback={<CurrentRequestCardSkeleton />}>
            <CurrentRequestCard />
          </Suspense>
          <GiftForFriend />
          <LearnCard />
          <SectionTitle icon={History} label="История заявок" />
          <Suspense fallback={<RequestHistoryListSkeleton />}>
            <RequsestsHistoryList />
          </Suspense>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AccountPage;
