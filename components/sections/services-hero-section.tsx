import { Sparkles } from "lucide-react"

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          <span>Our Services</span>
        </div>

        <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance mb-6">
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto">
          From concept to launch, we provide end-to-end digital solutions that transform your business and accelerate
          growth. Our expert team combines creativity with cutting-edge technology to deliver exceptional results.
        </p>
      </div>
    </section>
  )
}
