"use client";

import { useState } from "react";
import Link from "next/link";
import { RippleButton } from "./ripple-button";
import { User, LogOut } from "lucide-react";

interface HeaderProps {
  activePage?: string;
}

export function Header({ activePage }: HeaderProps) {
  const menuItems = [
    "Dla Zawodników",
    "Dla Organizatorów",
    "Turnieje",
    "Kontakt",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo centered */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-boldonse text-xl font-bold tracking-tight md:text-2xl">
              TurniejeKoszykarskie.pl
            </span>
          </Link>
        </div>

        {/* Navigation and auth buttons */}
        <div className="flex items-center">
          <nav className="hidden md:flex mr-10">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "Turnieje"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className={`text-sm font-medium transition-colors px-5 ${
                  activePage === item
                    ? "text-[#F27507]"
                    : "text-[#06010D] hover:text-[#F27507]"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-5">
            {/* Login button (visible when not logged in) */}
            <Link href="/logowanie">
              <RippleButton
                variant="outline"
                className="border-[#F27507]/20 hover:bg-[#F27507]/20 text-[#06010D] hover:text-[#06010D] font-medium"
              >
                Zaloguj się
              </RippleButton>
            </Link>

            {/* Register button (visible when not logged in) */}
            <Link href="/rejestracja">
              <RippleButton className="bg-[#F27507] hover:bg-[#F27507]/90 text-white">
                <User className="mr-2 h-4 w-4" />
                Załóż konto
              </RippleButton>
            </Link>
          </div>

          {/* Mobile user menu button */}
          <RippleButton
            variant="outline"
            size="icon"
            className="md:hidden ml-6"
            onClick={() => alert("Menu użytkownika")}
          >
            <User className="h-6 w-6" />
            <span className="sr-only">Menu użytkownika</span>
          </RippleButton>
        </div>
      </div>
    </header>
  );
}
