import { Skeleton } from "@/components/common/Skeleton";

export default function BlogSkeleton() {
  return (
    <main className="px-5 pt-10 pb-16 sm:px-10 lg:px-16">
      <article className="mx-auto flex max-w-3xl flex-col gap-8">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-10 w-3/4" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="aspect-video w-full rounded-[20px]" />
        <div className="flex flex-col gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </article>
    </main>
  );
}