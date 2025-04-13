import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageBlockProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  rounded?: boolean
  shadow?: boolean
}

export function ImageBlock({
  src,
  alt,
  width = 600,
  height = 400,
  className,
  rounded = true,
  shadow = true,
}: ImageBlockProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        width={width}
        height={height}
        alt={alt}
        className={cn("object-cover w-full h-auto", rounded && "rounded-2xl", shadow && "shadow-md")}
      />
    </div>
  )
}
