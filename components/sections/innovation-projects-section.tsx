import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Rocket, Brain, Zap, Target } from "lucide-react"

const innovationProjects = [
  {
    title: "AI-Powered Website Builder",
    status: "In Development",
    description:
      "Developing an intelligent website builder that uses AI to automatically generate layouts, content, and designs based on user requirements and industry best practices.",
    technologies: ["AI/ML", "React", "Python", "TensorFlow"],
    icon: Brain,
    progress: 75,
  },
  {
    title: "Voice-Controlled Web Interface",
    status: "Research Phase",
    description:
      "Experimenting with voice recognition technology to create hands-free web interfaces that can be controlled entirely through voice commands.",
    technologies: ["Web Speech API", "JavaScript", "Machine Learning"],
    icon: Zap,
    progress: 40,
  },
  {
    title: "Blockchain-Based Portfolio System",
    status: "Prototype",
    description:
      "Building a decentralized portfolio management system using blockchain technology to ensure data integrity and ownership verification.",
    technologies: ["Blockchain", "Web3", "Smart Contracts", "React"],
    icon: Target,
    progress: 60,
  },
  {
    title: "AR/VR Web Experiences",
    status: "Concept",
    description:
      "Exploring augmented and virtual reality integration in web applications to create immersive user experiences for e-commerce and education.",
    technologies: ["WebXR", "Three.js", "A-Frame", "WebGL"],
    icon: Rocket,
    progress: 25,
  },
]

const hackathons = [
  {
    name: "Jaipur Tech Hackathon 2024",
    position: "1st Place",
    project: "Smart City Dashboard",
    description:
      "Won first place for developing a comprehensive smart city dashboard for Jaipur municipal corporation.",
  },
  {
    name: "Rajasthan Innovation Challenge",
    position: "2nd Place",
    project: "E-Learning Platform",
    description: "Secured second position for creating an innovative e-learning platform for rural education.",
  },
  {
    name: "India Web Dev Summit",
    position: "Finalist",
    project: "Green Web Initiative",
    description: "Reached finals with a project focused on sustainable web development practices.",
  },
]

export function InnovationProjectsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* R&D Projects */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              R&D{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ongoing research and development projects that push the boundaries of web technology and user
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationProjects.map((project, index) => (
              <GlassCard key={index} className="group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {project.status}
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Hackathon{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our participation and success in various hackathons and innovation challenges across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {hackathons.map((hackathon, index) => (
              <GlassCard key={index} className="text-center group hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {hackathon.name}
                </h3>

                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {hackathon.position}
                </div>

                <p className="text-primary font-medium mb-2">{hackathon.project}</p>

                <p className="text-muted-foreground text-sm leading-relaxed">{hackathon.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center">
            <AnimatedButton
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
            >
              Join Our Innovation Journey
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
