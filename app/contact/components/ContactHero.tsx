import MainHeading from "@/components/common/MainHeading";
import PillBadge from "../../../components/common/PillBadge";

export default function ContactHero() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-11">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 sm:mb-4">
          <PillBadge text="Get in Touch" />
        </div>

        <MainHeading text="Have a Question?<br> Let's Talk."
          green="Let's Talk." brClassName="min-[497px]:hidden"/>

        <p className="mt-3  leading-relaxed text-[#475569]">
          Have questions about the platform, pricing, or how it can work for your team? Reach<br className="hidden min-[757px]:inline" />out to us and our team will be happy to help you find the right solution.
        </p>
      </div>
    </section>
  );
}
