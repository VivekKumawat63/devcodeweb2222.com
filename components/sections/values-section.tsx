import { Heart, Zap, Shield, Users } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We're passionate about what we do. Every project is an opportunity to create something amazing and push the boundaries of what's possible.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of the curve by embracing new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We believe in honest communication, transparent processes, and delivering on our promises every single time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring their vision is brought to life through collaborative effort.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Our Core{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These fundamental principles guide our work and define who we are as a company. They shape every decision we
            make and every solution we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <GlassCard
              key={value.title}
              className="text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
