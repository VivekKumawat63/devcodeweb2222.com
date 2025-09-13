import { User, MapPin, GraduationCap, Calendar } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  education: string
  location: string
  experience: string
  bio: string
}

interface TeamMemberHeroSectionProps {
  member: TeamMember
}

export function TeamMemberHeroSection({ member }: TeamMemberHeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <User className="h-4 w-4" />
              <span>Team Member</span>
            </div>

            <h1 className="font-heading font-black text-5xl lg:text-6xl leading-tight text-balance">{member.name}</h1>

            <p className="text-2xl text-primary font-semibold">{member.role}</p>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">{member.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">{member.education}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{member.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">{member.experience}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <img
                src={member.image || "/placeholder.svg?height=320&width=320&query=professional headshot"}
                alt={member.name}
                className="w-full h-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce" />
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
