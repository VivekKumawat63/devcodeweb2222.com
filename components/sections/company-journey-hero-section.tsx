import { Rocket } from "lucide-react"

export function CompanyJourneyHeroSection() {
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
          <Rocket className="h-4 w-4" />
          <span>Our Journey</span>
        </div>

        <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance mb-6">
          From Vision to{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Reality
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto mb-8">
          The story of DEVCODEWEB began with a simple yet powerful vision: to revolutionize web development in Jaipur
          and beyond. Founded in 2025 by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, our journey is one of passion,
          innovation, and unwavering commitment to excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">2025</div>
            <div className="text-sm text-muted-foreground">Company Founded</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
