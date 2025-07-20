"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jesse Pinkman",
    image: "/testimonial/jesse.webp",
    quote:
      "Yo, I don’t even know what he did, man. One second I'm like, totally screwed, right? Cops everywhere, paperwork taller than Badger. Then Saul rolls in, all like 'relax, I got this' — next thing I know, I’m eating Funyuns on my couch. Dude’s like legal Houdini. Better. Call. Saul.",
  },
  {
    name: "Heisenberg",
    image: "/testimonial/heisenberg.jpg",
    quote:
      "Saul is… effective. When certain variables became volatile, he applied pressure — strategically. Outcomes were controlled, assets remained untouched. I don’t rely on many people. But when the stakes are high and silence is survival… I call Saul.",
  },
  {
    name: "Nacho Varga",
    image: "/testimonial/nacho.jpg",
    quote:
      "Everything was falling apart. I mean—fast. Saul shows up wearing that god-awful tie, starts talking faster than I can blink, and somehow the fire turns into smoke. Not gone, just… redirected. I didn’t trust him at first. Now? I owe him more than I’ll admit. Better Call Saul.",
  },
  {
    name: "Lalo Salamanca",
    image: "/testimonial/lalo.png",
    quote:
      "The gringos said I wasn’t going anywhere. Ha! Then Saul walks in — smiling like he’s hosting a game show — and poof, I’m back home making salsa. I don’t know how he did it. I don’t *want* to know. That’s his art. Beautiful stuff. Better Call Saul.",
  },
  {
    name: "Huell Babineaux",
    image: "/testimonial/huell.webp",
    quote:
      "Cops said, ‘You’re in deep.’ Saul said, ‘Don’t move.’ So I didn’t. Two days later? Boom — no charges, no nothing. Just me and a bucket of wings. I don’t even ask questions anymore. If Saul’s involved, I just chill. Works every time. Better Call Saul.",
  },
  {
    name: "Mike Ehrmantraut",
    image: "/testimonial/mike.webp",
    quote:
      "I don’t give out compliments. Not my style. But I’ve seen Saul talk his way through steel doors, courtrooms, and people who don’t usually talk back. He’s a wildcard. But sometimes? That’s exactly what you need. Better Call Saul.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-12 text-center">
          From “You’re Screwed” to “You’re Free” — Testimonials.{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((person, index) => (
            <Card
              key={index}
              className="p-6 bg-yellow-50 border border-yellow-400/40 shadow-md flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage
                    src={person.image}
                    alt={person.name}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-base font-semibold text-[#4B3B00]">
                    {person.name}
                  </h3>
                  <p className="text-xs text-gray-500">Former Client</p>
                </div>
              </div>
              <p className="text-sm text-[#333] leading-relaxed text-left">
                “{person.quote}”
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
