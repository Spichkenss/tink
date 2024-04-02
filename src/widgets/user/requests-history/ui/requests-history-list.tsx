import { Fragment } from "react";
import { HistoryIcon } from "lucide-react";

import { EmptyPlugCard } from "@/widgets/empty-plug-card/ui";

import { requestService } from "@/entities/request/model/services/request.service";
import { withdrawService } from "@/entities/request/model/services/withdraw.service";
import { UserRequestCard } from "@/entities/request/ui/user-request-card";
import { getCurrentUser } from "@/entities/user/domain";

export const RequsestsHistoryList = async () => {
  const user = await getCurrentUser();
  if (!user) return null;
  const [archive, withdraws] = await Promise.all([
    requestService.getArchivedRequests(user.id),
    withdrawService.getAllUserWithdrawRequest(user.id),
  ]);

  const history = [...archive, ...withdraws]
    .sort((a, b) => {
      const atime = a.createdAt.valueOf();
      const btime = b.createdAt.valueOf();
      if (atime < btime) return -1;
      if (atime > btime) return 1;
      return 0;
    })
    .reverse();

  return (
    <Fragment>
      <div className="flex flex-row gap-2 items-center mt-6 md:mt-0">
        <div className="bg-blue-400 w-fit p-1 rounded-full">
          <HistoryIcon className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-semibold">История заявок</h1>
      </div>
      <div className="space-y-2">
        {!history.length
          ? <EmptyPlugCard plug="История заявок пуста" />
          : (
            history.map((item) => (
              <UserRequestCard
                key={item.id}
                item={item}
                isPositive={"user" in item}
              />
            ))
          )}
      </div>
    </Fragment>
  );
};
