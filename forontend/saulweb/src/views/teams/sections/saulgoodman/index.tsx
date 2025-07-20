"use client";

import Image from "next/image";
import Link from "next/link";

export default function SaulProfileSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-0">
        <div className="relative z-10 bg-white px-8 py-10 w-full max-w-[600px] md:-mr-[200px]">
          <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
            Saul Goodman
          </h2>

          <p className="text-sm text-[#4B3B00] font-semibold text-justify mb-4">
            Founder. Fixer. Legal Magician.
          </p>

          <p className="text-sm text-[#333] leading-relaxed text-justify mb-4">
            He built this practice on quick thinking, creative strategy, and a
            deep understanding of how to make the law work — for you. He doesn’t
            just defend clients; he outsmarts problems before they hit the
            courtroom.
          </p>

          <p className="text-sm text-[#333] leading-relaxed text-justify mb-6">
            Whether it’s a legal technicality or a full-blown crisis, Saul knows
            exactly what to say, when to say it, and how to make it all go away.
            <span className="font-semibold text-[#4B3B00]">
              {" "}
              Better Call Saul.
            </span>
          </p>
        </div>

        <div className="relative w-full max-w-[750px] h-[300px] md:h-[500px]">
          <Image
            src="/SaulGoodman.webp"
            alt="Saul Goodman in courtroom"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
