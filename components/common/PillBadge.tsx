type PillBadgeProps = {
  text: string;
};

const PillBadge = ({ text }: PillBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#B0D5CB] bg-[#D9EBE6] px-4 py-1.5 text-sm font-medium text-[#016146]">
      <span className="text-[#017958]">•</span>

      <span>{text}</span>
    </div>
  );
};

export default PillBadge;