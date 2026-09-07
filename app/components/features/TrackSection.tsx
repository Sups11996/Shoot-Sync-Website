import Image from "next/image";

const TRACKING_DETAILS_IMAGE_SRC = "/assets/homePage/feature30.png";
const TRACKING_LOGO = "/assets/homePage/clock-logo.png";

const tags = [
  "Progress Tracking",
  "Asset Management",
  "Deadline Control",
  "Easy Delivery",
];

export default function TrackSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left: text content */}
        <div className="w-full">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9EBE6]">
            <Image
              src={TRACKING_LOGO}
              alt="tracking-logo"
              width={24}
              height={24}
              loading="eager"
            />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]">
            Track &amp; Manage Deliverables
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569]">
            Stay on top of every project, monitor progress, organize assets,
            and ensure everything is delivered on time.
          </p>

          <div className="mt-6 flex max-w-2xl flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#B0D5CB] bg-[#D9EBE6] px-4 py-1.5 text-sm font-medium text-[#017958]"
              >
                <span className="text-[#017958]">•</span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:aspect-[3/2] sm:rounded-[32px] lg:aspect-[4/3]">
          <Image
            src={TRACKING_DETAILS_IMAGE_SRC}
            alt="Deliverable tracking preview"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"

          />
        </div>
      </div>
    </section>
  );
}