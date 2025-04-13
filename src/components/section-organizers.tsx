"use client"

import Image from "next/image"
import { RippleButton } from "./ripple-button"

export function SectionOrganizers() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
                Zarządzaj turniejem jak profesjonalista
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#F27507] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Panel zarządzania drużynami i harmonogramem</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#F27507] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Zgłoszenia i płatności online</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#F27507] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Wyniki na żywo i komunikacja z uczestnikami</span>
                </li>
              </ul>
            </div>
            <div>
              <RippleButton
                className="bg-[#F27507] hover:bg-[#F27507]/90 text-white h-12 px-6 text-base"
                onClick={() => alert("Dodaj swój turniej")}
              >
                Dodaj swój turniej
              </RippleButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Admin+Panel"
              width={500}
              height={300}
              alt="Admin panel illustration"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
