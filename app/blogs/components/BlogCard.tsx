import Link from "next/link";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { LuCalendarFold } from "react-icons/lu";
import { resolveImage } from "../[slug]/components/utils";

type BlogCardProps = {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  Author: string;
  date: string;
  image: string | null;
  category: string;
};

export default function BlogCard({
  slug,
  title,
  description,
  Author,
  date,
  image,
  category,
}: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="flex flex-col gap-0 overflow-hidden rounded-[20px] border border-[#CBD5E1] transition-shadow hover:shadow-md"
    >
      {/* Blog Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={resolveImage(image)}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Category */}
        <span className="absolute top-3 right-3 rounded-full bg-[#D8EAE5] px-3 py-1 text-xs font-medium text-[#015A41] shadow-sm backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title */}
        <h2 className="line-clamp-1 min-h-7 text-2xl font-semibold leading-tight text-[#0F172A]">
          {title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 min-h-18 leading-normal text-[#475569]">
          {description}
        </p>

        {/* Author and Date */}
        <div className="mt-auto flex items-center gap-4">
          <div className="flex items-center gap-1">
            <UserRound
              size={18}
              strokeWidth={2.7}
              className="text-[#017958]"
            />

            <span className="text-sm text-[#64748B]">
              {Author}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <LuCalendarFold
              size={18}
              strokeWidth={2.7}
              className="text-[#017958]"
            />

            <span className="text-sm text-[#64748B]">
              {date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}