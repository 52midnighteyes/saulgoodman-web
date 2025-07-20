"use client";

import { useEffect, useState } from "react";
import { GetAllBlogService } from "@/features/blog/api/get.blog";
import { IPostBlogResult } from "@/features/blog/types/blog.interface";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AllBlogPostView() {
  const [blogs, setBlogs] = useState<IPostBlogResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllBlogService();
        setBlogs(data);
      } catch (err: any) {
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="p-6 text-center text-gray-400">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-400">{error}</p>;

  return (
    <main className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-[#4B3B00] text-center mb-10">
          Legal Cases Archive
        </h1>

        {blogs.map((blog) => (
          <Card
            key={blog.slug}
            className="bg-[#2c2c2c] border border-yellow-500/20 shadow-md"
          >
            <CardContent className="p-6 space-y-4">
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-bold text-yellow-300 hover:underline">
                  {blog.title}
                </h2>
              </Link>

              <div className="text-sm text-gray-400 space-y-1">
                <p>
                  <span className="font-medium text-white">Author:</span> Saul
                  Goodman
                </p>
                <p>
                  <span className="font-medium text-white">Published:</span>{" "}
                  {new Date(blog.published_date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium text-white">Tag:</span>{" "}
                  {blog.tag} –{" "}
                  <span className="font-medium text-white">Category:</span>{" "}
                  {blog.category}
                </p>
              </div>

              <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                {blog.content.slice(0, 300)}...
              </p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-sm text-yellow-400 hover:underline font-medium"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
