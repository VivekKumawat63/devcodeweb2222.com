import { GlassCard } from "@/components/ui/glass-card"
import { Users, UserPlus, Briefcase, Trophy } from "lucide-react"

const timelineEvents = [
  {
    phase: "Phase 1",
    title: "The Beginning - College Days",
    date: "2024",
    description:
      "Starting from college — 2nd year at Arya College of Engineering & Technology. Nikhil Kumawat (AIDS branch) and Vivek Kumawat (ECE branch) shared a vision of creating innovative digital solutions.",
    icon: Users,
    details: [
      "Met at Arya College of Engineering & Technology",
      "Nikhil studying AIDS (Artificial Intelligence & Data Science)",
      "Vivek studying ECE (Electronics & Communication Engineering)",
      "Shared passion for technology and entrepreneurship",
      "Started working on small projects together",
    ],
  },
  {
    phase: "Phase 2",
    title: "Company Foundation",
    date: "Early 2025",
    description:
      "DEVCODEWEB was officially founded by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat with a mission to deliver exceptional web development services in Jaipur.",
    icon: Briefcase,
    details: [
      "Officially registered DEVCODEWEB",
      "Established headquarters in Jaipur, Rajasthan",
      "Defined company mission and vision",
      "Set up initial development infrastructure",
      "Created brand identity and website",
    ],
  },
  {
    phase: "Phase 3",
    title: "First Team Expansion - Aditya Joins",
    date: "Mid 2025",
    description:
      "Aditya Devatwal joined as Developer & SEO Specialist, bringing expertise in full-stack development, SEO optimization, and digital marketing strategies.",
    icon: UserPlus,
    details: [
      "Aditya Devatwal joins as Developer & SEO Specialist",
      "Expanded technical capabilities",
      "Added SEO and digital marketing services",
      "Improved development processes and workflows",
      "Enhanced client service offerings",
    ],
  },
  {
    phase: "Phase 4",
    title: "Project Management Excellence - Harshit Joins",
    date: "Late 2025",
    description:
      "Harshit Kumawaat joined as Project Manager, ensuring seamless project delivery and exceptional client satisfaction through agile methodologies.",
    icon: Trophy,
    details: [
      "Harshit Kumawaat joins as Project Manager",
      "Implemented agile project management methodologies",
      "Improved client communication and satisfaction",
      "Streamlined project delivery processes",
      "Achieved 98% client satisfaction rate",
    ],
  },
]

export function CompanyTimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From college friends to business partners, here's how DEVCODEWEB evolved into Jaipur's leading web
            development company.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30" />
              )}

              <div className="flex items-start space-x-6 mb-12">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <event.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <GlassCard className="flex-1 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {event.phase}
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{event.date}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                  <ul className="space-y-2">
                    {event.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
