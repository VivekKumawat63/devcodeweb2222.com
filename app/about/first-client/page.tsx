import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, User, Globe, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"

export const metadata = {
  title: "First Major Client - Ganpat Nodal | DEVCODEWEB Case Study",
  description:
    "Learn about DEVCODEWEB's first major client, Ganpat Nodal, and how we helped develop their education website with exceptional results.",
}

export default function FirstClientPage() {
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
                Our First{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Major Client
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                The story of Ganpat Nodal and how our partnership laid the foundation for DEVCODEWEB's success.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <GlassCard className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl">Ganpat Nodal</h2>
                    <p className="text-primary font-medium">Education Website Operator</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ganpat Nodal operates a comprehensive education website that serves students and educators across
                  Rajasthan. With a vision to make quality education accessible through digital platforms, Ganpat
                  recognized the need for a modern, user-friendly website that could handle the growing demands of
                  online education.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Having previously supported various development projects, Ganpat understood the importance of working
                  with skilled developers who could deliver both technical excellence and educational insight.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  His strong recommendation of DEVCODEWEB's services became the cornerstone of our early reputation and
                  helped establish our credibility in the education technology sector.
                </p>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Globe className="h-12 w-12 text-secondary" />
                  <h2 className="font-heading font-bold text-2xl">Project Overview</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Modern Web Platform</h3>
                      <p className="text-sm text-muted-foreground">
                        Developed a responsive, modern website optimized for educational content delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">User Experience Focus</h3>
                      <p className="text-sm text-muted-foreground">
                        Designed intuitive navigation and user-friendly interfaces for students and educators.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Performance Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        Ensured fast loading times and smooth performance across all devices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">SEO Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        Implemented comprehensive SEO strategies to improve search engine visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <GlassCard className="text-center p-6">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Exceptional Results</h3>
                <p className="text-sm text-muted-foreground">
                  Delivered beyond expectations with improved user engagement and site performance.
                </p>
              </GlassCard>

              <GlassCard className="text-center p-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Strong Recommendation</h3>
                <p className="text-sm text-muted-foreground">
                  Ganpat Nodal strongly recommended our services, helping establish our reputation.
                </p>
              </GlassCard>

              <GlassCard className="text-center p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Foundation for Growth</h3>
                <p className="text-sm text-muted-foreground">
                  This project became the foundation for DEVCODEWEB's growth in the education sector.
                </p>
              </GlassCard>
            </div>

            <GlassCard className="p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-4">Impact & Legacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                The success of our collaboration with Ganpat Nodal established DEVCODEWEB as a trusted partner for
                educational technology projects. This partnership not only validated our technical capabilities but also
                demonstrated our commitment to understanding and serving the unique needs of the education sector.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Ganpat Nodal's strong recommendation opened doors to new opportunities and helped us build a network of
                satisfied clients who continue to trust DEVCODEWEB with their digital transformation needs.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
