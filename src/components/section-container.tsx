import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  background?: "white" | "light" | "medium"
}

export function SectionContainer({ children, className, background = "white" }: SectionContainerProps) {
  const getBgColor = () => {
    switch (background) {
      case "light":
        return "bg-[#D9A78B]/10"
      case "medium":
        return "bg-[#D9A78B]/20"
      default:
        return "bg-white"
    }
  }

  return (
    <section className={cn(`w-full py-16 md:py-24 ${getBgColor()}`, className)}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  )
}
