"use client"

import { ArrowRight, Play, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { GlassCard } from "@/components/ui/glass-card"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Best Website Developer in Jaipur</span>
            </div>

            <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance">
              Create Stunning{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                Digital Experiences
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              DEVCODEWEB, led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat, crafts visually stunning,
              high-performance websites that convert visitors into customers and drive exponential business growth in
              Jaipur, Rajasthan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton
                href="/contact"
                size="lg"
                glow
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>

              <AnimatedButton
                href="/portfolio"
                variant="outline"
                size="lg"
                className="border-2 border-primary/20 hover:border-primary/40 px-8 py-4 rounded-full"
              >
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </AnimatedButton>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <GlassCard className="p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <div className="h-4 bg-gradient-to-r from-secondary to-primary rounded-full w-3/4" />
                <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded-full w-1/2" />
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                  <div className="h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg" />
                </div>
              </div>
            </GlassCard>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce" />
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
