"use client";

import Image from "next/image";
import { RippleButton } from "./ripple-button";
import { SectionWrapper } from "./section-wrapper";
import { FeatureSection } from "./feature-section";

export function SectionFindTeam() {
  return (
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
  );
}
