import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { TeamMemberHeroSection } from "@/components/sections/team-member-hero-section"
import { TeamMemberBioSection } from "@/components/sections/team-member-bio-section"
import { CTASection } from "@/components/sections/cta-section"

const vivekData = {
  name: "Vivek Kumawat",
  role: "Co-Founder & CFO",
  image: "/cfo-vivek-kumawat-professional-photo.jpg",
  education: "Arya College of Engineering & Technology (ECE Branch)",
  location: "Jaipur, Rajasthan",
  experience: "1 Year",
  bio: "Co-Founder and CFO specializing in financial strategy and operations. Vivek brings innovative approach to digital solutions and ensures sustainable business growth.",
  achievements: [
    "Co-founded DEVCODEWEB in 2025",
    "Managed financial operations for 25+ projects",
    "Developed strategic partnerships in Jaipur",
    "Expert in business development and client relations",
    "Specialized in financial planning and analysis",
  ],
  expertise: [
    "Financial Strategy & Planning",
    "Business Operations Management",
    "Client Relationship Development",
    "Strategic Partnerships",
    "Market Analysis & Research",
    "Digital Marketing Strategy",
  ],
  social: {
    linkedin: "https://linkedin.com/in/vivek-kumawat-devcodeweb",
    twitter: "https://twitter.com/vivekkumawat_",
  },
}

export const metadata = {
  title: "Vivek Kumawat - Co-Founder & CFO | DEVCODEWEB",
  description:
    "Meet Vivek Kumawat, Co-Founder and CFO of DEVCODEWEB. A strategic leader from Arya College of Engineering & Technology, specializing in business operations and financial strategy in Jaipur, Rajasthan.",
  keywords: [
    "Vivek Kumawat",
    "CFO DEVCODEWEB",
    "co-founder",
    "Jaipur business leader",
    "Arya College ECE",
    "financial strategy expert",
  ],
  openGraph: {
    title: "Vivek Kumawat - Co-Founder & CFO | DEVCODEWEB",
    description: "Strategic leader specializing in business operations and financial strategy in Jaipur, Rajasthan.",
    type: "profile",
  },
}

export default function VivekKumawatPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeamMemberHeroSection member={vivekData} />
      <TeamMemberBioSection member={vivekData} />
      <CTASection />
      <Footer />
    </main>
  )
}
