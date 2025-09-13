import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"

const featuredPosts = [
  {
    slug: "best-website-developer-jaipur-2024",
    title: "Why DEVCODEWEB is the Best Website Developer in Jaipur 2024",
    excerpt:
      "Discover why DEVCODEWEB, led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, is recognized as Jaipur's top web development company with 25+ successful projects.",
    author: "Nikhil Kumawat",
    date: "December 20, 2024",
    readTime: "8 min read",
    image: "/blog-best-developer-jaipur.jpg",
    category: "Company",
    featured: true,
  },
  {
    slug: "web-development-trends-2024",
    title: "Top Web Development Trends in 2024: What Jaipur Businesses Need to Know",
    excerpt:
      "Stay ahead of the competition with the latest web development trends for 2024. Learn how DEVCODEWEB implements cutting-edge technologies for Jaipur businesses.",
    author: "Vivek Kumawat",
    date: "December 18, 2024",
    readTime: "10 min read",
    image: "/blog-web-trends-2024.jpg",
    category: "Technology",
    featured: true,
  },
]

export function FeaturedPostsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our most popular and insightful articles that have helped thousands of developers and designers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {featuredPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard className="group overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image || "/placeholder.svg?height=300&width=600&query=featured blog post image"}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
