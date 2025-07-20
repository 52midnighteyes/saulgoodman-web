"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import useAuthStore from "@/store/login/auth.store";

export default function Navbar() {
  const { isLogin, onLogOut } = useAuthStore();

  return (
    <header className="w-full bg-[#FFD700] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[75px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/better_callsaul.svg.png"
            alt="saul-goodman-logo"
            width={60}
            height={60}
            style={{ height: "auto" }}
          />
          <span className="font-extrabold text-[#2D2D2D] text-lg hidden md:block leading-tight">
            Saul Goodman <br /> Attorney at Law
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 font-semibold text-[#2D2D2D] text-sm">
          <Link href="/pages/about-us">About Us</Link>
          <Link href="/pages/services">Services</Link>
          <Link href="/pages/teams">Teams</Link>
          <Link href="/pages/blog">Blog</Link>
        </nav>

        <div className="hidden md:flex gap-3 items-center">
          {isLogin ? (
            <>
              <Link href="/pages/create-blog">
                <Button
                  variant="outline"
                  className="border-[#4B3B00] text-[#4B3B00] hover:bg-[#4B3B00]/10 font-semibold"
                >
                  Create Blog
                </Button>
              </Link>
              <Button
                onClick={onLogOut}
                className="bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/pages/auth/login">
                <Button
                  variant="outline"
                  className="border-[#4B3B00] text-[#4B3B00] hover:bg-[#4B3B00]/10 font-semibold"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/pages/auth/register">
                <Button className="bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#4B3B00]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[300px] px-6 py-6"
            >
              <SheetHeader>
                <SheetTitle className="text-xl text-[#4B3B00]">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4 text-sm font-medium text-[#2D2D2D]">
                <Link href="/pages/about-us">About Us</Link>
                <Link href="/pages/services">Services</Link>
                <Link href="/pages/teams">Teams</Link>
                <Link href="/pages/blog">Blog</Link>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                {isLogin ? (
                  <>
                    <Link href="/blog/create">
                      <Button
                        variant="outline"
                        className="w-full border-[#4B3B00] text-[#4B3B00] hover:bg-[#4B3B00]/10 font-semibold"
                      >
                        Create Blog
                      </Button>
                    </Link>
                    <Button
                      onClick={onLogOut}
                      className="w-full bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold"
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/pages/auth/login">
                      <Button
                        variant="outline"
                        className="w-full border-[#4B3B00] text-[#4B3B00] hover:bg-[#4B3B00]/10 font-semibold"
                      >
                        Log In
                      </Button>
                    </Link>
                    <Link href="/pages/auth/register">
                      <Button className="w-full bg-[#4B3B00] text-[#FFD700] hover:bg-[#3C3000] font-semibold">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
