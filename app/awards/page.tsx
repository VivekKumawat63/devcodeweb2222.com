import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { AwardsHeroSection } from "@/components/sections/awards-hero-section"
import { AwardsListSection } from "@/components/sections/awards-list-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Awards & Recognition | DEVCODEWEB - Jaipur's Award-Winning Web Development Company",
  description:
    "Discover the awards and recognition received by DEVCODEWEB, led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat. Celebrating excellence in web development and digital innovation in Jaipur, Rajasthan.",
  keywords: [
    "awards",
    "recognition",
    "web development awards",
    "Jaipur web developer",
    "DEVCODEWEB achievements",
    "Nikhil Kumawat",
    "Vivek Kumawat",
    "digital innovation awards",
  ],
  openGraph: {
    title: "Awards & Recognition | DEVCODEWEB",
    description: "Celebrating excellence in web development and digital innovation in Jaipur, Rajasthan.",
    type: "website",
  },
}

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AwardsHeroSection />
      <AwardsListSection />
      <CTASection />
      <Footer />
    </main>
  )
}
