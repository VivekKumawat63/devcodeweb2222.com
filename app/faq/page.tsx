import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { FAQHeroSection } from "@/components/sections/faq-hero-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "FAQ | DEVCODEWEB - Frequently Asked Questions",
  description:
    "Get answers to frequently asked questions about DEVCODEWEB's web development services in Jaipur. Learn why CEO Nikhil Kumawat & Co-Founder Vivek Kumawat are the best website developers in Jaipur, Rajasthan.",
  keywords: [
    "FAQ",
    "web development questions",
    "best website developer in Jaipur",
    "Nikhil Kumawat",
    "Vivek Kumawat",
    "DEVCODEWEB",
    "Jaipur web development",
  ],
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FAQHeroSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
