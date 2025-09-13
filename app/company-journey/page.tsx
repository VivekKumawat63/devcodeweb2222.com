import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { CompanyJourneyHeroSection } from "@/components/sections/company-journey-hero-section"
import { CompanyTimelineSection } from "@/components/sections/company-timeline-section"
import { CompanyMilestonesSection } from "@/components/sections/company-milestones-section"
import { FirstClientSection } from "@/components/sections/first-client-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Company Journey | DEVCODEWEB - Our Story from Vision to Success",
  description:
    "Discover the inspiring journey of DEVCODEWEB from its founding by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat to becoming Jaipur's leading web development company. Learn about our mission, vision, and major milestones.",
  keywords: [
    "DEVCODEWEB journey",
    "company story",
    "Nikhil Kumawat founder",
    "Vivek Kumawat co-founder",
    "Jaipur web development",
    "startup story",
    "company milestones",
  ],
  openGraph: {
    title: "Company Journey | DEVCODEWEB",
    description: "The inspiring story of DEVCODEWEB's journey from vision to success in Jaipur, Rajasthan.",
    type: "website",
  },
}

export default function CompanyJourneyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CompanyJourneyHeroSection />
      <CompanyTimelineSection />
      <FirstClientSection />
      <CompanyMilestonesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
