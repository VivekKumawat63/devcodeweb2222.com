import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Ready to Get Started?</span>
          </div>

          <h2 className="font-heading font-bold text-4xl lg:text-6xl mb-6 text-balance">
            Transform Your Digital Presence Today
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge web
            solutions. Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              href="/contact"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>

            <AnimatedButton
              href="/contact?consultation=true"
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full"
            >
              Schedule Consultation
            </AnimatedButton>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">TechCorp</div>
              <div className="text-white font-semibold">InnovateNow</div>
              <div className="text-white font-semibold">DigitalFirst</div>
              <div className="text-white font-semibold">FutureWeb</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
