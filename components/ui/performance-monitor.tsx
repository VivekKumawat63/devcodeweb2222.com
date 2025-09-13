"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== "undefined" && "performance" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("[v0] LCP:", entry.startTime)
          }

          if (entry.entryType === "first-input") {
            console.log("[v0] FID:", entry.processingStart - entry.startTime)
          }

          if (entry.entryType === "layout-shift") {
            console.log("[v0] CLS:", entry.value)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] })
      } catch (e) {
        console.warn("[v0] Performance observer not supported")
      }

      return () => observer.disconnect()
    }
  }, [])

  return null
}
