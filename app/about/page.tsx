import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { TeamSection } from "@/components/sections/team-section"
import { ValuesSection } from "@/components/sections/values-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "About Us | DEVCODEWEB - Best Website Developer in Jaipur",
  description:
    "Learn about DEVCODEWEB's mission, values, and the talented team behind Jaipur's top web development company. CEO Nikhil Kumawat & Co-Founder Vivek Kumawat are passionate about creating exceptional digital experiences.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHeroSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  )
}
