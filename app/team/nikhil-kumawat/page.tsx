import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { TeamMemberHeroSection } from "@/components/sections/team-member-hero-section"
import { TeamMemberBioSection } from "@/components/sections/team-member-bio-section"
import { CTASection } from "@/components/sections/cta-section"

const nikhilData = {
  name: "Nikhil Kumawat",
  role: "CEO & Founder",
  image: "/ceo-nikhil-kumawat-professional-photo.jpg",
  education: "Arya College of Engineering & Technology (AIDS Branch)",
  location: "Jaipur, Rajasthan",
  experience: "1 Year",
  bio: "Visionary leader and CEO with expertise in business strategy and digital innovation. Nikhil founded DEVCODEWEB with a mission to revolutionize web development in Jaipur and beyond.",
  achievements: [
    "Founded DEVCODEWEB in 2025",
    "Led 25+ successful web development projects",
    "Achieved 98% client satisfaction rate",
    "Recognized as emerging tech entrepreneur in Jaipur",
    "Expert in React, Next.js, and modern web technologies",
  ],
  expertise: [
    "Business Strategy & Leadership",
    "Web Development Architecture",
    "Client Relationship Management",
    "Team Building & Management",
    "Digital Innovation",
    "Project Planning & Execution",
  ],
  social: {
    linkedin: "https://linkedin.com/in/nikhil-kumawat-devcodeweb",
    twitter: "https://twitter.com/nikhilkumawat_",
    github: "https://github.com/nikhilkumawat",
  },
}

export const metadata = {
  title: "Nikhil Kumawat - CEO & Founder | DEVCODEWEB",
  description:
    "Meet Nikhil Kumawat, CEO and Founder of DEVCODEWEB. A visionary leader from Arya College of Engineering & Technology, driving digital innovation in Jaipur, Rajasthan.",
  keywords: [
    "Nikhil Kumawat",
    "CEO DEVCODEWEB",
    "web development founder",
    "Jaipur entrepreneur",
    "Arya College AIDS",
    "digital innovation leader",
  ],
  openGraph: {
    title: "Nikhil Kumawat - CEO & Founder | DEVCODEWEB",
    description: "Visionary leader driving digital innovation in Jaipur, Rajasthan.",
    type: "profile",
  },
}

export default function NikhilKumawatPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeamMemberHeroSection member={nikhilData} />
      <TeamMemberBioSection member={nikhilData} />
      <CTASection />
      <Footer />
    </main>
  )
}
