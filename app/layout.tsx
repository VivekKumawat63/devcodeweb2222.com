import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { AnalyticsTracker } from "@/components/ui/analytics-tracker"
import { PerformanceMonitor } from "@/components/ui/performance-monitor"
import { AccessibilityHelper } from "@/components/ui/accessibility-helper"
import { StructuredData, organizationSchema, websiteSchema } from "@/components/ui/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "DEVCODEWEB | Best Website Developer in Jaipur, Rajasthan",
  description:
    "DEVCODEWEB - Jaipur's top web development company. CEO Nikhil Kumawat & Co-Founder Vivek Kumawat deliver stunning websites with cutting-edge UI/UX design and modern web technologies.",
  generator: "v0.app",
  keywords: [
    "web design",
    "web development",
    "UI/UX",
    "React",
    "Next.js",
    "modern design",
    "Jaipur web developer",
    "Rajasthan web development",
    "best website developer in Jaipur",
    "Nikhil Kumawat",
    "Vivek Kumawat",
  ],
  authors: [{ name: "DEVCODEWEB - Nikhil Kumawat & Vivek Kumawat" }],
  openGraph: {
    title: "DEVCODEWEB | Best Website Developer in Jaipur, Rajasthan",
    description:
      "DEVCODEWEB - Creating stunning digital experiences with cutting-edge UI/UX design. Led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat in Jaipur.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <AccessibilityHelper />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSkeleton />}>
            <main id="main-content" className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
              {children}
            </main>
          </Suspense>
        </ErrorBoundary>
        <AnalyticsTracker />
        <PerformanceMonitor />
        <Analytics />
      </body>
    </html>
  )
}
