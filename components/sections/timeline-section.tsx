import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description:
      "Starting from college — 2nd year at Arya College of Engineering. Founded by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat with a vision to revolutionize digital experiences.",
    link: "/about/company-founded",
  },
  {
    year: "2025",
    title: "First Major Client",
    description:
      "Ganpat Nodal becomes our first major client, operating an education website and strongly recommending our services.",
    link: "/about/first-client",
  },
  {
    year: "2025",
    title: "Team Expansion - Aditya Joins",
    description:
      "Aditya Devatwal joins as Developer, SEO specialist, and advertisement expert, expanding our technical capabilities.",
  },
  {
    year: "2025",
    title: "Team Growth - Harshit Joins",
    description:
      "Harshit Kumawaat joins as Project Manager, bringing professional project management and client coordination expertise.",
  },
  {
    year: "2025",
    title: "Innovation Hub",
    description:
      "Established our innovation lab focusing on emerging technologies and modern web development practices in Jaipur.",
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From college students to a growing digital agency, here's how we've evolved and expanded our team in 2025.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${index}`}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
              >
                <div className="flex-1">
                  <GlassCard
                    className={`${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    } max-w-md group hover:border-primary/30 transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-semibold text-xl">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{milestone.description}</p>
                    {milestone.link && (
                      <Link
                        href={milestone.link}
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    )}
                  </GlassCard>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
