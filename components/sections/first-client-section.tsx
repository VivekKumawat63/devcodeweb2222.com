import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Star, User, ExternalLink } from "lucide-react"

export function FirstClientSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our First{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Major Client
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every successful journey has a beginning. Meet Ganpat Nodal, our first major client who believed in our
            vision and helped us establish our reputation in the industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-10 w-10 text-white" />
            </div>

            <h3 className="font-heading font-bold text-2xl mb-4">Ganpat Nodal</h3>

            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Education Website Owner
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ganpat Nodal operates an education website and was one of the first to recognize the potential of
                DEVCODEWEB. Having previously supported development projects, he strongly recommended our services to
                others in the education sector.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-muted-foreground">
                  "DEVCODEWEB delivered exactly what we needed for our education platform. Their attention to detail and
                  commitment to quality is exceptional. I highly recommend them to anyone looking for professional web
                  development services."
                </blockquote>
                <cite className="text-primary font-medium mt-4 block">- Ganpat Nodal</cite>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-primary mb-2">Education</div>
                  <div className="text-sm text-muted-foreground">Industry Focus</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">Partnership Started</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <AnimatedButton
              href="/portfolio"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
            >
              View Case Study
              <ExternalLink className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
