"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";
import { RippleButton } from "./ripple-button";
import { SectionWrapper } from "./section-wrapper";

export function PastTournaments() {
  return (
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
              <RippleButton variant="outline" size="sm">
                Galeria
              </RippleButton>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
