"use client";

import { Formik, Form, FormikProps } from "formik";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PostBlogService } from "@/features/blog/api/post.blog";
import { IPostBlogParam } from "@/features/blog/types/blog.interface";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/login/auth.store";

export default function CreateBlogForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const { uuid, role } = useAuthStore.getState(); // Ambil langsung dari store
  console.log("Auth state on mount:", useAuthStore.getState());

  useEffect(() => {
    if (typeof window !== "undefined" && role !== "admin") {
      router.push("/");
    }
  }, [role, router]);

  const initialValues: Omit<IPostBlogParam, "author"> = {
    title: "",
    content: "",
    tag: "",
    category: "",
  };

  const handleSubmit = async (values: Omit<IPostBlogParam, "author">) => {
    try {
      await PostBlogService({
        ...values,
        author: uuid,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to create blog. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props: FormikProps<Omit<IPostBlogParam, "author">>) => {
          const { values, handleChange } = props;

          return (
            <Form className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-md border flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-center text-[#FFD700]">
                Create New Blog
              </h2>

              {errorMessage && (
                <div className="text-center text-red-500 text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                  className="mt-1 rounded-2xl"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium">
                  Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  placeholder="Enter blog content"
                  rows={8}
                  className="mt-1 min-h-[300px] rounded-2xl"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="tag" className="block text-sm font-medium">
                    Tag
                  </label>
                  <Input
                    id="tag"
                    name="tag"
                    value={values.tag}
                    onChange={handleChange}
                    placeholder="Optional tag"
                    className="mt-1 rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium"
                  >
                    Category
                  </label>
                  <Input
                    id="category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    placeholder="Optional category"
                    className="mt-1 rounded-2xl"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="bg-[#FFD700] text-[#2D2D2D] font-bold hover:bg-[#e6c200] rounded-2xl"
              >
                Post Blog
              </Button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
