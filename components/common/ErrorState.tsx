import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry: () => void;
  className?: string;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this content. Please try again.",
  onRetry,
  className = "",
}: ErrorStateProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-red-100 bg-red-50 px-6 py-16 text-center ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
        <AlertTriangle className="h-7 w-7 text-red-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 cursor-pointer"
      >
        <RefreshCw className="h-4 w-4" />
        Retry
      </button>
    </div>
  );
}