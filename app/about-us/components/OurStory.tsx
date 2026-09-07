import Image from "next/image";
import ProductImage from "../../../public/assets/about-us/Product_Image.png";
import PillBadge from "@/components/common/PillBadge";

export default function OurStory() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16  ">
      <div className="mx-auto grid grid-cols-1 items-center min-[1440px]:items-start gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14 xl:grid-cols-[1fr_1.4fr] xl:gap-16">
        <div className="flex flex-col items-start justify-center text-left">
          <div className="mb-4">
            <PillBadge text="Our Story" />
          </div>

          <h2 className="text-[24px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[2rem] md:text-[2rem] lg:text-[32px]">
            Built to Fix the Chaos Behind Every Shoot
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#475569] sm:text-base md:mt-5 md:text-sm lg:text-base">
            Shoot management often means endless messages, scattered files,
            missed updates, unclear responsibilities, and constant follow-ups
            just to keep everyone on the same page. As creative teams grow,
            managing every brief, schedule, approval, feedback, and
            deliverable across different tools can quickly become
            overwhelming.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#475569] sm:text-base md:text-sm lg:text-base">
            We created a simpler way to bring everything together in one
            organized workspace—helping teams stay connected, reduce
            unnecessary back-and-forth, keep projects moving, and focus more
            on creating great content.
          </p>

          <div className="mt-7 flex items-center w-full flex-col gap-3 sm:flex-row">
            <button className="w-full whitespace-nowrap rounded-[10px] bg-[#016146] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#014f39] sm:w-auto">
              Start 14-Days Free Trial
            </button>
            <button className="w-full whitespace-nowrap rounded-[10px] border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 sm:w-auto">
              View Demo
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-full rounded-[28px] bg-[#EAF5F0] p-6 lg:p-10">
            <Image
              src={ProductImage}
              alt="Shoot Sync product dashboard on laptop"
              className="h-auto w-full drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}