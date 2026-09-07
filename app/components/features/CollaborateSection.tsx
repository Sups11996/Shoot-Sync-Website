import Image from "next/image";

const COLLABORATE_DETAILS_IMAGE_SRC = "/assets/homePage/feature20.png";
const COLLABORATE_LOGO = "/assets/homePage/collaborate-logo.png";

const tags = [
  "Team Collaboration",
  "Instant Feedback",
  "Quick Reviews",
  "Fast Approvals",
];

export default function CollaborateSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left: diagram card — natural size inside a padded rounded box, not a forced full-bleed photo crop */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#D9EBE6] p-6 sm:aspect-[3/2] sm:rounded-[32px] sm:p-10 lg:aspect-[4/3] border border-[#B0D5CB]">
          <Image
            src={COLLABORATE_DETAILS_IMAGE_SRC}
            alt="Team collaboration and review preview"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain  p-6 sm:p-10"
          />
        </div>

        {/* Right: text content */}
        <div className="w-full">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9EBE6]">
            <Image
              src={COLLABORATE_LOGO}
              alt="collaborate-logo"
              width={24}
              height={24}
              loading="eager"
            />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]">
            Collaborate, Review &amp; Approve
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569]">
            Bring your team and clients together for faster feedback,
            smoother reviews, and quick approvals.
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
      </div>
    </section>
  );
}