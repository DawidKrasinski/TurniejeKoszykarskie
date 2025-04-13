"use client"

import { MainHeader } from "@/components/main-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { Footer } from "@/components/footer"
import { Search, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CTAButton } from "@/components/cta-button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TournamentPage() {
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

      <MainHeader activePage="Turnieje" />

      <main className="flex-1">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h1 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-4">
              Wszystkie turnieje
            </h1>
            <p className="max-w-3xl mx-auto text-[#06010D]/80 md:text-lg">
              Znajdź turniej, który najlepiej pasuje do Twoich umiejętności i lokalizacji.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Nazwa turnieju lub lokalizacja"
                  className="w-full pl-12 h-14 text-lg rounded-xl border-[#F27507]/20 focus-visible:ring-[#F27507]"
                />
              </div>

              <CTAButton
                size="lg"
                className="h-14 px-8 text-lg rounded-xl flex items-center justify-center"
                onClick={() => alert("Wyszukiwanie turniejów")}
              >
                <Search className="mr-2 h-5 w-5" /> Szukaj
              </CTAButton>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-[#D9A78B]/10 rounded-xl mb-3 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Turniej${i}`}
                    width={300}
                    height={200}
                    alt={`Turniej ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">Turniej Koszykówki {i}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" /> {i % 2 === 0 ? "Warszawa" : "Kraków"}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-3 w-3" /> {10 + i}.05.2025
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <Badge className="bg-[#F27507]">{i % 2 === 0 ? "3x3" : "5x5"}</Badge>
                    <Badge className="bg-[#BF3111]">{i % 3 === 0 ? "Pro" : "Open"}</Badge>
                  </div>
                  <CTAButton variant="outline" size="sm">
                    Szczegóły
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <CTAButton onClick={() => alert("Załaduj więcej turniejów")}>Pokaż więcej turniejów</CTAButton>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}
