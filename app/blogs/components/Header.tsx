import MainHeading from "@/components/common/MainHeading";
import PillBadge from "@/components/common/PillBadge";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-3">
        <PillBadge text="Blogs" />
        <MainHeading text="Shoot Sync Blog" green="Shoot Sync" /> 
        <span className="text-[#475569] text-center">Explore simple guides, helpful insights, and practical advice<br className="hidden min-[497px]:block" />for smoother, more organized shoots.</span>
    </div>
  )
}
