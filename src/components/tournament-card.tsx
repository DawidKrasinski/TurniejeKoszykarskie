"use client"

import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ChevronRight } from "lucide-react"
import { RippleButton } from "./ripple-button"

interface TournamentCardProps {
  id: number
  onClick?: () => void
}

export function TournamentCard({ id, onClick }: TournamentCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg mb-1">Turniej Koszykówki {id}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" /> Warszawa
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" /> 15.05.2025
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-[#F27507] hover:bg-[#F27507]/90 px-3 py-1 text-sm">3x3</Badge>
          <Badge className="bg-[#BF3111] hover:bg-[#BF3111]/90 px-3 py-1 text-sm">Open</Badge>
          {id % 2 === 0 && <Badge className="bg-[#8C1616] hover:bg-[#8C1616]/90 px-3 py-1 text-sm">U18</Badge>}
          {id % 3 === 0 && (
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Darmowy
            </Badge>
          )}
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <RippleButton
          variant="ghost"
          size="sm"
          className="text-[#F27507] hover:text-[#F27507]/90 hover:bg-[#F27507]/10 text-base"
          onClick={onClick || (() => alert(`Szczegóły turnieju ${id}`))}
        >
          Szczegóły <ChevronRight className="ml-1 h-5 w-5" />
        </RippleButton>
      </div>
    </div>
  )
}
