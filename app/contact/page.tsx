import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"
import { MapSection } from "@/components/sections/map-section"

export const metadata = {
  title: "Contact Us | DEVCODEWEB - Get In Touch Today",
  description:
    "Ready to start your project? Contact DEVCODEWEB's team of experts for a free consultation and discover how CEO Nikhil Kumawat & Co-Founder Vivek Kumawat can help transform your digital presence in Jaipur.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <MapSection />
      <Footer />
    </main>
  )
}
