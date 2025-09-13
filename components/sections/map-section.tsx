"use client"

import { GlassCard } from "@/components/ui/glass-card"

export function MapSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Office in Jaipur
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located at Arya College of Engineering & Technology in Jaipur, Rajasthan. We're always open for client
            meetings and consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <GlassCard className="overflow-hidden h-96 lg:h-[500px]">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">Click to view our location on Google Maps</p>
                  <a
                    href="https://maps.google.com/?q=Arya+College+of+Engineering+Technology+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Office Details */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">By Appointment</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">Getting Here</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium mb-1">By Car</h4>
                  <p className="text-muted-foreground">
                    Located on Kukas Road, easily accessible from Jaipur city center
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">By Bus</h4>
                  <p className="text-muted-foreground">Regular bus services available from Jaipur Railway Station</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">By Auto/Taxi</h4>
                  <p className="text-muted-foreground">
                    Easily accessible via auto-rickshaw or taxi from anywhere in Jaipur
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">Amenities</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Conference Rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Coffee & Refreshments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Parking Available</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
