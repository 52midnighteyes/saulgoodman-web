"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-[#4B3B00] text-[#FFE066] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <Card className="bg-transparent border-none text-[#FFE066] shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/better_callsaul.svg.png"
                alt="saul-goodman-logo"
                width={48}
                height={48}
                className="rounded-md"
              />
              <h3 className="text-xl font-bold tracking-tight">Saul Goodman</h3>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Attorney at Law. Real defense for real people — from parking
              tickets to felony charges, I’ve got your back. When justice gets
              slippery, <span className="font-bold">BETTER CALL SAUL.</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none text-[#FFE066] shadow-none">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none text-[#FFE066] shadow-none">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Albuquerque, NM
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (505) 503-4455
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <Link
                  href="https://wa.me/15055034455"
                  target="_blank"
                  className="hover:underline"
                >
                  Chat via WhatsApp
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:saul@bettercallsaul.com"
                  className="hover:underline"
                >
                  saul@bettercallsaul.com
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 pt-6 border-t border-[#FFE066]/30 text-center text-xs text-[#FFE066]/70">
        © {new Date().getFullYear()} Saul Goodman, Attorney at Law. All rights
        reserved.
      </div>
    </footer>
  );
}
