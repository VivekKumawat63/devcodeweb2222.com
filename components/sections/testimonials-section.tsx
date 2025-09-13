import { Star, Quote } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechSolutions",
    image: "/professional-woman-ceo.png",
    content:
      "DEVCODEWEB transformed our online presence completely. The website they created is not only visually stunning but also highly functional and user-friendly. Our conversion rates increased by 150%!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    image: "/professional-marketing-director.png",
    content:
      "Working with DEVCODEWEB was a game-changer for our business. Their attention to detail and creative solutions exceeded our expectations. The team is incredibly professional and responsive.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Founder, BelleMode",
    image: "/professional-woman-founder.png",
    content:
      "The team at DEVCODEWEB delivered a website that perfectly captures our brand essence. The process was smooth and professional from start to finish. Highly recommend their services!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Client Testimonials</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard
              key={testimonial.name}
              className="relative group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
