import { EmptyPlugCard } from "@/widgets/empty-plug-card/ui";

import { requestService } from "@/entities/request/model/services/request.service";
import { withdrawService } from "@/entities/request/model/services/withdraw.service";
import { UserRequestCard } from "@/entities/request/ui/user-request-card";
import { getCurrentUser } from "@/entities/user/domain";

type SortType = {
  createdAt: Date;
}

const sortByCreatedDate = <T extends SortType, >(arr: T[]) => {
  return arr.sort((a, b) => {
    const atime = a.createdAt.valueOf();
    const btime = b.createdAt.valueOf();
    if (atime < btime) return -1;
    if (atime > btime) return 1;
    return 0;
  });
};

export const RequsestsHistoryList = async () => {
  const user = await getCurrentUser();
  if (!user) return null;
  const [archive, withdraws] = await Promise.all([
    requestService.getArchivedRequests(user.id),
    withdrawService.getAllUserWithdrawRequest(user.id),
  ]);

  const history = sortByCreatedDate([...archive, ...withdraws]).reverse();

  return (
    <div className="space-y-2">
      {!history.length ? (
        <EmptyPlugCard plug="История заявок пуста" />
      ) : (
        history.map((item) => (
          <UserRequestCard key={item.id} item={item} isPositive={"user" in item} />
        ))
      )}
    </div>
  );
};
