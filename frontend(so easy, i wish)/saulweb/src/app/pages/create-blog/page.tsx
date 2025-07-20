import CreateBlogForm from "@/views/blog/blog-create";

export default function CreateBlogPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <CreateBlogForm />
      </div>
    </section>
  );
}
