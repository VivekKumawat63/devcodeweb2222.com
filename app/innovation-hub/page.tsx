import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { InnovationHeroSection } from "@/components/sections/innovation-hero-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { InnovationProjectsSection } from "@/components/sections/innovation-projects-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Innovation Hub | DEVCODEWEB - R&D and Technology Innovation Center",
  description:
    "Explore DEVCODEWEB's Innovation Hub where CEO Nikhil Kumawat & Co-Founder Vivek Kumawat lead cutting-edge R&D, technology experimentation, and digital innovation projects in Jaipur, Rajasthan.",
  keywords: [
    "innovation hub",
    "R&D center",
    "technology innovation",
    "web development research",
    "DEVCODEWEB innovation",
    "Nikhil Kumawat",
    "Vivek Kumawat",
    "tech incubator Jaipur",
  ],
  openGraph: {
    title: "Innovation Hub | DEVCODEWEB",
    description: "Leading cutting-edge R&D and technology innovation in web development from Jaipur, Rajasthan.",
    type: "website",
  },
}

export default function InnovationHubPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InnovationHeroSection />
      <TechStackSection />
      <InnovationProjectsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
