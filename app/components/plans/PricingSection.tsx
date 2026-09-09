"use client";

import PricingCard, { type PricingPlan } from "./PricingCard";
import PricingSectionSkeleton from "./PricingCardSkeleton";

import PillBadge from "@/components/common/PillBadge";
import MainHeading from "@/components/common/MainHeading";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

import useApi from "@/hooks/useApi";
import api, { type PricingApiResponse } from "@/services/api/pricing";

interface PricingSectionProps {
  showHeader?: boolean;
}

export default function PricingSection({
  showHeader = true,
}: PricingSectionProps) {
  const {
    data: pricingResponse,
    loading,
    error,
    refetch,
  } = useApi<PricingApiResponse>(api.getPricing);

  const plans: PricingPlan[] =
    pricingResponse?.data
      ?.map((plan) => ({
        name: plan.subscription,
        description: plan.description,
        short_description: plan.short_description,
        price: `Rs. ${Number(plan.amount).toLocaleString()}`,
        period: "/ month",
        featured: plan.subscription === "Premium",
        features: [],
      }))
      .sort((a, b) => {
        const order = ["Basic", "Premium", "Standard"];

        return order.indexOf(a.name) - order.indexOf(b.name);
      }) ?? [];

  const errorMessage = error instanceof Error ? error.message : null;

  return (
    <section>
      {showHeader && (
        <div>
          <div className="flex flex-col items-center gap-3 px-5 text-center sm:px-10 lg:px-16">
            <PillBadge text="Plans" />

            <MainHeading
              text="Simple Plans for Creative Teams"
              green="Creative Teams"
            />

            <span className="text-[#475569]">
              Choose a plan that fits your workflow and get everything you
              need to plan, manage, collaborate, and deliver better shoots.
            </span>
          </div>
        </div>
      )}

      <div className="w-full bg-white px-5 pb-10 pt-8 sm:px-10 lg:px-16">
        {loading && <PricingSectionSkeleton />}

        {!loading && errorMessage && (
          <ErrorState
            title="Failed to load pricing plans"
            message={errorMessage}
            onRetry={refetch}
          />
        )}

        {!loading && !errorMessage && plans.length === 0 && (
          <EmptyState
            title="No pricing plans available"
            message="Check back later for available plans."
          />
        )}

        {!loading && !errorMessage && plans.length > 0 && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}