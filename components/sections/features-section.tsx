import { Palette, Code, Smartphone, Zap, Shield, Headphones } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const features = [
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Cutting-edge designs that captivate your audience and reflect your brand identity with pixel-perfect precision.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Efficient, maintainable code that ensures your website runs smoothly and loads at lightning speed.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Beautiful and functional across all devices, from smartphones to ultra-wide desktop displays.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with advanced caching and modern web technologies for instant loading.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures and 99.9% uptime guarantee for peace of mind.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to keep your website running perfectly.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Why Choose DEVCODEWEB</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Exceptional Features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine creativity with technology to deliver web solutions that not only look amazing but perform
            exceptionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={feature.title}
              className="group text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
