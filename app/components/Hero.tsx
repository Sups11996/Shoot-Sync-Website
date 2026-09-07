import PillBadge from "@/components/common/PillBadge";
import Button from "../../components/common/Button";
import { ShieldCheck, Lightbulb, Users } from "lucide-react";
import MainHeading from "@/components/common/MainHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "No Hidden Fees",
    description: "What you see is what you pay.",
  },
  {
    icon: Lightbulb,
    title: "No Guesswork",
    description: "Just Clear and Simple Collaboration.",
  },
  {
    icon: Users,
    title: "Trusted by Creators",
    description: "Built for Better Workflows.",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 sm:pb-10 sm:px-10 lg:px-16 ">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-5">
        {/* Pill badge */}
        <PillBadge text="No. 1 Shoot Management Software" />

        {/* Headline */}
        <MainHeading
          text="Manage Your Shoots,<br>Teams, & Deadlines in One Place."
          green="in One Place."
        />

        {/* Subtext */}
        <p className="max-w-197.5 text-[16px] text-[#475569] sm:text-lg">
          Everything you need to plan, organize, review, approve, collaborate
          on, and receive amazing content—bringing your entire creative workflow
          together in one seamless, powerful place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            text="Start 14-Days Free Trial"
            variant="primary"
            className="w-full sm:w-auto"
          />

          <Button
            text="View Demo"
            variant="secondary"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Feature row */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-12">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-center gap-3 text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F2EE]">
                <Icon className="h-5 w-5 text-[#017958]" strokeWidth={2} />
              </span>
              <div>
                <p className="text-base font-medium text-[#017958]">{title}</p>
                <p className="text-[12px] font-medium text-[#334155]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
