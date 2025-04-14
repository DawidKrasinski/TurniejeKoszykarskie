"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { RippleButton } from "./ripple-button";
import { SectionWrapper } from "./section-wrapper";
import { ImageBlock } from "./image-block";

export function HeroSection() {
  const router = useRouter();

  const scrollToTournamentSearch = () => {
    window.scrollTo({
      top: document.getElementById("tournament-search")?.offsetTop,
      behavior: "smooth",
    });
  };

  const navigateToRegistration = () => {
    router.push("/rejestracja");
  };

  return (
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
            <RippleButton
              size="lg"
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            >
              Wyszukaj turniej
            </RippleButton>
            <RippleButton
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/rejestracja")}
            >
              Dołącz do społeczności
            </RippleButton>
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
  );
}
