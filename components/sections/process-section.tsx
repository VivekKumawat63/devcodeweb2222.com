import { Search, Lightbulb, Code, Rocket } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description:
      "We start by understanding your business goals, target audience, and project requirements through comprehensive research and analysis.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "Our team creates detailed wireframes, prototypes, and design systems that align with your brand and user needs.",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description:
      "We build your solution using modern technologies, conducting thorough testing to ensure quality and performance.",
    duration: "4-8 weeks",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support, maintenance, and optimization to ensure continued success.",
    duration: "Ongoing",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Our Proven{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We follow a structured approach that ensures every project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <GlassCard className="text-center group hover:border-primary/30 transition-all duration-300 h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-heading font-semibold text-xl mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <span>{step.duration}</span>
                  </div>
                </div>
              </GlassCard>

              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
