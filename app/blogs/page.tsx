"use client";

import BlogCards from "./components/Cards";
import Header from "./components/Header";
import CtaSection from "../../components/common/CtaSection";
import useApi from "@/hooks/useApi";
import api from "@/services/api/blog";
import BlogCardsSkeleton from "./components/BlogCardsSkeleton";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

export default function Blogs() {
  const { data: blog, loading, error, refetch } = useApi(api.getBlogs);

  const blogs = blog?.data?.data ?? [];

  const handleRetry = () => {
    if (typeof refetch === "function") {
      refetch();
    } else {
      window.location.reload();
    }
  };

  return (
    <main className="my-11 flex flex-col gap-8 px-5 sm:px-10 lg:px-16">
      <Header />

      <div className="flex flex-col gap-22">
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
          <BlogCards blogs={blogs} />
        )}

        <CtaSection />
      </div>
    </main>
  );
}
