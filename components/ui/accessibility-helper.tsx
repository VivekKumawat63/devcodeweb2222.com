"use client"

import { useEffect } from "react"

export function AccessibilityHelper() {
  useEffect(() => {
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Skip to main content with Alt+M
      if (e.altKey && e.key === "m") {
        e.preventDefault()
        const main = document.querySelector("main")
        if (main) {
          main.focus()
          main.scrollIntoView({ behavior: "smooth" })
        }
      }

      // Focus visible elements only
      if (e.key === "Tab") {
        const focusableElements = document.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
        )

        focusableElements.forEach((element) => {
          const htmlElement = element as HTMLElement
          if (htmlElement.offsetParent === null) {
            htmlElement.setAttribute("tabindex", "-1")
          } else {
            htmlElement.removeAttribute("tabindex")
          }
        })
      }
    }

    document.addEventListener("keydown", handleKeyboardNavigation)
    return () => document.removeEventListener("keydown", handleKeyboardNavigation)
  }, [])

  return (
    <div className="sr-only">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
    </div>
  )
}
