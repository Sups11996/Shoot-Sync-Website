import MainHeading from "@/components/common/MainHeading";
import PillBadge from "@/components/common/PillBadge";

export default function AboutHero() {
  return (
    <section className="w-full bg-white pb-6 pt-10 sm:pb-8 sm:pt-14 md:pb-10 md:pt-16 lg:pb-11 lg:pt-11">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-3 sm:mb-3.5 md:mb-4">
            <PillBadge text="About Us" />
          </div>

          <MainHeading text="About Shoot Sync" green="Shoot Sync" />

          <p className="mt-3 leading-relaxed text-[#475569] ">
            We bring planning, collaboration, approvals, and delivery
            together in one place, helping creative teams stay organized and
            focused on great work
          </p>
        </div>
      </div>
    </section>
  );
}