import TeamSection from "../about-us/sections/team-section";
import SaulProfileSection from "./sections/saulgoodman";

export default function TeamsView() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-extrabold text-[#4B3B00] bg-white drop-shadow-sm pt-20">
        Who’s Behind the Magic?
      </h1>{" "}
      <SaulProfileSection />
      <TeamSection />
    </div>
  );
}
