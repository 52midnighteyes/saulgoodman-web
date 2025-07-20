import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanyProfileSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0">
        <div className="relative z-10 bg-white px-8 py-10 w-full max-w-[600px] md:-mr-[200px]">
          <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
            The lawyer you call when the other guy folds.
          </h2>

          <p className="text-sm text-[#4B3B00] font-semibold text-justify mb-4">
            I’m Saul Goodman — the guy who knows the system so well, I can bend
            it without breaking it.
          </p>

          <p className="text-sm text-[#333] leading-relaxed text-justify mb-4">
            I’ve represented folks from both sides of the moral compass — the
            unlucky, the misunderstood, and the ones who just needed things to
            *go away*. While others preach justice, I deliver solutions. Fast,
            quiet, and smarter than the other guy.
          </p>

          <p className="text-sm text-[#333] leading-relaxed text-justify mb-6">
            Whether you’re staring down a courtroom or trying to avoid one
            altogether, I’ve got a strategy for you. This isn’t about right or
            wrong. This is about winning — and nobody wins like Saul Goodman.
          </p>

          <Link href="/about">
            <Button className="bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold text-sm px-5">
              Call Saul{" "}
            </Button>
          </Link>
        </div>

        <div className="relative w-full max-w-[750px] h-[300px] md:h-[500px]">
          <Image
            src="/bcs-bg.jpg"
            alt="Background City Saul"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
