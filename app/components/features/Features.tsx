import PillBadge from "@/components/common/PillBadge";
import MainHeading from "@/components/common/MainHeading";

import CollaborateSection from "./CollaborateSection";
import PlanOrganizeSection from "./PlanOrganizeSection";
import TrackSection from "./TrackSection";

export default function Features() {
  return (
    <section className="w-full bg-white flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5 px-6 text-center sm:px-10 lg:px-16">
        {/* Eyebrow badge */}
        <PillBadge text="Features" />

        {/* Headline */}
        <MainHeading
          text="Everything You Need to <br>Run Better, Smoother Shoots."
          green="Run Better, Smoother Shoots."
        />

        {/* Subtext */}
        <p className="max-w-2xl text-[16px] text-[#475569] sm:text-lg">
          From planning and team collaboration to approvals and final
          delivery, manage every part of your shoot workflow in one simple,
          organized platform.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        <PlanOrganizeSection />
        <CollaborateSection />
        <TrackSection />
      </div>
    </section>
  );
}