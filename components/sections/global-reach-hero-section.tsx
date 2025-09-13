import { Globe } from "lucide-react"

export function GlobalReachHeroSection() {
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
          <Globe className="h-4 w-4" />
          <span>Global Reach</span>
        </div>

        <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance mb-6">
          From Jaipur to{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            The World
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto mb-8">
          Based in the heart of Jaipur, Rajasthan, DEVCODEWEB serves clients across India and internationally. Led by
          CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we bridge local expertise with global standards to deliver
          exceptional web development solutions worldwide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Industries</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Global Projects</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
