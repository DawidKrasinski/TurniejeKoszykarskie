"use client";

import { RippleButton } from "./ripple-button";
import { SectionWrapper } from "./section-wrapper";

export function SectionLiveResults() {
  return (
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
            <RippleButton
              variant="secondary"
              size="lg"
              onClick={() => alert("Sprawdź wyniki")}
            >
              Sprawdź wyniki
            </RippleButton>
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
  );
}
