import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
}

interface BlogDetailHeroProps {
  post: BlogPost
}

export function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>{post.category}</span>
          </div>

          <h1 className="font-heading font-black text-4xl lg:text-6xl leading-tight text-balance mb-6">{post.title}</h1>

          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto mb-8">
            {post.description}
          </p>

          <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <img
              src={post.image || "/placeholder.svg?height=400&width=800&query=blog hero image"}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
