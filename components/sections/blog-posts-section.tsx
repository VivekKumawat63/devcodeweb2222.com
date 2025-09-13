import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const blogPosts = [
  {
    slug: "best-website-developer-jaipur-2024",
    title: "Why DEVCODEWEB is the Best Website Developer in Jaipur 2024",
    excerpt:
      "Discover why DEVCODEWEB, led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, is recognized as Jaipur's top web development company.",
    author: "Nikhil Kumawat",
    date: "December 20, 2024",
    readTime: "8 min read",
    image: "/jaipur-web-development-office-modern-workspace.jpg",
    category: "Company",
  },
  {
    slug: "web-development-trends-2024",
    title: "Top Web Development Trends in 2024: What Jaipur Businesses Need to Know",
    excerpt:
      "Stay ahead of the competition with the latest web development trends for 2024. Learn how DEVCODEWEB implements cutting-edge technologies.",
    author: "Vivek Kumawat",
    date: "December 18, 2024",
    readTime: "10 min read",
    image: "/modern-web-development-trends-2024-technology.jpg",
    category: "Technology",
  },
  {
    slug: "seo-best-practices-jaipur-businesses",
    title: "SEO Best Practices for Jaipur Businesses in 2024",
    excerpt:
      "Learn how to improve your website's search engine rankings with proven SEO strategies specifically tailored for Jaipur businesses.",
    author: "Aditya Devatwal",
    date: "December 15, 2024",
    readTime: "7 min read",
    image: "/seo-optimization-jaipur-business-local-search.jpg",
    category: "SEO",
  },
  {
    slug: "responsive-web-design-importance",
    title: "Why Responsive Web Design is Crucial for Your Business",
    excerpt:
      "Discover the importance of responsive web design and how it impacts user experience and search engine rankings.",
    author: "Harshit Kumawaat",
    date: "December 12, 2024",
    readTime: "6 min read",
    image: "/responsive-web-design-mobile-desktop-tablet.jpg",
    category: "Design",
  },
  {
    slug: "ecommerce-development-jaipur",
    title: "E-commerce Development Trends in Jaipur",
    excerpt:
      "Explore the latest e-commerce development trends and how Jaipur businesses can leverage them for online success.",
    author: "Nikhil Kumawat",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "/ecommerce-development-online-shopping-jaipur.jpg",
    category: "E-commerce",
  },
  {
    slug: "javascript-performance-optimization",
    title: "JavaScript Performance Optimization: Advanced Techniques",
    excerpt:
      "A comprehensive look at advanced JavaScript optimization techniques that can significantly improve your application's performance.",
    author: "Aditya Devatwal",
    date: "December 8, 2024",
    readTime: "9 min read",
    image: "/javascript-performance-optimization-code.jpg",
    category: "JavaScript",
  },
]

export function BlogPostsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fresh insights, tutorials, and industry updates from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard className="group overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
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
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton
            href="/blog"
            size="lg"
            className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white font-semibold px-8 py-4 rounded-full"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
