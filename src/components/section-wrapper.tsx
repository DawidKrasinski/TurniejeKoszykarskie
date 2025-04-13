import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  background?: "white" | "light" | "medium" | "dark"
  fullWidth?: boolean
}

export function SectionWrapper({ children, className, background = "white", fullWidth = false }: SectionWrapperProps) {
  const getBgColor = () => {
    switch (background) {
      case "light":
        return "bg-[#D9A78B]/10"
      case "medium":
        return "bg-[#D9A78B]/20"
      case "dark":
        return "bg-[#D9A78B]/30"
      default:
        return "bg-white"
    }
  }

  return (
    <section className={cn(`w-full py-16 md:py-24 ${getBgColor()}`, className)}>
      <div className={fullWidth ? "w-full" : "container px-4 md:px-6 mx-auto"}>{children}</div>
    </section>
  )
}
