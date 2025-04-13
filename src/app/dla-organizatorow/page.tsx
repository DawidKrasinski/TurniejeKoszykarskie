"use client"

import Image from "next/image"
import { MainHeader } from "@/components/main-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { FeatureSection } from "@/components/feature-section"
import { CTAButton } from "@/components/cta-button"
import { Footer } from "@/components/footer"
import { Calendar, Users, Bell, Settings, Star } from "lucide-react"

export default function OrganizersPage() {
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

      <MainHeader activePage="Dla organizatorów" />

      <main className="flex-1">
        {/* Hero Section */}
        <SectionWrapper>
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-boldonse text-4xl font-extrabold tracking-wide sm:text-5xl xl:text-6xl/none text-[#06010D] mb-6">
                  Zorganizuj turniej łatwiej niż kiedykolwiek
                </h1>
                <p className="max-w-[600px] text-[#06010D]/80 md:text-xl mb-8">
                  Narzędzia, które pozwolą Ci skupić się na grze, nie papierkowej robocie.
                </p>
              </div>
              <div>
                <CTAButton size="lg" onClick={() => alert("Dodaj swój pierwszy turniej")}>
                  Dodaj swój pierwszy turniej
                </CTAButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Organizator+Turnieju"
                width={600}
                height={400}
                alt="Organizator turnieju"
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Panel Organizatora Section */}
        <SectionWrapper background="light">
          <div className="text-center mb-12">
            <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">
              Panel organizatora
            </h2>
            <p className="max-w-3xl mx-auto text-[#06010D]/80 md:text-lg">
              Zarządzaj zgłoszeniami, terminarzem, drużynami i komunikacją z jednego miejsca. Intuicyjny i elastyczny
              system, który działa na każdym urządzeniu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-[#06010D]/5 h-[300px] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">Panel administratora</div>
                  <div className="text-sm text-[#06010D]/60">Podgląd interfejsu</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Terminarz</h3>
                  <p className="text-[#06010D]/70">
                    Planuj mecze, przydzielaj boiska i zarządzaj harmonogramem całego turnieju.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Lista drużyn</h3>
                  <p className="text-[#06010D]/70">
                    Przeglądaj zgłoszenia, akceptuj drużyny i zarządzaj listą uczestników.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Powiadomienia</h3>
                  <p className="text-[#06010D]/70">
                    Wysyłaj komunikaty do wszystkich uczestników lub wybranych drużyn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F27507]/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-[#F27507]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ustawienia</h3>
                  <p className="text-[#06010D]/70">Dostosuj format turnieju, zasady i wymagania dla uczestników.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Zwiększ widoczność Section */}
        <SectionWrapper>
          <FeatureSection
            title="Zwiększ widoczność swojego turnieju"
            description="Dzięki naszej platformie Twoje wydarzenie trafi do setek zawodników z całej Polski. Udostępniaj je jednym kliknięciem w mediach społecznościowych i na forach."
            buttonText="Zacznij promować"
            buttonAction={() => alert("Przejście do promocji turnieju")}
            imageSrc="/placeholder.svg?height=400&width=600&text=Tournament+Promotion"
            imageAlt="Tournament poster with sharing icons"
            imagePosition="left"
          />
        </SectionWrapper>

        {/* Zautomatyzuj zapisy Section */}
        <SectionWrapper background="medium">
          <FeatureSection
            title="Zautomatyzuj zapisy i płatności"
            description="Koniec z przelewami i tabelkami. Udostępnij wygodne płatności online i skoncentruj się na organizacji – resztą zajmie się nasz system."
            buttonText="Włącz płatności"
            buttonAction={() => alert("Przejście do ustawień płatności")}
            imageSrc="/placeholder.svg?height=400&width=600&text=Payment+System"
            imageAlt="UI mockup with Stripe-style payment screen"
            imagePosition="right"
          />
        </SectionWrapper>

        {/* Zbieraj opinie Section */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">
              Zbieraj opinie i buduj reputację
            </h2>
            <p className="max-w-3xl mx-auto text-[#06010D]/80 md:text-lg">
              Po każdym turnieju uczestnicy mogą wystawić Ci ocenę. Pozytywne recenzje zwiększają zaufanie i przyciągają
              więcej drużyn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#F27507]/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D9A78B]/20 mr-4"></div>
                <div>
                  <div className="font-bold">Michał K.</div>
                  <div className="text-sm text-[#06010D]/60">Warszawa</div>
                </div>
              </div>
              <div className="flex text-[#F27507] mb-2">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-[#06010D]/80">
                "Świetna organizacja, wszystko na czas, dobra komunikacja. Polecam każdemu!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#F27507]/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D9A78B]/20 mr-4"></div>
                <div>
                  <div className="font-bold">Anna W.</div>
                  <div className="text-sm text-[#06010D]/60">Kraków</div>
                </div>
              </div>
              <div className="flex text-[#F27507] mb-2">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5" />
              </div>
              <p className="text-[#06010D]/80">
                "Profesjonalne podejście do organizacji. Turniej przebiegł sprawnie i bez opóźnień."
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#F27507]/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D9A78B]/20 mr-4"></div>
                <div>
                  <div className="font-bold">Tomasz B.</div>
                  <div className="text-sm text-[#06010D]/60">Poznań</div>
                </div>
              </div>
              <div className="flex text-[#F27507] mb-2">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-[#06010D]/80">
                "Najlepszy turniej w jakim brałem udział. Świetna atmosfera i organizacja na wysokim poziomie."
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <CTAButton onClick={() => alert("Sprawdź jak wyglądają profile organizatorów")}>
              Sprawdź jak wyglądają profile organizatorów
            </CTAButton>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}
