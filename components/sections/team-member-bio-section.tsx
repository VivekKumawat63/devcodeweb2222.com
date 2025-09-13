import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Award, Target, Linkedin, Twitter, Github } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  achievements: string[]
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

interface TeamMemberBioSectionProps {
  member: TeamMember
}

export function TeamMemberBioSection({ member }: TeamMemberBioSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Achievements */}
            <GlassCard className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl">Key Achievements</h2>
              </div>

              <ul className="space-y-3">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Expertise */}
            <GlassCard className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl">Areas of Expertise</h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {member.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* About Arya College */}
          <GlassCard className="p-8 mb-12">
            <h2 className="font-heading font-bold text-2xl mb-6">About Arya College of Engineering & Technology</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Arya College of Engineering & Technology is a premier educational institution located in Jaipur,
              Rajasthan, known for its excellence in engineering education and innovation. The college offers various
              undergraduate and postgraduate programs in engineering and technology fields.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The institution is renowned for its modern infrastructure, experienced faculty, and strong industry
              connections. It has consistently produced skilled engineers who have made significant contributions to the
              technology sector both in India and internationally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Both Nikhil Kumawat (AIDS branch) and Vivek Kumawat (ECE branch) are proud alumni of this esteemed
              institution, where they developed their technical foundation and entrepreneurial vision that led to the
              creation of DEVCODEWEB.
            </p>
          </GlassCard>

          {/* Social Links & Contact */}
          <div className="text-center">
            <h3 className="font-heading font-semibold text-xl mb-6">Connect with {member.name.split(" ")[0]}</h3>

            <div className="flex justify-center space-x-4 mb-8">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                  aria-label={`${member.name} Twitter Profile`}
                >
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                  aria-label={`${member.name} GitHub Profile`}
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              )}
            </div>

            <AnimatedButton
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full"
            >
              Get in Touch
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
