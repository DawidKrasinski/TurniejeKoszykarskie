"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { RippleButton } from "./ripple-button"

export function HeroSection() {
  const router = useRouter()

  const scrollToTournamentSearch = () => {
    window.scrollTo({
      top: document.getElementById("tournament-search")?.offsetTop,
      behavior: "smooth",
    })
  }

  const navigateToRegistration = () => {
    router.push("/rejestracja")
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-boldonse text-4xl font-extrabold tracking-wide sm:text-6xl xl:text-7xl/none text-[#06010D] mb-6">
                Znajdź swój kolejny turniej. Graj. Wygrywaj.
              </h1>
              <p className="max-w-[600px] text-[#06010D]/80 md:text-xl mb-8">
                Setki turniejów w całej Polsce – zapisz się w kilka kliknięć.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <RippleButton
                className="bg-[#F27507] hover:bg-[#F27507]/90 text-white h-14 px-8 text-lg"
                onClick={scrollToTournamentSearch}
              >
                Wyszukaj turniej
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-[#BF3111] text-[#BF3111] hover:bg-[#BF3111]/10 hover:text-[#06010D] h-14 px-8 text-lg"
                onClick={navigateToRegistration}
              >
                Dołącz do społeczności
              </RippleButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero.png"
              width={600}
              height={400}
              alt="Basketball players"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
