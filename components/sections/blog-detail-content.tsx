import { SocialShareButtons } from "@/components/ui/social-share-buttons"

interface BlogPost {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
  content: string
}

interface BlogDetailContentProps {
  post: BlogPost
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <article className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Share Buttons */}
          <div className="mb-8 pb-8 border-b border-border">
            <SocialShareButtons
              url={currentUrl}
              title={post.title}
              description={post.description}
              className="justify-center"
            />
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-muted-foreground prose-li:mb-2 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom Social Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">Found this article helpful? Share it with others!</p>
            </div>
            <SocialShareButtons
              url={currentUrl}
              title={post.title}
              description={post.description}
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
