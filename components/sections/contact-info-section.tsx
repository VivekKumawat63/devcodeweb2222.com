import { Phone, Mail, MapPin, Clock, MessageCircle, Video } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    contact: "+91 9785343142",
    action: "Call Now",
    href: "tel:+919785343142",
    available: "Mon-Fri 9AM-6PM IST",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    contact: "vivekkumawat184563@gmail.com",
    action: "Send Email",
    href: "mailto:vivekkumawat184563@gmail.com",
    available: "24/7 Response",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us on WhatsApp",
    contact: "+91 9785343142",
    action: "Start Chat",
    href: "https://wa.me/919785343142",
    available: "Mon-Fri 9AM-9PM IST",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Schedule a video consultation",
    contact: "Book a meeting",
    action: "Schedule Call",
    href: "mailto:vivekkumawat184563@gmail.com?subject=Video Call Request",
    available: "By Appointment",
  },
]

const officeLocations = [
  {
    city: "Jaipur",
    address: "Arya College of Engineering & Technology",
    zipCode: "Jaipur, Rajasthan 302028, India",
    phone: "+91 9785343142",
    isHeadquarters: true,
  },
]

export function ContactInfoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're here to help and respond quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <GlassCard
                key={method.title}
                className="text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <p className="font-medium mb-2">{method.contact}</p>

                <div className="space-y-2">
                  <a
                    href={method.href}
                    className="inline-block bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    {method.action}
                  </a>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{method.available}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Office Location
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based in Jaipur, Rajasthan, we're always ready to provide local support and meet with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            {officeLocations.map((office) => (
              <GlassCard
                key={office.city}
                className={`text-center group transition-all duration-300 ${
                  office.isHeadquarters ? "border-primary/50 bg-primary/5" : "hover:border-primary/30"
                }`}
              >
                {office.isHeadquarters && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Headquarters
                  </div>
                )}

                <div className="pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-4">{office.city}</h3>

                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">{office.address}</p>
                    <p className="text-sm">{office.zipCode}</p>
                    <p className="text-sm font-medium text-primary">{office.phone}</p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://maps.google.com/?q=Arya+College+of+Engineering+Technology+Jaipur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
