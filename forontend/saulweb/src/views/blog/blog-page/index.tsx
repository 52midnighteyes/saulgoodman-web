"use client";

import { useEffect, useState } from "react";
import { GetPostBlogService } from "@/features/blog/api/get.blog";
import { IPostBlogResult } from "@/features/blog/types/blog.interface";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<IPostBlogResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPostBlogService(slug);
        setBlog(data);
      } catch (err: any) {
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading)
    return <p className="p-6 text-center text-gray-600">Loading...</p>;
  if (error || !blog)
    return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <main className="min-h-screen py-20 px-6 bg-[#1c1c1c]">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-md border-gray-200">
          <CardContent className="p-6 md:p-10 space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Author:</span> Saul
                Goodman
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Published:</span>{" "}
                {new Date(blog.published_date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Tag:</span>{" "}
                {blog.tag} –{" "}
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {blog.category}
              </p>
            </div>

            <article className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
              {blog.content}
            </article>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
