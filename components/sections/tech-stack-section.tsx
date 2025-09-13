import { GlassCard } from "@/components/ui/glass-card"
import { Code, Database, Cloud, Smartphone, Palette, Shield } from "lucide-react"

const techCategories = [
  {
    title: "Frontend Technologies",
    icon: Code,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    description: "Modern frontend frameworks and libraries for creating responsive, interactive user interfaces.",
  },
  {
    title: "Backend Development",
    icon: Database,
    technologies: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel"],
    description: "Robust backend technologies for scalable server-side applications and APIs.",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    description: "Cloud platforms and DevOps tools for deployment, scaling, and infrastructure management.",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "iOS", "Android", "PWA", "Ionic"],
    description: "Cross-platform and native mobile development technologies for iOS and Android.",
  },
  {
    title: "Design & UX",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "InVision"],
    description: "Design tools and prototyping platforms for creating exceptional user experiences.",
  },
  {
    title: "Security & Performance",
    icon: Shield,
    technologies: ["SSL/TLS", "OAuth", "JWT", "CDN", "Caching", "Monitoring"],
    description: "Security protocols and performance optimization tools for robust applications.",
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our Technology{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build innovative, scalable, and high-performance
            digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <GlassCard key={index} className="group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{category.description}</p>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
