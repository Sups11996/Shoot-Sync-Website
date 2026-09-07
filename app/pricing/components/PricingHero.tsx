import PillBadge from "../../../components/common/PillBadge";
import MainHeading from "@/components/common/MainHeading";

export default function PricingHero() {
  return (
    <section className="w-full bg-white px-5 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-11">
      <div className="flex  flex-col items-center text-center">
        <div className="mb-3 sm:mb-4">
          <PillBadge text="Plans" />
        </div>

        <MainHeading text="The Right Plan for<br>Your Creative Teams" green="Your Creative Teams" />

        <p className="mt-3 leading-relaxed text-[#475569] ">
          Flexible pricing with the essential tools you need to plan shoots,
          collaborate with your team, manage approvals, and deliver content.
        </p>
      </div>
    </section>
  );
}