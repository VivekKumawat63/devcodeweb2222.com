import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ExternalLink, MapPin, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Platform for Jaipur Handicrafts",
    client: "Rajasthani Crafts Co.",
    location: "Jaipur, Rajasthan",
    industry: "E-commerce",
    results: "300% increase in online sales, 50% growth in international orders",
    description:
      "Developed a comprehensive e-commerce platform showcasing traditional Rajasthani handicrafts to global customers, featuring multi-currency support and international shipping integration.",
    technologies: ["React", "Next.js", "Stripe", "MongoDB"],
    image: "/case-study-handicrafts-ecommerce.jpg",
  },
  {
    title: "Educational Platform for Delhi University",
    client: "Delhi Education Institute",
    location: "Delhi, India",
    industry: "Education",
    results: "10,000+ students enrolled, 95% user satisfaction rate",
    description:
      "Created a modern learning management system with interactive features, video streaming, and progress tracking for enhanced online education experience.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
    image: "/case-study-education-platform.jpg",
  },
  {
    title: "Healthcare Management System",
    client: "Mumbai Medical Center",
    location: "Mumbai, Maharashtra",
    industry: "Healthcare",
    results: "40% reduction in appointment scheduling time, improved patient satisfaction",
    description:
      "Developed a comprehensive healthcare management system with patient portals, appointment scheduling, and telemedicine capabilities.",
    technologies: ["Angular", "Express.js", "MySQL", "Socket.io"],
    image: "/case-study-healthcare-system.jpg",
  },
]

export function GlobalCaseStudiesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Global{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from our clients across different cities and industries, showcasing our ability to
            deliver results regardless of location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <GlassCard key={index} className="group hover:border-primary/30 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={study.image || "/placeholder.svg?height=250&width=500&query=case study project"}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{study.location}</span>
                  </div>
                  <span className="font-medium text-primary">{study.client}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{study.description}</p>

                <div className="flex items-center space-x-2 text-secondary font-medium">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{study.results}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton
            href="/portfolio"
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
          >
            View All Case Studies
            <ExternalLink className="ml-2 h-5 w-5" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
