import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  description: string;
  short_description: string;
  price: string;
  period?: string;
  featured?: boolean;
  features: string[];
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const { name, description, short_description, price, period, featured } = plan;

  // Convert API description into a list
  const features = description
    .split(/\r?\n/)
    .map((feature) => feature.trim())
    .filter(Boolean);

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 ${
        featured
          ? "border-[#017958] pt-14 shadow-lg"
          : "border-slate-200 shadow-sm"
      }`}
    >
      {/* Most Popular */}
      {featured && (
        <div className="absolute inset-x-0 top-0 rounded-t-2xl bg-[#017958] py-2 text-center text-xs font-semibold tracking-wide text-white">
          Most Popular
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-[24px] font-bold text-[#0F172A]">
        {name}
      </h3>

      {/* Description from API */}
      <p className="mt-1.5 text-base text-[#474747]">
        {short_description}
      </p>

      {/* Amount */}
      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-3xl font-extrabold text-[#016146] lg:text-2xl xl:text-3xl">
          {price}
        </span>

        {period && (
          <span className="text-[18px] text-[#0F172A]">
            {period}
          </span>
        )}
      </div>

      {/* Get Started */}
      <button
        type="button"
        className={`mt-6 w-full rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
          featured
            ? "cursor-pointer bg-[#017958] text-white hover:bg-[#016449]"
            : "cursor-pointer border border-[#017958] text-[#017958] hover:bg-emerald-50"
        }`}
      >
        Get Started
      </button>

      {/* Features from API */}
      <ul className="mt-7 flex flex-col gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-[16px] text-[#0F172A]"
          >
            <Check
              className="h-4 w-4 shrink-0 text-[#017958]"
              strokeWidth={2.5}
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}