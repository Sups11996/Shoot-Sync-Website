"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import BlogCard from "./BlogCard";

type Blog = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  title: string;
  short_description: string;
  long_description: string;
  image: string | null;
  is_published: boolean;
  slug: string;
  created_at: string;
  Author?: string;
};

type CardsProps = {
  blogs: Blog[];
};

function getPageSize(): number {
  if (typeof window === "undefined") return 9;
  const width = window.innerWidth;
  if (width >= 1130) return 9;
  if (width >= 640) return 4;
  return 3;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function Cards({ blogs }: CardsProps) {
  const [pageSize, setPageSize] = useState(getPageSize);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    handleResize(); // correct value right after mount (in case SSR guess was off)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = pageSize * page;
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  const handleClick = useCallback(() => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    } else {
      setPage(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hasMore]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[1130px]:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            slug={blog.slug}
            title={blog.title}
            description={blog.short_description}
            image={blog.image}
            category={blog.category.name}
            Author={blog.Author ?? "Author"}
            date={formatDate(blog.created_at)}
          />
        ))}
      </div>

      {blogs.length > pageSize && (
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="flex items-center gap-2 rounded-full border border-[#017958] px-6 py-2.5 text-sm font-medium text-[#017958] transition-colors hover:bg-[#017958] hover:text-white"
          >
            {hasMore ? (
              <>
                Read More <ArrowDown size={16} strokeWidth={2.5} />
              </>
            ) : (
              <>
                Top <ArrowUp size={16} strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}