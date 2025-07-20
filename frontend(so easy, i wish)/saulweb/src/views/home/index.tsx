import BlogPage from "./sections/blog-list";
import OverviewSection from "./sections/company-overview-section";
import HeroSection from "./sections/hero-section";
import Product from "./sections/prodcut_service section";
import TestimonialSection from "./sections/testimonials (dummy)";

export default function HomeView() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <Product />
      <TestimonialSection />
      <BlogPage />
    </div>
  );
}
