"use client";

import Image from "next/image";
import { Search, MapPin, Calendar, ChevronDown, X } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RippleButton } from "@/components/ripple-button";
import { SearchTournaments } from "@/components/search-tournaments-section";
import { PlayerProfile } from "@/components/player-profile-section";
import { PastTournaments } from "@/components/section-past-tournaments";
import { SectionFindTeam } from "@/components/section-find-team";
import { SectionLiveResults } from "@/components/section-live-results";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom fonts */}
      {/* <style jsx global>{`
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
      `}</style> */}

      <Header activePage="Dla zawodników" />

      <main className="flex-1">
        <HeroSection />
        <SearchTournaments />
        <PlayerProfile />
        <PastTournaments />
        <SectionFindTeam />
        <SectionLiveResults />
      </main>

      <Footer />
    </div>
  );
}
