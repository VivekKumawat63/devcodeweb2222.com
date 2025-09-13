"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    trackEvent({
      event: "page_view",
      properties: {
        path: pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }, [pathname])

  return null
}

export function trackEvent({ event, properties = {} }: AnalyticsEvent) {
  if (typeof window !== "undefined") {
    console.log("[v0] Analytics Event:", { event, properties })

    // Track with Vercel Analytics if available
    if (window.va) {
      window.va("track", event, properties)
    }

    // Track with Google Analytics if available
    if (window.gtag) {
      window.gtag("event", event, properties)
    }
  }
}

// Utility functions for common tracking events
export const analytics = {
  trackButtonClick: (buttonName: string, location: string) => {
    trackEvent({
      event: "button_click",
      properties: { button_name: buttonName, location },
    })
  },

  trackFormSubmit: (formName: string, success: boolean) => {
    trackEvent({
      event: "form_submit",
      properties: { form_name: formName, success },
    })
  },

  trackContactAttempt: (method: string) => {
    trackEvent({
      event: "contact_attempt",
      properties: { method },
    })
  },

  trackServiceInterest: (service: string) => {
    trackEvent({
      event: "service_interest",
      properties: { service },
    })
  },
}

// Extend window type for TypeScript
declare global {
  interface Window {
    va?: (event: string, name: string, properties?: Record<string, any>) => void
    gtag?: (command: string, event: string, properties?: Record<string, any>) => void
  }
}
