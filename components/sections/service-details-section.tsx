import { Monitor, Palette, Search, Smartphone, Code, Zap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const serviceDetails = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.",
    features: [
      "React & Next.js Development",
      "Full-Stack Solutions",
      "API Development & Integration",
      "Performance Optimization",
      "Progressive Web Apps",
      "E-commerce Platforms",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive, engaging experiences and drive conversions through strategic design thinking.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Mobile-First Design",
      "Accessibility Compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Comprehensive SEO strategies and digital marketing campaigns that increase visibility, drive traffic, and boost conversions.",
    features: [
      "Technical SEO Audits",
      "Content Strategy",
      "Link Building Campaigns",
      "PPC Management",
      "Social Media Marketing",
      "Analytics & Reporting",
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Facebook Ads", "Mailchimp"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: [
      "iOS & Android Development",
      "React Native Apps",
      "Flutter Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
  },
]

export function ServiceDetailsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-3xl lg:text-4xl">{service.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <GlassCard className="p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <Code className="h-8 w-8 text-primary" />
                      </div>
                      <div className="h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                        <Zap className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <div className="h-3 bg-gradient-to-r from-secondary to-primary rounded-full w-3/4" />
                      <div className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full w-1/2" />
                    </div>
                    <div className="text-center text-sm text-muted-foreground font-medium">
                      {service.title} Visualization
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
