export default function CultureSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="text-left">
          <div className="w-10 h-1 bg-[#4B3B00] mb-4"></div>
          <h2 className="text-4xl font-extrabold text-[#4B3B00] leading-snug tracking-tight">
            Culture at
            <br />
            Saul Goodman, Attorney at Law
          </h2>
        </div>

        <div className="text-[17px] leading-relaxed text-gray-800 space-y-6">
          <p>
            At{" "}
            <span className="font-semibold text-[#4B3B00]">
              Saul Goodman, Attorney at Law
            </span>
            , we operate on a simple principle: the law may be rigid, but how
            you move within it is an art form. We’re fast, precise, and a little
            unconventional — and that’s exactly how our clients like it.
          </p>

          <p>
            Our workplace thrives on sharp thinking, strategic risk-taking, and
            a shared commitment to getting results — whether in the courtroom or
            behind the scenes. We skip the small talk, cut through the red tape,
            and deliver what matters most: solutions that work.
          </p>

          <p>
            Around here, professionalism doesn’t mean wearing a tie — it means
            knowing exactly what needs to be done, and doing it with style. We
            value loyalty, agility, and a good sense of humor when the
            pressure’s on. It's not just legal work. It's{" "}
            <span className="italic text-[#4B3B00]">Goodman work</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
