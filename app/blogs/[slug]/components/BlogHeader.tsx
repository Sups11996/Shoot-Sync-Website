import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogMeta from "./BlogMeta";

export default function BlogHeader({
  category,
  title,
  Author,
  createdAt,
}: {
  category: string;
  title: string;
  Author?: string;
  createdAt: string;
}) {
  return (
    <>
      <Link
        href="/blogs"
        className="group flex w-fit items-center gap-2 text-sm text-[#475569]"
      >
        <ArrowLeft size={16} className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#017958]" />
        <span className="relative overflow-hidden">
          <span>Back to Blogs</span>
          <span className="absolute inset-0 w-0 overflow-hidden whitespace-nowrap text-[#017958] transition-[width] duration-300 ease-out group-hover:w-full">
            Back to Blogs
          </span>
        </span>
      </Link>

      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-full bg-[#D9EBE6] px-4 py-1 text-sm font-medium text-[#016146]">
          {category}
        </span>
        <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
          {title}
        </h1>
        <BlogMeta Author={Author} createdAt={createdAt} />
      </div>
    </>
  );
}