import { Check, Star } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const pricingPlans = [
  {
    name: "Starter",
    price: "₹25,000",
    description: "Perfect for small businesses and startups looking to establish their online presence.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month support",
      "Google Analytics setup",
    ],
    popular: false,
    href: "/contact?plan=starter",
  },
  {
    name: "Professional",
    price: "₹75,000",
    description: "Ideal for growing businesses that need advanced features and functionality.",
    features: [
      "15-page responsive website",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "E-commerce functionality",
      "6 months support",
      "Performance optimization",
      "Social media integration",
    ],
    popular: true,
    href: "/contact?plan=professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solutions for large organizations with complex requirements.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Advanced integrations",
      "Multi-language support",
      "Custom admin panel",
      "2 years support",
      "Dedicated project manager",
      "Priority support",
    ],
    popular: false,
    href: "/contact?plan=enterprise",
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <GlassCard
              key={plan.name}
              className={`relative text-center transition-all duration-300 ${
                plan.popular ? "border-primary/50 scale-105 hover:border-primary/70" : "hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="pt-6">
                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="font-heading font-black text-4xl text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">{plan.description}</p>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <AnimatedButton
                  href={plan.href}
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      : "border-2 border-primary/20 hover:border-primary/40"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </AnimatedButton>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include free consultation and project planning session.
          </p>
          <p className="text-sm text-muted-foreground">
            Custom solutions available for unique requirements. Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
