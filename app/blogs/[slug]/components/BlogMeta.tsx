import { UserRound } from "lucide-react";
import { LuCalendarFold } from "react-icons/lu";
import { formatDate } from "./utils";

export default function BlogMeta({
  Author,
  createdAt,
}: {
  Author?: string;
  createdAt: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <UserRound size={18} strokeWidth={2.7} className="text-[#017958]" />
        <span className="text-sm text-[#64748B]">{Author ?? "Author"}</span>
      </div>
      <div className="flex items-center gap-1">
        <LuCalendarFold size={18} strokeWidth={2.7} className="text-[#017958]" />
        <span className="text-sm text-[#64748B]">{formatDate(createdAt)}</span>
      </div>
    </div>
  );
}