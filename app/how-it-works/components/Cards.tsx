import { NotebookPen, UsersRound, Check, SendHorizontal } from "lucide-react";
import { LuCalendarFold } from "react-icons/lu";

import CardProps from "./CardProps";

const cards = [
  {
    badge: 1,
    icon: NotebookPen,
    heading: "Create Your Shoot",
    description:
      "Start by creating a new project and adding all the important details, including the brief, schedule, requirements, and deadlines.",
  },
  {
    badge: 2,
    icon: UsersRound,
    heading: "Add Your Team",
    description:
      "Invite your team members, creatives, and clients to keep everyone involved and connected throughout the shoot.",
  },
  {
    badge: 3,
    icon: LuCalendarFold,
    heading: "Plan & Organize",
    description:
      "Assign tasks, manage schedules, share references, and organize everything your team needs before the shoot begins.",
  },
  {
    badge: 4,
    icon: Check,
    heading: "Collaborate & Approve",
    description:
      "Keep communication in one place, collect feedback, review content, and get approvals without endless back-and-forth.",
  },
  {
    badge: 5,
    icon: SendHorizontal,
    heading: "Deliver & Wrap Up",
    description:
      "Organize final assets, track deliverables, and share completed content with the right people—quickly and easily.",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col gap-8 min-[1200px]:px-65">
      {cards.map((card) => (
        <CardProps key={card.badge} {...card} />
      ))}
    </div>
  );
}
