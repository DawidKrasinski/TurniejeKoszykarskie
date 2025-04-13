"use client"

import { useState } from "react"
import Link from "next/link"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface MainHeaderProps {
  activePage?: string
}

export function MainHeader({ activePage }: MainHeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = ["Dla zawodników", "Dla organizatorów", "Turnieje", "Kontakt"]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-boldonse text-xl font-bold tracking-tight md:text-2xl">TurniejeKoszykarskie.pl</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md p-2 text-[#06010D] hover:bg-[#F27507]/10"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "Turnieje" ? "/turnieje" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activePage === item ? "text-[#F27507]" : "text-[#06010D] hover:text-[#F27507] hover:bg-[#F27507]/5",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/logowanie"
            className="px-4 py-2 text-sm font-medium text-[#06010D] hover:text-[#F27507] hover:bg-[#F27507]/5 rounded-md transition-colors"
          >
            Zaloguj się
          </Link>
          <Link
            href="/rejestracja"
            className="px-4 py-2 text-sm font-medium bg-[#F27507] text-white rounded-md hover:bg-[#F27507]/90 transition-colors flex items-center"
          >
            <User className="mr-2 h-4 w-4" />
            Załóż konto
          </Link>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <div className="container px-4 py-3">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Turnieje" ? "/turnieje" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      activePage === item
                        ? "text-[#F27507]"
                        : "text-[#06010D] hover:text-[#F27507] hover:bg-[#F27507]/5",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="pt-2 border-t flex flex-col space-y-2">
                  <Link
                    href="/logowanie"
                    className="px-4 py-2 text-sm font-medium text-[#06010D] hover:text-[#F27507] hover:bg-[#F27507]/5 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Zaloguj się
                  </Link>
                  <Link
                    href="/rejestracja"
                    className="px-4 py-2 text-sm font-medium bg-[#F27507] text-white rounded-md hover:bg-[#F27507]/90 transition-colors flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Załóż konto
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
