import { Monitor, Palette, Search, Smartphone, ShoppingCart, BarChart } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Custom web applications built with React, Next.js, and cutting-edge technologies for optimal performance.",
    features: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered designs that provide exceptional experiences and drive engagement through intuitive interfaces.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies to improve your visibility and ranking on search engines for maximum reach.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics Setup"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["React Native", "iOS & Android", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with secure payment processing and inventory management systems.",
    features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Analytics"],
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase brand awareness and drive conversions effectively.",
    features: ["Social Media Marketing", "PPC Campaigns", "Email Marketing", "Conversion Optimization"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Our Services</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From concept to launch, we provide end-to-end digital solutions that transform your business and accelerate
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="group hover:border-secondary/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton
            href="/services"
            size="lg"
            className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white font-semibold px-8 py-4 rounded-full"
          >
            View All Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
