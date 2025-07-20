"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[800px] w-full px-6 py-24 bg-[url('/bg-saul.jpg')] bg-cover bg-center text-white flex justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-6 backdrop-blur-md rounded-xl p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFD700] leading-tight text-left">
            Saul Goodman, Attorney at Law
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed text-justify">
            In trouble? Let’s be honest —{" "}
            <span className="font-semibold text-[#FFD700]">
              you don’t need justice, you need a win.
            </span>{" "}
            Saul Goodman brings legal firepower with street smarts, delivering
            fast, strategic defense no matter how messy things look.
          </p>

          <p className="text-base md:text-lg text-white/90 leading-relaxed text-justify">
            Whether you're facing charges, lawsuits, or something that
            requires... discretion —{" "}
            <span className="font-semibold text-[#FFD700]">
              I get results where others fold.
            </span>
          </p>

          <p className="text-base md:text-lg font-semibold text-[#FFD700] text-justify">
            Better Call Saul —{" "}
            <span className="text-white italic">
              because losing is for amateurs.
            </span>
          </p>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <div className="aspect-video w-full max-w-[640px] rounded-xl overflow-hidden border border-white/20">
            <video controls playsInline className="w-full h-full object-cover">
              <source
                src="https://mefrqsnzvoqiqlfroixb.supabase.co/storage/v1/object/public/videos/saul_header.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
