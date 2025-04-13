"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, ChevronDown, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TournamentCard } from "./tournament-card"
import { RippleButton } from "./ripple-button"

export function TournamentSearch() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null)
    } else {
      setActiveFilter(filter)
    }
  }

  const handleSearch = () => {
    alert(`Wyszukiwanie: ${searchQuery}`)
  }

  return (
    <section id="tournament-search" className="w-full py-16 md:py-24 bg-[#D9A78B]/30">
      <div className="px-4 md:px-6 max-w-[1400px] mx-auto">
        <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
          Wyszukiwarka turniejów
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Nazwa turnieju lub lokalizacja"
                className="w-full pl-12 h-14 text-lg rounded-lg border-[#F27507]/20 focus-visible:ring-[#F27507]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <RippleButton
              className="bg-[#F27507] hover:bg-[#F27507]/90 text-white h-14 px-8 text-lg rounded-lg flex items-center justify-center"
              onClick={handleSearch}
            >
              <Search className="mr-2 h-5 w-5" /> Szukaj
            </RippleButton>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <RippleButton
              variant="outline"
              className={`h-14 rounded-lg border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center ${activeFilter === "location" ? "bg-[#F27507]/10 border-[#F27507]" : ""}`}
              onClick={() => toggleFilter("location")}
            >
              <MapPin className="mr-2 h-4 w-4 text-[#F27507]" />
              <span>Lokalizacja</span>
              {activeFilter === "location" ? (
                <X className="ml-2 h-4 w-4 text-[#F27507]" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
              )}
            </RippleButton>

            <RippleButton
              variant="outline"
              className={`h-14 rounded-lg border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center ${activeFilter === "date" ? "bg-[#F27507]/10 border-[#F27507]" : ""}`}
              onClick={() => toggleFilter("date")}
            >
              <Calendar className="mr-2 h-4 w-4 text-[#F27507]" />
              <span>Data</span>
              {activeFilter === "date" ? (
                <X className="ml-2 h-4 w-4 text-[#F27507]" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
              )}
            </RippleButton>

            <RippleButton
              variant="outline"
              className={`h-14 rounded-lg border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center ${activeFilter === "type" ? "bg-[#F27507]/10 border-[#F27507]" : ""}`}
              onClick={() => toggleFilter("type")}
            >
              <span>Typ: 3x3/5x5</span>
              {activeFilter === "type" ? (
                <X className="ml-2 h-4 w-4 text-[#F27507]" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
              )}
            </RippleButton>

            <RippleButton
              variant="outline"
              className={`h-14 rounded-lg border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center ${activeFilter === "level" ? "bg-[#F27507]/10 border-[#F27507]" : ""}`}
              onClick={() => toggleFilter("level")}
            >
              <span>Poziom</span>
              {activeFilter === "level" ? (
                <X className="ml-2 h-4 w-4 text-[#F27507]" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
              )}
            </RippleButton>
          </div>

          {activeFilter && (
            <div className="mt-4 p-4 border border-[#F27507]/20 rounded-lg bg-gray-50">
              {activeFilter === "location" && (
                <div className="space-y-2">
                  <h3 className="font-medium">Wybierz lokalizację</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Warszawa", "Kraków", "Poznań", "Wrocław", "Gdańsk"].map((city) => (
                      <Badge
                        key={city}
                        className="bg-white text-[#06010D] hover:bg-[#F27507]/10 cursor-pointer px-3 py-1.5"
                        onClick={() => alert(`Wybrano: ${city}`)}
                      >
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activeFilter === "date" && (
                <div className="space-y-2">
                  <h3 className="font-medium">Wybierz datę</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Dzisiaj", "W tym tygodniu", "W tym miesiącu", "Wybierz zakres"].map((option) => (
                      <Badge
                        key={option}
                        className="bg-white text-[#06010D] hover:bg-[#F27507]/10 cursor-pointer px-3 py-1.5"
                        onClick={() => alert(`Wybrano: ${option}`)}
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activeFilter === "type" && (
                <div className="space-y-2">
                  <h3 className="font-medium">Wybierz typ turnieju</h3>
                  <div className="flex flex-wrap gap-2">
                    {["3x3", "5x5", "1x1"].map((type) => (
                      <Badge
                        key={type}
                        className="bg-white text-[#06010D] hover:bg-[#F27507]/10 cursor-pointer px-3 py-1.5"
                        onClick={() => alert(`Wybrano: ${type}`)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activeFilter === "level" && (
                <div className="space-y-2">
                  <h3 className="font-medium">Wybierz poziom</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Open", "U18", "U16", "Amatorski", "Pro"].map((level) => (
                      <Badge
                        key={level}
                        className="bg-white text-[#06010D] hover:bg-[#F27507]/10 cursor-pointer px-3 py-1.5"
                        onClick={() => alert(`Wybrano: ${level}`)}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Changed grid layout to give more space to the map */}
        <div className="grid w-full lg:grid-cols-[1fr_1fr] gap-4">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <TournamentCard key={i} id={i} />
            ))}
            <RippleButton
              className="w-full h-12 text-base bg-[#F27507] hover:bg-[#F27507]/90 text-white"
              onClick={() => alert("Pokaż więcej turniejów")}
            >
              Pokaż więcej turniejów
            </RippleButton>
          </div>

          {/* Increased height and made the map more prominent */}
          <div className="bg-white rounded-lg shadow-sm h-full min-h-[600px] lg:min-h-full relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-muted-foreground text-lg">Mapa turniejów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
