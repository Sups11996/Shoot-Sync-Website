import MainHeading from "@/components/common/MainHeading";
import PillBadge from "@/components/common/PillBadge";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-3">
        <PillBadge text="How It Works" />
        <MainHeading text="A Simpler Way to<br>Manage Every Shoot" green="Manage Every Shoot" />
        <span className="text-center text-[#475569]">From planning your first brief to delivering the final content, our platform<br className="hidden md:block" />keeps every step organized, connected, and easy to manage.</span>
    </div>
  )
}
