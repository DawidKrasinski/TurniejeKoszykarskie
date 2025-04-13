"use client"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RippleButton } from "@/components/ripple-button"
import { SectionContainer } from "@/components/section-container"

export default function PlayersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        @font-face {
          font-family: 'Boldonse';
          src: url('/fonts/boldonse.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-boldonse {
          font-family: 'Boldonse', sans-serif;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
          color: #06010D;
        }
      `}</style>

      <Header activePage="Dla Zawodników" />

      <main className="flex-1">
        {/* Hero Section */}
        <SectionContainer>
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-boldonse text-4xl font-extrabold tracking-wide sm:text-5xl xl:text-6xl/none text-[#06010D] mb-6">
                  Graj więcej, martw się mniej
                </h1>
                <p className="max-w-[600px] text-[#06010D]/80 md:text-xl mb-8">
                  Znajdź turnieje w swojej okolicy, dołącz do drużyny i śledź swoje statystyki.
                </p>
              </div>
              <div>
                <RippleButton
                  className="bg-[#F27507] hover:bg-[#F27507]/90 text-white h-14 px-8 text-lg"
                  onClick={() => alert("Znajdź turniej")}
                >
                  Znajdź turniej
                </RippleButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Zawodnicy+Koszykówki"
                width={600}
                height={400}
                alt="Zawodnicy koszykówki"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </SectionContainer>

        {/* More sections would go here */}
      </main>

      <Footer />
    </div>
  )
}
