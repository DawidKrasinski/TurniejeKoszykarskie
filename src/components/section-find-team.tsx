"use client"

import Image from "next/image"
import { RippleButton } from "./ripple-button"

export function SectionFindTeam() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
                Szukasz drużyny?
              </h2>
              <p className="text-[#06010D]/80 md:text-lg">
                Nie masz zespołu? Dołącz do jednej z otwartych drużyn lub pokaż, że jesteś gotowy do gry.
              </p>
            </div>
            <div>
              <RippleButton
                className="bg-[#F27507] hover:bg-[#F27507]/90 text-white h-12 px-6 text-base"
                onClick={() => alert("Znajdź drużynę")}
              >
                Znajdź drużynę
              </RippleButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="Player looking at phone"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
