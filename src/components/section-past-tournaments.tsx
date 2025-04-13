"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users } from "lucide-react"
import { RippleButton } from "./ripple-button"

export function SectionPastTournaments() {
  return (
    <section className="w-full py-12 md:py-20 bg-[#D9A78B]/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-boldonse text-4xl md:text-5xl font-bold tracking-tight text-[#06010D] mb-8">
            Zobacz, co już za nami
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted rounded-md mb-3 overflow-hidden">
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
                  <Badge className="bg-[#BF3111] hover:bg-[#BF3111]/90">
                    <Users className="mr-1 h-3 w-3" /> {8 + i} drużyn
                  </Badge>
                  <RippleButton
                    variant="ghost"
                    size="sm"
                    className="text-[#F27507] hover:text-[#F27507]/90 hover:bg-[#F27507]/10"
                    onClick={() => alert(`Galeria turnieju ${i}`)}
                  >
                    Galeria
                  </RippleButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
