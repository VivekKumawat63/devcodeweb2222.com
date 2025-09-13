import { HelpCircle } from "lucide-react"

export function FAQHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <HelpCircle className="h-4 w-4" />
          <span>Frequently Asked Questions</span>
        </div>

        <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance mb-6">
          Got{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Questions?
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto">
          Find answers to the most common questions about DEVCODEWEB's web development services in Jaipur, our process,
          pricing, and why we're considered the best website developers in Rajasthan.
        </p>
      </div>
    </section>
  )
}
