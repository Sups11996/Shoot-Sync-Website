import Image from "next/image";
import { Camera, Users, Clock, ClipboardCheck, File } from "lucide-react";
import DeliveryIcon from "../../../public/assets/about-us/Delivery.png";
import PillBadge from "@/components/common/PillBadge";
import MainHeading from "@/components/common/MainHeading";


const features = [
  {
    icon: Camera,
    title: "Smart Shoot Planning",
    desc: "Plan every shoot with briefs, schedules, tasks, and team assignments—all organized in one place.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    desc: "Keep your team and clients connected with centralized feedback, reviews, comments, and approvals.",
  },
  {
    icon: Clock,
    title: "Real-Time Progress Tracking",
    desc: "Know exactly what's happening with every shoot, task, deadline, and deliverable at a glance.",
  },
  {
    icon: ClipboardCheck,
    title: "Easy Content Approval",
    desc: "Share work, collect feedback, and get approvals faster without endless messages or scattered conversations.",
  },
  {
    icon: File,
    title: "Centralized Asset Management",
    desc: "Keep briefs, files, references, and final content organized and easy to access whenever you need them.",
  },
  {
    image: DeliveryIcon,
    title: "Smooth Content Delivery",
    desc: "Manage final deliverables and keep everything on track from the first shoot brief to the final handoff.",
  },
];

export default function CoreSolution() {
  return (
    <section className="w-full bg-white pb-10 pt-6 sm:pb-14 sm:pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-20">
      <div className="mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <PillBadge text="Core Feautres" />
          </div>

          <MainHeading text="Our Core Solution"
          green="Core Solution"/>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
            From creating briefs and managing schedules to collecting
            feedback, approving content, and delivering final assets, our
            platform keeps the entire workflow connected.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {features.map(({ icon: Icon, image, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-2xl border border-neutral-200 bg-white p-6 text-left transition hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D9EBE6]">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  Icon && (
                    <Icon className="h-5 w-5 text-[#016146]" strokeWidth={2} />
                  )
                )}
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569] ">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}