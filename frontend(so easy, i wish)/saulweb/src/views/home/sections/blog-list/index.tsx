"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IPostBlogResult } from "@/features/blog/types/blog.interface";
import { GetAllBlogService } from "@/features/blog/api/get.blog";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IPostBlogResult[]>([]);

  useEffect(() => {
    const fetchAllBlogData = async () => {
      try {
        const response = await GetAllBlogService();
        setBlogs(response);
      } catch (err) {
        console.error("Failed to fetch blog data", err);
      }
    };
    fetchAllBlogData();
  }, []);

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bcs-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow">
          Latest Legal Cases
        </h1>
        <p className="text-gray-300 text-sm mt-2">
          Exclusive legal updates from Saul's desk
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs
          .slice(-3)
          .reverse()
          .map((blog) => (
            <Card
              key={blog.slug}
              className="bg-[#2c2c2c]/90 border border-yellow-500/30 hover:border-yellow-300 shadow-md hover:shadow-yellow-500/20 transition cursor-pointer flex flex-col justify-between p-5 text-left"
            >
              <div>
                <h3 className="text-lg font-bold text-yellow-300 mb-1">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-400 mb-2">
                  {new Date(blog.published_date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {blog.content.slice(0, 300)}...
                </p>
              </div>
              <div className="mt-4">
                <Link href={`/blog/${blog.slug}`}>
                  <Button className="bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold text-sm hover:text-white px-5">
                    Read Full
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
