import { Inbox, AlertTriangle, LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  message?: string;
  variant?: "empty" | "error";
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  message,
  variant = "empty",
  className = "",
}: EmptyStateProps) {
  const Icon = icon ?? (variant === "error" ? AlertTriangle : Inbox);

  const defaults = {
    empty: {
      title: "Nothing here yet",
      message: "Check back later.",
      iconWrap: "bg-neutral-100 text-neutral-400",
    },
    error: {
      title: "Something went wrong",
      message: "We couldn't load this data. Please try again.",
      iconWrap: "bg-red-50 text-red-400",
    },
  }[variant];

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-6 py-16 text-center ${className}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${defaults.iconWrap}`}>
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {title ?? defaults.title}
      </h3>
      <p className="text-sm text-gray-500">{message ?? defaults.message}</p>
    </div>
  );
}