// components/pricing/PricingSectionSkeleton.tsx
import { Skeleton } from "@/components/common/Skeleton"; // adjust to your actual path

interface PricingCardSkeletonProps {
  featured?: boolean;
  featureCount?: number;
}

function PricingCardSkeleton({
  featured = false,
  featureCount = 6,
}: PricingCardSkeletonProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 ${
        featured ? "border-[#017958] pt-14 shadow-lg" : "border-slate-200 shadow-sm"
      }`}
    >
      {/* Most Popular banner */}
      {featured && (
        <div className="absolute inset-x-0 top-0 rounded-t-2xl bg-slate-200 py-2 text-center">
          <Skeleton className="mx-auto h-3 w-20 bg-slate-300" />
        </div>
      )}

      {/* Plan Name */}
      <Skeleton className="h-7 w-28" />

      {/* Short description */}
      <Skeleton className="mt-1.5 h-4 w-4/5" />

      {/* Amount */}
      <div className="mt-6 flex items-baseline gap-1.5">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-4 w-12" />
      </div>

      {/* Get Started button */}
      <Skeleton className="mt-6 h-10 w-full rounded-lg" />

      {/* Features */}
      <ul className="mt-7 flex flex-col gap-3">
        {Array.from({ length: featureCount }).map((_, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <Skeleton className="h-4 w-4 shrink-0 rounded-full" />
            <Skeleton className="h-4 w-[75%]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <PricingCardSkeleton featureCount={6} />
      <PricingCardSkeleton featured featureCount={8} />
      <PricingCardSkeleton featureCount={8} />
    </div>
  );
}