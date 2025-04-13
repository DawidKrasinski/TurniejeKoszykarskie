"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface RippleProps {
  x: number
  y: number
  size: number
}

export function useRipple() {
  const [ripples, setRipples] = useState<RippleProps[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples([])
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [ripples])

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const size = Math.max(button.clientWidth, button.clientHeight) * 2

    setRipples([...ripples, { x, y, size }])
  }

  const rippleStyles = (ripple: RippleProps) => ({
    left: ripple.x - ripple.size / 2,
    top: ripple.y - ripple.size / 2,
    width: ripple.size,
    height: ripple.size,
  })

  return { ripples, createRipple, rippleStyles }
}
