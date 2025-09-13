"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  glow?: boolean
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  glow = false,
  onClick,
  href,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const buttonClasses = cn(
    "relative overflow-hidden transition-all duration-300 transform hover:scale-105",
    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
    "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
    glow && "animate-glow",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <Button variant={variant} size={size} className="w-full h-full" disabled={disabled}>
          {children}
        </Button>
      </Link>
    )
  }

  return (
    <Button onClick={onClick} variant={variant} size={size} type={type} disabled={disabled} className={buttonClasses}>
      {children}
    </Button>
  )
}
