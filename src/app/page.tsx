"use client";

import Image from "next/image";
import { Search, MapPin, Calendar, ChevronDown, X } from "lucide-react";
import { MainHeader } from "@/components/main-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureSection } from "@/components/feature-section";
import { CTAButton } from "@/components/cta-button";
import { ImageBlock } from "@/components/image-block";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  const handleSearch = () => {
    alert(`Wyszukiwanie: ${searchQuery}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

        @font-face {
          font-family: "Boldonse";
          src: url("/fonts/boldonse.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
        }

        .font-boldonse {
          font-family: "Boldonse", sans-serif;
        }

        body {
          font-family: "Roboto", sans-serif;
          color: #06010d;
        }
      `}</style>

      <MainHeader activePage="Dla zawodników" />

      <main className="flex-1">
        {/* Hero Section */}
        <SectionWrapper>
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
                <CTAButton
                  size="lg"
                  onClick={() =>
                    window.scrollTo({ top: 800, behavior: "smooth" })
                  }
                >
                  Wyszukaj turniej
                </CTAButton>
                <CTAButton
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "/rejestracja")}
                >
                  Dołącz do społeczności
                </CTAButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ImageBlock
                src="/placeholder.svg?height=400&width=600&text=Basketball+Players"
                alt="Basketball players"
                width={600}
                height={400}
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Tournament Search Section */}
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

              <CTAButton
                size="lg"
                className="h-14 px-8 text-lg rounded-xl flex items-center justify-center"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-5 w-5" /> Szukaj
              </CTAButton>
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
                  activeFilter === "date"
                    ? "bg-[#F27507]/10 border-[#F27507]"
                    : ""
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
                  activeFilter === "type"
                    ? "bg-[#F27507]/10 border-[#F27507]"
                    : ""
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
                      {[
                        "Warszawa",
                        "Kraków",
                        "Poznań",
                        "Wrocław",
                        "Gdańsk",
                      ].map((city) => (
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
                    <CTAButton variant="outline" size="sm">
                      Szczegóły
                    </CTAButton>
                  </div>
                </div>
              ))}
              <CTAButton
                className="w-full"
                onClick={() => alert("Pokaż więcej turniejów")}
              >
                Pokaż więcej turniejów
              </CTAButton>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm h-full min-h-[600px] lg:min-h-full relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                <p className="text-muted-foreground text-lg">Mapa turniejów</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Player Profile Section */}
        <SectionWrapper background="medium">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">
                  Twój profil zawodnika
                </h2>
                <p className="text-[#06010D]/80 md:text-lg mb-6">
                  Twoje koszykarskie CV. Twórz profil, zbieraj statystyki,
                  pokazuj się drużynom i organizatorom. Im więcej grasz, tym
                  bardziej jesteś widoczny.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-center mb-2 text-2xl">🏅</div>
                  <h3 className="font-bold text-center mb-1">Ranking graczy</h3>
                  <p className="text-sm text-center text-[#06010D]/70">
                    Rywalizuj o miejsce w rankingu najlepszych graczy
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-center mb-2 text-2xl">📊</div>
                  <h3 className="font-bold text-center mb-1">
                    Historia meczów
                  </h3>
                  <p className="text-sm text-center text-[#06010D]/70">
                    Śledź swoje statystyki i postępy
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-center mb-2 text-2xl">🎥</div>
                  <h3 className="font-bold text-center mb-1">Highlighty</h3>
                  <p className="text-sm text-center text-[#06010D]/70">
                    Dodawaj najlepsze akcje z Twoich meczów
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <CTAButton
                  onClick={() => alert("Przejście do profilu zawodnika")}
                >
                  Stwórz swój profil
                </CTAButton>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#F27507]/20 mr-4 flex items-center justify-center">
                    <span className="font-bold text-xl text-[#F27507]">MK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Michał Kowalski</h3>
                    <div className="text-sm text-[#06010D]/70">
                      Warszawa • Rozgrywający
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs px-2 py-0.5 bg-[#F27507]/10 text-[#F27507] rounded-full mr-1">
                        3x3
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-[#BF3111]/10 text-[#BF3111] rounded-full">
                        5x5
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                    <div className="font-bold text-lg text-[#F27507]">24</div>
                    <div className="text-xs text-[#06010D]/70">Turnieje</div>
                  </div>
                  <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                    <div className="font-bold text-lg text-[#F27507]">156</div>
                    <div className="text-xs text-[#06010D]/70">Mecze</div>
                  </div>
                  <div className="bg-[#D9A78B]/10 p-2 rounded-lg text-center">
                    <div className="font-bold text-lg text-[#F27507]">12.4</div>
                    <div className="text-xs text-[#06010D]/70">Śr. pkt</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Ranking 3x3</span>
                    <span className="font-bold">#42 w Polsce</span>
                  </div>
                  <div className="w-full bg-[#F27507]/10 rounded-full h-2">
                    <div
                      className="bg-[#F27507] h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-sm mt-3">
                    <span>Ranking 5x5</span>
                    <span className="font-bold">#78 w Polsce</span>
                  </div>
                  <div className="w-full bg-[#BF3111]/10 rounded-full h-2">
                    <div
                      className="bg-[#BF3111] h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Past Tournaments Section */}
        <SectionWrapper background="light">
          <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
            Zobacz, co już za nami
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-muted rounded-xl mb-3 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Turniej${i}`}
                    width={300}
                    height={200}
                    alt={`Turniej ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Turniej Koszykówki {i}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" /> Kraków
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-3 w-3" /> 10.0{i}.2025
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Wspaniały turniej z udziałem {8 + i} drużyn z całej Polski.
                </p>
                <div className="flex justify-between items-center">
                  <Badge className="bg-[#BF3111]">{8 + i} drużyn</Badge>
                  <CTAButton variant="outline" size="sm">
                    Galeria
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Find Team Section */}
        <SectionWrapper>
          <FeatureSection
            title="Szukasz drużyny?"
            description="Nie masz zespołu? Dołącz do jednej z otwartych drużyn lub pokaż, że jesteś gotowy do gry."
            buttonText="Znajdź drużynę"
            buttonAction={() => alert("Przejście do wyszukiwarki drużyn")}
            imageSrc="/placeholder.svg?height=400&width=600&text=Team+Players"
            imageAlt="Basketball team players"
            imagePosition="right"
          />
        </SectionWrapper>

        {/* Live Results Section */}
        <SectionWrapper background="light">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
                  Wyniki na żywo
                </h2>
                <p className="text-[#06010D]/80 md:text-lg">
                  Śledź aktualne wyniki turniejów, tabele i mecze na bieżąco.
                </p>
              </div>
              <div>
                <CTAButton
                  variant="secondary"
                  size="lg"
                  onClick={() => alert("Sprawdź wyniki")}
                >
                  Sprawdź wyniki
                </CTAButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md">
                <div className="text-center font-bold mb-4">
                  Turniej Koszykówki 3x3 - Warszawa
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="font-medium">Drużyna A</div>
                    <div className="font-bold text-[#F27507]">21</div>
                    <div className="text-sm text-muted-foreground">vs</div>
                    <div className="font-bold text-[#F27507]">18</div>
                    <div className="font-medium">Drużyna B</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="font-medium">Drużyna C</div>
                    <div className="font-bold text-[#F27507]">15</div>
                    <div className="text-sm text-muted-foreground">vs</div>
                    <div className="font-bold text-[#F27507]">21</div>
                    <div className="font-medium">Drużyna D</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="font-medium">Drużyna E</div>
                    <div className="font-bold text-[#F27507]">19</div>
                    <div className="text-sm text-muted-foreground">vs</div>
                    <div className="font-bold text-[#F27507]">21</div>
                    <div className="font-medium">Drużyna F</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
