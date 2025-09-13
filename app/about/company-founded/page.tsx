import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"

export const metadata = {
  title: "Company Founded | DEVCODEWEB - Our Story",
  description:
    "Learn about how DEVCODEWEB was founded in 2025 by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat during their studies at Arya College of Engineering & Technology.",
}

export default function CompanyFoundedPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to About</span>
            </Link>

            <div className="text-center mb-16">
              <h1 className="font-heading font-black text-5xl lg:text-6xl leading-tight text-balance mb-6">
                How DEVCODEWEB{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Was Born
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                The inspiring story of how two college students turned their passion for technology into a thriving web
                development company.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <GlassCard className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-6">The Beginning</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DEVCODEWEB was founded in 2025 during the second year of studies at Arya College of Engineering &
                  Technology. CEO Nikhil Kumawat (AIDS branch) and Co-Founder Vivek Kumawat (ECE branch) shared a common
                  vision: to create exceptional digital experiences that help businesses thrive in the digital age.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a college project quickly evolved into a serious business venture when they realized
                  the immense potential of combining their technical skills with entrepreneurial spirit.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The name "DEVCODEWEB" represents their core focus: Development, Code, and Web - the three pillars that
                  form the foundation of modern digital solutions.
                </p>
              </GlassCard>

              <GlassCard className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-6">About Arya College</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Arya College of Engineering & Technology, located in Jaipur, Rajasthan, is a premier educational
                  institution known for its excellence in engineering education and innovation. The college offers
                  various undergraduate and postgraduate programs in engineering and technology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With state-of-the-art facilities, experienced faculty, and a strong focus on practical learning, Arya
                  College has been instrumental in shaping the careers of thousands of engineers. The college's emphasis
                  on innovation and entrepreneurship provided the perfect environment for DEVCODEWEB's founders to
                  nurture their business idea.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The supportive academic environment and access to cutting-edge technology at Arya College played a
                  crucial role in the early development of DEVCODEWEB's technical capabilities and business acumen.
                </p>
              </GlassCard>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <GlassCard className="text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth and success.
                </p>
              </GlassCard>

              <GlassCard className="text-center p-6">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the leading digital agency that shapes the future of web experiences in Jaipur and beyond.
                </p>
              </GlassCard>

              <GlassCard className="text-center p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Our Values</h3>
                <p className="text-sm text-muted-foreground">
                  Innovation, Quality, Integrity, and Client Success drive everything we do.
                </p>
              </GlassCard>
            </div>

            <GlassCard className="p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-4">Major Milestones</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Company Founded (2025)</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Established DEVCODEWEB with a focus on modern web development and digital solutions.
                  </p>

                  <h3 className="font-semibold text-lg mb-2 text-primary">First Major Client</h3>
                  <p className="text-muted-foreground text-sm">
                    Ganpat Nodal became our first major client, operating an education website and providing strong
                    recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Team Expansion</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Aditya Devatwal joined as Developer/SEO/Advertisement specialist, followed by Harshit Kumawaat as
                    Project Manager.
                  </p>

                  <h3 className="font-semibold text-lg mb-2 text-primary">Innovation Focus</h3>
                  <p className="text-muted-foreground text-sm">
                    Established our innovation hub focusing on emerging technologies and modern web development
                    practices.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
