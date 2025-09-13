import { Users, Target, Award, Lightbulb } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export function AboutHeroSection() {
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
              <Users className="h-4 w-4" />
              <span>About DEVCODEWEB</span>
            </div>

            <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight text-balance">
              We Create{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Digital Magic
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Founded in 2025, DEVCODEWEB has been at the forefront of digital innovation in Jaipur, Rajasthan, helping
              businesses transform their online presence with cutting-edge web solutions. Led by CEO Nikhil Kumawat and
              Co-Founder Vivek Kumawat, we believe in the power of great design and clean code to create experiences
              that truly matter.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-2 gap-6">
            <GlassCard className="text-center group hover:border-primary/30">
              <Target className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To empower businesses with innovative digital solutions that drive growth and success.
              </p>
            </GlassCard>

            <GlassCard className="text-center group hover:border-secondary/30">
              <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-lg mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                To be the leading digital agency that shapes the future of web experiences.
              </p>
            </GlassCard>

            <GlassCard className="text-center group hover:border-primary/30 col-span-2">
              <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading font-semibold text-lg mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Innovation, Quality, Integrity, and Client Success drive everything we do.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
