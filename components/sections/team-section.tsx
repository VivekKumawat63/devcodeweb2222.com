import { GlassCard } from "@/components/ui/glass-card"
import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Nikhil Kumawat",
    role: "CEO & Founder",
    image: "/ceo-nikhil-kumawat-professional-photo.jpg",
    bio: "Visionary leader and CEO with expertise in business strategy and digital innovation. Studied at Arya College of Engineering & Technology (AIDS branch).",
    social: {
      linkedin: "https://linkedin.com/in/nikhil-kumawat-devcodeweb",
      twitter: "https://twitter.com/nikhilkumawat_",
      github: "https://github.com/nikhilkumawat",
    },
  },
  {
    name: "Vivek Kumawat",
    role: "Co-Founder & CFO",
    image: "/cfo-vivek-kumawat-professional-photo.jpg",
    bio: "Co-Founder and CFO specializing in financial strategy and operations. Studied at Arya College of Engineering & Technology (ECE branch).",
    social: {
      linkedin: "https://linkedin.com/in/vivek-kumawat-devcodeweb",
      twitter: "https://twitter.com/vivekkumawat_",
    },
  },
  {
    name: "Aditya Devatwal",
    role: "Developer & SEO Specialist",
    image: "/developer-aditya-devatwal-professional-photo.jpg",
    bio: "Full-stack developer and SEO expert passionate about clean code, modern web technologies, and digital marketing strategies.",
    social: {
      linkedin: "https://linkedin.com/in/aditya-devatwal",
      github: "https://github.com/adityadevatwal",
    },
  },
  {
    name: "Harshit Kumawaat",
    role: "Project Manager",
    image: "/project-manager-harshit-kumawaat-professional-phot.jpg",
    bio: "Experienced project manager ensuring seamless project delivery and client satisfaction through agile methodologies.",
    social: {
      linkedin: "https://linkedin.com/in/harshit-kumawaat",
      twitter: "https://twitter.com/harshitkumawaat",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our diverse team of talented professionals brings together creativity, technical expertise, and strategic
            thinking to deliver exceptional results for businesses in Jaipur and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <GlassCard
              key={member.name}
              className="text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="font-heading font-semibold text-xl mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

              <div className="flex justify-center space-x-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} Twitter Profile`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} GitHub Profile`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
