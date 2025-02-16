import { Skeleton } from "@/components/ui/skeleton";

const FileCardSkeleton = () => {
  return (
    <div className=" flex-1 grid lg:grid-rows-4  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4  ">
      <Skeleton className="h-28  rounded-md " />
      <Skeleton className="h-28  rounded-md " />
      <Skeleton className="h-28   rounded-md " />
      <Skeleton className="h-28  rounded-md" />
      <Skeleton className="h-28   rounded-md " />
      <Skeleton className="h-28  rounded-md" />
      <Skeleton className="h-28   rounded-md " />
      <Skeleton className="h-28  rounded-md" />
      <Skeleton className="h-28   rounded-md " />
      <Skeleton className="h-28  rounded-md" />
      <Skeleton className="h-28   rounded-md " />
      <Skeleton className="h-28  rounded-md" />
    </div>
  );
};

export default FileCardSkeleton;
