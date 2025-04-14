"use client";

import { Calendar, ChevronDown, MapPin, Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { RippleButton } from "./ripple-button";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { SectionWrapper } from "./section-wrapper";

export function SearchTournaments() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Wyszukiwanie: ${searchQuery}`);
  };

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    activeFilter === filter ? setActiveFilter(null) : setActiveFilter(filter);
  };

  return (
    <SectionWrapper background="light">
      <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
        Wyszukiwarka turniejów
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Nazwa turnieju lub lokalizacja"
              className="w-full pl-12 h-14 text-lg rounded-xl border-[#F27507]/20 focus-visible:ring-[#F27507]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          <RippleButton
            size="lg"
            className="h-14 px-8 text-lg rounded-xl flex items-center justify-center"
            onClick={handleSearch}
          >
            <Search className="mr-2 h-5 w-5" /> Szukaj
          </RippleButton>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            className={`h-14 rounded-xl border border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center px-4 ${
              activeFilter === "location"
                ? "bg-[#F27507]/10 border-[#F27507]"
                : ""
            }`}
            onClick={() => toggleFilter("location")}
          >
            <MapPin className="mr-2 h-4 w-4 text-[#F27507]" />
            <span>Lokalizacja</span>
            {activeFilter === "location" ? (
              <X className="ml-2 h-4 w-4 text-[#F27507]" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
            )}
          </button>

          <button
            className={`h-14 rounded-xl border border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center px-4 ${
              activeFilter === "date" ? "bg-[#F27507]/10 border-[#F27507]" : ""
            }`}
            onClick={() => toggleFilter("date")}
          >
            <Calendar className="mr-2 h-4 w-4 text-[#F27507]" />
            <span>Data</span>
            {activeFilter === "date" ? (
              <X className="ml-2 h-4 w-4 text-[#F27507]" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
            )}
          </button>

          <button
            className={`h-14 rounded-xl border border-[#F27507]/20 hover:bg-[#F27507]/10 hover:border-[#F27507] hover:text-[#06010D] flex items-center px-4 ${
              activeFilter === "type" ? "bg-[#F27507]/10 border-[#F27507]" : ""
            }`}
            onClick={() => toggleFilter("type")}
          >
            <span>Typ: 3x3/5x5</span>
            {activeFilter === "type" ? (
              <X className="ml-2 h-4 w-4 text-[#F27507]" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 text-[#F27507]" />
            )}
          </button>
        </div>

        {activeFilter && (
          <div className="mt-4 p-4 border border-[#F27507]/20 rounded-xl bg-gray-50">
            {activeFilter === "location" && (
              <div className="space-y-2">
                <h3 className="font-medium">Wybierz lokalizację</h3>
                <div className="flex flex-wrap gap-2">
                  {["Warszawa", "Kraków", "Poznań", "Wrocław", "Gdańsk"].map(
                    (city) => (
                      <Badge
                        key={city}
                        className="bg-white text-[#06010D] hover:bg-[#F27507]/10 cursor-pointer px-3 py-1.5"
                        onClick={() => alert(`Wybrano: ${city}`)}
                      >
                        {city}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            )}

            {activeFilter === "date" && (
              <div className="space-y-2">
                <h3 className="font-medium">Wybierz datę</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dzisiaj",
                    "W tym tygodniu",
                    "W tym miesiącu",
                    "Wybierz zakres",
                  ].map((option) => (
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
          </div>
        )}
      </div>

      {/* Tournament Results Preview */}
      <div className="grid w-full lg:grid-cols-[1fr_1fr] gap-4">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Turniej Koszykówki {i}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-3 w-3" /> Warszawa
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-1 h-3 w-3" /> 15.0{i}.2025
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#F27507]">3x3</Badge>
                  <Badge className="bg-[#BF3111]">Open</Badge>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <RippleButton variant="outline" size="sm">
                  Szczegóły
                </RippleButton>
              </div>
            </div>
          ))}
          <RippleButton
            className="w-full"
            onClick={() => alert("Pokaż więcej turniejów")}
          >
            Pokaż więcej turniejów
          </RippleButton>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-sm h-full min-h-[600px] lg:min-h-full relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
            <p className="text-muted-foreground text-lg">Mapa turniejów</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
