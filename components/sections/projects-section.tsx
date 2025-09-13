import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const projects = [
  {
    title: "Ganpat Nodal Education Platform",
    category: "Education",
    description:
      "Comprehensive education website with modern design, optimized performance, and user-friendly interface for students and educators across Rajasthan.",
    image: "/project-ganpat-nodal-education-platform.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Jaipur E-commerce Store",
    category: "E-commerce",
    description:
      "Modern e-commerce platform for local Jaipur businesses with payment integration, inventory management, and mobile-responsive design.",
    image: "/project-jaipur-ecommerce-store.jpg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Rajasthan Tourism Website",
    category: "Tourism",
    description:
      "Beautiful tourism website showcasing Rajasthan's heritage with interactive maps, booking system, and multilingual support.",
    image: "/project-rajasthan-tourism-website.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Maps API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Local Business Directory",
    category: "Business",
    description:
      "Comprehensive business directory for Jaipur with search functionality, business profiles, and review system.",
    image: "/project-local-business-directory.jpg",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Healthcare Clinic Portal",
    category: "Healthcare",
    description:
      "Patient management system with appointment booking, medical records, and telemedicine capabilities for local clinics.",
    image: "/project-healthcare-clinic-portal.jpg",
    technologies: ["React", "Express", "MySQL", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Restaurant Management System",
    category: "Restaurant",
    description:
      "Complete restaurant management solution with online ordering, table reservations, and inventory tracking.",
    image: "/project-restaurant-management-system.jpg",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Payment Gateway"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise in delivering exceptional digital solutions for
              businesses in Jaipur and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <GlassCard
                key={project.title}
                className="group overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image || "/placeholder.svg?height=256&width=400&query=modern website project"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              More{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularProjects.map((project) => (
              <GlassCard
                key={project.title}
                className="group overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image || "/placeholder.svg?height=192&width=300&query=website project"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>

                  <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full"
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
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
