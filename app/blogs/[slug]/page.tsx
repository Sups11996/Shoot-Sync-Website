"use client";

import { useParams } from "next/navigation";
import useApi from "@/hooks/useApi";
import api from "@/services/api/blog";
import ErrorState from "@/components/common/ErrorState";
import BlogSkeleton from "./components/BlogSkeleton";
import BlogPostView, { type BlogPost } from "./components/BlogPostView";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: listData, loading, error, refetch } = useApi(api.getBlogs);

  const allBlogs: BlogPost[] = listData?.data?.data ?? [];
  const matched = allBlogs.find((b) => b.slug === slug);

  const handleRetry = () =>
    typeof refetch === "function" ? refetch() : window.location.reload();

  if (loading) return <BlogSkeleton />;

  if (error || (!loading && !matched)) {
    return (
      <main className="px-5 pt-10 pb-16 sm:px-10 lg:px-16">
        <ErrorState title="Blog not found" onRetry={handleRetry} />
      </main>
    );
  }

  return <BlogPostView blogId={matched!.id.toString()} />;
}