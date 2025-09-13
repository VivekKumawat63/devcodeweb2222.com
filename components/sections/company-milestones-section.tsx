import { GlassCard } from "@/components/ui/glass-card"
import { Target, Users, Award, TrendingUp, Globe, Lightbulb } from "lucide-react"

const milestones = [
  {
    title: "Company Foundation",
    description: "DEVCODEWEB officially founded by Nikhil Kumawat and Vivek Kumawat",
    date: "2025",
    icon: Target,
    category: "Foundation",
  },
  {
    title: "First Team Member",
    description: "Aditya Devatwal joins as Developer & SEO Specialist",
    date: "2025",
    icon: Users,
    category: "Growth",
  },
  {
    title: "Project Management Excellence",
    description: "Harshit Kumawaat joins as Project Manager",
    date: "2025",
    icon: Award,
    category: "Excellence",
  },
  {
    title: "25+ Projects Milestone",
    description: "Successfully completed 25+ projects with 98% client satisfaction",
    date: "2025",
    icon: TrendingUp,
    category: "Achievement",
  },
  {
    title: "Multi-City Presence",
    description: "Expanded services to Delhi and Mumbai markets",
    date: "2025",
    icon: Globe,
    category: "Expansion",
  },
  {
    title: "Innovation Hub Launch",
    description: "Established R&D division for cutting-edge technology research",
    date: "2025",
    icon: Lightbulb,
    category: "Innovation",
  },
]

const missionVision = {
  mission:
    "To empower businesses with innovative web solutions that drive growth, enhance user experience, and create lasting digital impact. We are committed to delivering exceptional quality, fostering long-term partnerships, and contributing to the digital transformation of businesses in Jaipur and beyond.",
  vision:
    "To become the leading web development company in India, recognized for our innovation, quality, and client success. We envision a future where every business, regardless of size, has access to world-class digital solutions that help them thrive in the digital economy.",
  values: [
    "Excellence in every project we deliver",
    "Innovation through cutting-edge technology",
    "Transparency in all client communications",
    "Continuous learning and improvement",
    "Client success as our primary measure of success",
    "Ethical business practices and integrity",
  ],
}

export function CompanyMilestonesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Mission &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our guiding principles that drive everything we do at DEVCODEWEB.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <GlassCard className="p-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">{missionVision.mission}</p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">{missionVision.vision}</p>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {missionVision.values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Major Milestones */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Major{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key achievements that mark our journey from startup to industry leader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <GlassCard key={index} className="group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <milestone.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {milestone.category}
                    </div>
                    <div className="text-sm text-muted-foreground">{milestone.date}</div>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
