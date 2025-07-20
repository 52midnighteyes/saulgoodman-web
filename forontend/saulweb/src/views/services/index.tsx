import ProductSection from "../home/sections/prodcut_service section";
import TestimonialSection from "../home/sections/testimonials (dummy)";
export default function ServicesView() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-extrabold text-[#4B3B00] bg-white drop-shadow-sm p-20">
        The Goodman Package{" "}
      </h1>
      <ProductSection />
      <TestimonialSection />
    </div>
  );
}
