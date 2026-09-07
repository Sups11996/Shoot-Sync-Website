import Image from "next/image";

const SHOOT_DETAILS_IMAGE_SRC = "/assets/homePage/feature10.png";
const NOTEBOOK_LOGO = "/assets/homePage/notebook-logo.png";

const tags = [
  "Smart Planning",
  "Easy Scheduling",
  "Task Management",
  "Team Assignment",
];

export default function PlanOrganizeSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9EBE6]">
            <Image
              src={NOTEBOOK_LOGO}
              alt="notebook-logo"
              width={24}
              height={24}
              loading="eager"
            />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]">
            Plan &amp; Organize Every Shoot
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569]">
            Create detailed shoot briefs, manage schedules, assign
            responsibilities, and keep all your important project
            information organized in one place.
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

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px] sm:rounded-[32px]">
            <Image
              src={SHOOT_DETAILS_IMAGE_SRC}
              alt="Shoot details planning preview"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}