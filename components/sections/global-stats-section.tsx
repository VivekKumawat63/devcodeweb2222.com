import { GlassCard } from "@/components/ui/glass-card"
import { MapPin, Users, Globe, Clock } from "lucide-react"

const locations = [
  {
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    status: "Headquarters",
    description:
      "Our main office and development center, serving as the hub for all operations and client communications.",
    icon: MapPin,
    isPrimary: true,
  },
  {
    city: "Delhi",
    state: "Delhi",
    country: "India",
    status: "Service Area",
    description:
      "Serving clients in the national capital region with comprehensive web development and digital solutions.",
    icon: MapPin,
    isPrimary: false,
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    status: "Service Area",
    description:
      "Supporting businesses in India's financial capital with cutting-edge web technologies and digital marketing.",
    icon: MapPin,
    isPrimary: false,
  },
]

const globalStats = [
  {
    icon: Globe,
    title: "International Presence",
    description:
      "While based in Jaipur, we serve clients across multiple countries through remote collaboration and digital communication tools.",
  },
  {
    icon: Users,
    title: "Diverse Client Base",
    description:
      "Our portfolio includes clients from various industries including e-commerce, healthcare, education, and technology sectors.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock support ensures seamless communication and project delivery across different time zones.",
  },
]

export function GlobalStatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategically positioned to serve clients across India with plans for international expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <GlassCard
              key={index}
              className={`text-center group transition-all duration-300 ${
                location.isPrimary ? "border-primary/50 scale-105" : "hover:border-primary/30"
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                  location.isPrimary
                    ? "bg-gradient-to-br from-primary to-secondary"
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}
              >
                <location.icon className={`h-6 w-6 ${location.isPrimary ? "text-white" : "text-primary"}`} />
              </div>

              <h3 className="font-heading font-semibold text-xl mb-1">{location.city}</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {location.state}, {location.country}
              </p>

              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  location.isPrimary ? "bg-primary text-white" : "bg-secondary/10 text-secondary"
                }`}
              >
                {location.status}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{location.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {globalStats.map((stat, index) => (
            <GlassCard key={index} className="text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {stat.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
