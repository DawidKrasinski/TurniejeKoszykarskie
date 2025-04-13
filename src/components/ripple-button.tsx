"use client"

import type React from "react"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { useRipple } from "@/hooks/use-ripple"
import { cn } from "@/lib/utils"

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  isLoggedIn?: boolean
}

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, className, onClick, variant = "default", isLoggedIn = true, ...props }, ref) => {
    const { ripples, createRipple, rippleStyles } = useRipple()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event)
      onClick?.(event)
    }

    // Determine ripple color based on variant
    const getRippleColor = () => {
      if (variant === "default") return "bg-white/30" // For primary buttons
      return "bg-[#F27507]/30" // For other variants
    }

    // Only render the button if user is logged in
    if (!isLoggedIn) return null

    return (
      <Button
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onClick={handleClick}
        variant={variant}
        {...props}
      >
        {ripples.map((ripple, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${getRippleColor()} animate-ripple pointer-events-none`}
            style={rippleStyles(ripple)}
          />
        ))}
        {children}
      </Button>
    )
  },
)

RippleButton.displayName = "RippleButton"
