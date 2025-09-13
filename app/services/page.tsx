import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ServicesHeroSection } from "@/components/sections/services-hero-section"
import { ServiceDetailsSection } from "@/components/sections/service-details-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Services | DEVCODEWEB - Comprehensive Digital Solutions in Jaipur",
  description:
    "Explore DEVCODEWEB's comprehensive range of digital services including web development, UI/UX design, SEO, and more. Transform your business today with Jaipur's best website developer.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHeroSection />
      <ServiceDetailsSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
