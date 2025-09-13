import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const relatedPosts = [
  {
    slug: "seo-best-practices-jaipur-businesses",
    title: "SEO Best Practices for Jaipur Businesses in 2024",
    excerpt:
      "Learn how to improve your website's search engine rankings with proven SEO strategies specifically tailored for Jaipur businesses.",
    author: "Nikhil Kumawat",
    date: "December 15, 2024",
    readTime: "7 min read",
    image: "/blog-seo-practices-jaipur.jpg",
    category: "SEO",
  },
  {
    slug: "responsive-web-design-importance",
    title: "Why Responsive Web Design is Crucial for Your Business",
    excerpt:
      "Discover the importance of responsive web design and how it impacts user experience and search engine rankings.",
    author: "Vivek Kumawat",
    date: "December 12, 2024",
    readTime: "6 min read",
    image: "/blog-responsive-design.jpg",
    category: "Design",
  },
  {
    slug: "ecommerce-development-jaipur",
    title: "E-commerce Development Trends in Jaipur",
    excerpt:
      "Explore the latest e-commerce development trends and how Jaipur businesses can leverage them for online success.",
    author: "DEVCODEWEB Team",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "/blog-ecommerce-trends.jpg",
    category: "E-commerce",
  },
]

interface RelatedPostsSectionProps {
  currentSlug: string
}

export function RelatedPostsSection({ currentSlug }: RelatedPostsSectionProps) {
  // Filter out the current post
  const filteredPosts = relatedPosts.filter((post) => post.slug !== currentSlug)

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Related{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continue reading with these related articles from our blog.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 3).map((post) => (
            <GlassCard
              key={post.slug}
              className="group overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg?height=200&width=400&query=blog post image"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <AnimatedButton
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/40 group-hover:bg-primary/5 mt-4"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
