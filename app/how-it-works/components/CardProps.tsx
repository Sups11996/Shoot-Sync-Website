import { ComponentType } from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

interface CardsProps {
  badge: string | number;
  icon: ComponentType<IconProps>;
  heading: string;
  description: string;

  iconSize?: number;
  iconStrokeWidth?: number;
  iconClassName?: string;
}

export default function CardProps({
  badge,
  icon: Icon,
  heading,
  description,
  iconSize = 24,
  iconStrokeWidth = 1.8,
  iconClassName = "text-emerald-700",
}: CardsProps) {
  return (
    <div className="relative ">
      {/* Number Badge */}
      <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#017958] text-white">
        {badge}
      </div>

      {/* Card */}
      <div className="flex flex-col gap-5 rounded-[24px] border border-[#B0D5CB] bg-[#E6F2EE] p-7">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#B0D5CB]">
          <Icon
            size={iconSize}
            strokeWidth={iconStrokeWidth}
            className={iconClassName}
          />
        </div>

        {/* Heading + Description */}
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-[#017958]">
            {heading}
          </p>

          <p className="text-[#015B42]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}