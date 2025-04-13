import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ children, className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27507] disabled:opacity-50",
          {
            "bg-[#F27507] text-white hover:bg-[#F27507]/90": variant === "primary",
            "bg-[#BF3111] text-white hover:bg-[#BF3111]/90": variant === "secondary",
            "border border-[#F27507] text-[#F27507] hover:bg-[#F27507]/10 hover:text-[#06010D]": variant === "outline",
            "h-10 px-4 py-2 text-sm": size === "sm",
            "h-12 px-6 py-3 text-base": size === "default",
            "h-14 px-8 py-4 text-lg": size === "lg",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

CTAButton.displayName = "CTAButton"
