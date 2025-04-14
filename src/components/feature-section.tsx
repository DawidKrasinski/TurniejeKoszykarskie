"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { RippleButton } from "./ripple-button";

interface FeatureSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export function FeatureSection({
  title,
  description,
  buttonText,
  buttonAction = () => alert("Button clicked"),
  imageSrc,
  imageAlt = "Feature illustration",
  imagePosition = "right",
  className,
}: FeatureSectionProps) {
  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-2 lg:gap-12 items-center",
        className
      )}
    >
      {/* Image - conditionally rendered on left or right */}
      {imageSrc && imagePosition === "left" && (
        <div className="flex items-center justify-center order-2 lg:order-1">
          <Image
            src={imageSrc || "/placeholder.svg"}
            width={600}
            height={400}
            alt={imageAlt}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          "flex flex-col justify-center space-y-4",
          imagePosition === "left" ? "order-1 lg:order-2" : "order-1"
        )}
      >
        <div className="space-y-2">
          <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">
            {title}
          </h2>
          <p className="text-[#06010D]/80 md:text-lg mb-6">{description}</p>
        </div>
        {buttonText && (
          <div>
            <RippleButton onClick={buttonAction}>{buttonText}</RippleButton>
          </div>
        )}
      </div>

      {/* Image - conditionally rendered on right */}
      {imageSrc && imagePosition === "right" && (
        <div className="flex items-center justify-center order-2">
          <Image
            src={imageSrc || "/placeholder.svg"}
            width={600}
            height={400}
            alt={imageAlt}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>
      )}
    </div>
  );
}
