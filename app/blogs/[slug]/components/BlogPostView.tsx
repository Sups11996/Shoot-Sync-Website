"use client";

import useApi from "@/hooks/useApi";
import api from "@/services/api/blog";
import ErrorState from "@/components/common/ErrorState";
import BlogSkeleton from "./BlogSkeleton";
import BlogHeader from "./BlogHeader";
import BlogHeroImage from "./BlogHeroImage";
import BlogBody from "./BlogBody";

export type BlogPost = {
  id: number;
  category: { id: number; name: string };
  title: string;
  short_description: string;
  long_description: string;
  image: string | null;
  is_published: boolean;
  slug: string;
  created_at: string;
  Author?: string;
};

export default function BlogPostView({ blogId }: { blogId: string }) {
  const { data, loading, error, refetch } = useApi(api.getBlogById, blogId);
  const post: BlogPost | undefined = data?.data;

  const handleRetry = () =>
    typeof refetch === "function" ? refetch() : window.location.reload();

  if (loading) return <BlogSkeleton />;

  if (error || !post || !post.is_published) {
    return (
      <main className="px-5 pt-10 pb-16 sm:px-10 lg:px-16">
        <ErrorState title="Couldn't load this blog" onRetry={handleRetry} />
      </main>
    );
  }

  return (
    <main className="px-5 pt-10 pb-16 sm:px-10 lg:px-16">
      <article className="mx-auto flex max-w-3xl flex-col gap-8">
        <BlogHeader
          category={post.category.name}
          title={post.title}
          Author={post.Author}
          createdAt={post.created_at}
        />
        <BlogHeroImage image={post.image} title={post.title} />
        <BlogBody content={post.long_description} />
      </article>
    </main>
  );
}