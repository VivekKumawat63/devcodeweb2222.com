import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { BlogHeroSection } from "@/components/sections/blog-hero-section"
import { FeaturedPostsSection } from "@/components/sections/featured-posts-section"
import { BlogPostsSection } from "@/components/sections/blog-posts-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export const metadata = {
  title: "Blog | DEVCODEWEB - Digital Insights & Trends",
  description:
    "Stay updated with the latest web development trends, design insights, and digital marketing strategies from DEVCODEWEB's expert team in Jaipur, led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHeroSection />
      <FeaturedPostsSection />
      <BlogPostsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
