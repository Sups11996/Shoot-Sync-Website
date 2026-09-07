"use client";

import PillBadge from "@/components/common/PillBadge";
import MainHeading from "@/components/common/MainHeading";
import BlogCard from "../blogs/components/BlogCard";
import BlogCardsSkeleton from "../blogs/components/BlogCardsSkeleton";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";
import useApi from "@/hooks/useApi";
import api from "@/services/api/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

type Blog = {
  id: number;
  category: { id: number; name: string };
  title: string;
  short_description: string;
  image: string | null;
  slug: string;
  created_at: string;
  Author?: string;
};

export default function BlogSection() {
  const { data, loading, error, refetch } = useApi(api.getBlogs);

  const blogs: Blog[] = (data?.data?.data ?? []).slice(0, 3);

  const handleRetry = () => {
    if (typeof refetch === "function") {
      refetch();
    } else {
      window.location.reload();
    }
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-5">
        <PillBadge text="Blogs" />
        <MainHeading text="From Our Blog" green="Our Blog" />
        <p className="max-w-4xl text-[16px] text-[#475569] sm:text-lg px-3">
          Simple tips, useful insights, and practical ideas to help you plan
          and manage better shoots.
        </p>
      </div>

      <div className="px-5 sm:px-10 lg:px-16">
        {loading ? (
          <BlogCardsSkeleton />
        ) : error ? (
          <ErrorState title="Couldn't load blogs" onRetry={handleRetry} />
        ) : blogs.length === 0 ? (
          <EmptyState
            title="No blogs available"
            message="Check back later for new posts."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[1130px]:grid-cols-3">
            {blogs.map((blog) => (
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
        )}
      </div>
    </section>
  );
}
