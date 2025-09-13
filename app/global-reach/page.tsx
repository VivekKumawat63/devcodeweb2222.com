import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { GlobalReachHeroSection } from "@/components/sections/global-reach-hero-section"
import { GlobalStatsSection } from "@/components/sections/global-stats-section"
import { GlobalCaseStudiesSection } from "@/components/sections/global-case-studies-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Global Reach | DEVCODEWEB - Serving Clients Worldwide from Jaipur",
  description:
    "Discover how DEVCODEWEB serves clients across India and internationally from our Jaipur headquarters. Led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat, we deliver world-class web development solutions globally.",
  keywords: [
    "global web development",
    "international clients",
    "Jaipur to worldwide",
    "DEVCODEWEB global reach",
    "Nikhil Kumawat",
    "Vivek Kumawat",
    "worldwide web services",
  ],
  openGraph: {
    title: "Global Reach | DEVCODEWEB",
    description: "Serving clients across India and internationally from our Jaipur headquarters.",
    type: "website",
  },
}

export default function GlobalReachPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GlobalReachHeroSection />
      <GlobalStatsSection />
      <GlobalCaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
