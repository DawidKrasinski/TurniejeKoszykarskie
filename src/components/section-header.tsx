interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, description, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-8 ${className}`}>
      <h2 className="font-boldonse text-3xl md:text-4xl font-bold tracking-tight text-[#06010D] mb-4">{title}</h2>
      {description && (
        <p className={`text-[#06010D]/80 md:text-lg ${centered ? "max-w-3xl mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  )
}
