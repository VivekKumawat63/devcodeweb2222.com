import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Award, Star, Trophy, Medal, Target } from "lucide-react"

const awards = [
  {
    title: "Best Emerging Web Development Company - Jaipur 2024",
    organization: "Rajasthan Digital Innovation Awards",
    year: "2024",
    description:
      "Recognized for outstanding innovation and excellence in web development services, delivering cutting-edge solutions to businesses across Jaipur and Rajasthan.",
    icon: Trophy,
    category: "Innovation",
  },
  {
    title: "Excellence in Client Satisfaction Award",
    organization: "Indian Web Developers Association",
    year: "2024",
    description:
      "Awarded for maintaining 98% client satisfaction rate and delivering exceptional customer service throughout all project phases.",
    icon: Star,
    category: "Client Service",
  },
  {
    title: "Rising Star in Digital Solutions",
    organization: "Jaipur Tech Excellence Awards",
    year: "2024",
    description:
      "Honored for rapid growth and innovative approach to web development, mobile applications, and digital marketing solutions.",
    icon: Medal,
    category: "Growth",
  },
  {
    title: "Best UI/UX Design Implementation",
    organization: "Rajasthan Design Council",
    year: "2024",
    description:
      "Recognized for creating visually stunning and user-friendly interfaces that enhance user experience and drive business results.",
    icon: Target,
    category: "Design",
  },
  {
    title: "Outstanding Technical Innovation Award",
    organization: "India Web Development Summit",
    year: "2024",
    description:
      "Celebrated for implementing cutting-edge technologies including React, Next.js, and modern web frameworks in client projects.",
    icon: Award,
    category: "Technology",
  },
]

export function AwardsListSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These awards reflect our commitment to excellence, innovation, and client satisfaction in the web
            development industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {awards.map((award, index) => (
            <GlassCard key={index} className="group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <award.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium mb-2">
                    {award.category}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{award.year}</div>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {award.title}
              </h3>

              <p className="text-primary font-medium text-sm mb-3">{award.organization}</p>

              <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton
            href="/contact"
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
          >
            View More Details
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
