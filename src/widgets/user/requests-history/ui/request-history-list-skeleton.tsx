import { Skeleton } from "@/shared/ui/skeleton";

export const RequestHistoryListSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full h-[200px]" />
      <Skeleton className="w-full h-[200px]" />
      <Skeleton className="w-full h-[200px]" />
    </>
  );
};
