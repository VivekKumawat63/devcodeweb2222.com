import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { PortfolioHeroSection } from "@/components/sections/portfolio-hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Portfolio | DEVCODEWEB - Our Best Work Showcase",
  description:
    "Explore DEVCODEWEB's portfolio of successful projects across various industries. See how CEO Nikhil Kumawat & Co-Founder Vivek Kumawat have helped businesses transform their digital presence in Jaipur and beyond.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHeroSection />
      <CategoriesSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
