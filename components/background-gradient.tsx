import type React from "react"
import { cn } from "@/lib/utils"

interface BackgroundGradientProps {
  children: React.ReactNode
  className?: string
}

export function BackgroundGradient({ children, className }: BackgroundGradientProps) {
  return (
    <div className={cn("bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", className)}>
      {children}
    </div>
  )
}
