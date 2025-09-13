"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, Youtube } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribeToYoutube, setSubscribeToYoutube] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subscribeToYoutube }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe")
      }

      setIsSubscribed(true)
      setEmail("")

      if (subscribeToYoutube) {
        // Placeholder YouTube channel URL - replace with actual channel URL
        window.open("https://youtube.com/@devcodeweb", "_blank")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center p-12 hover:border-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>

            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Newsletter
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and industry updates delivered straight to your inbox. Join over
              10,000 developers and designers who trust our content.
            </p>

            {!isSubscribed ? (
              <>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm max-w-md mx-auto">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-full border-2 border-border focus:border-primary/50 bg-background/50 backdrop-blur-sm"
                    />
                    <AnimatedButton
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </AnimatedButton>
                  </div>

                  <div className="flex items-center justify-center space-x-3 text-sm">
                    <input
                      type="checkbox"
                      id="youtube-subscribe"
                      checked={subscribeToYoutube}
                      onChange={(e) => setSubscribeToYoutube(e.target.checked)}
                      className="w-4 h-4 text-primary bg-background border-2 border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <label
                      htmlFor="youtube-subscribe"
                      className="flex items-center space-x-2 text-muted-foreground cursor-pointer"
                    >
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span>Also subscribe me to our YouTube channel</span>
                    </label>
                  </div>
                </form>
              </>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-green-100 text-green-800 px-6 py-4 rounded-full font-medium">
                  🎉 Thank you for subscribing! Check your email for confirmation.
                </div>
              </div>
            )}

            <div className="mt-8 text-sm text-muted-foreground">
              <p>No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Exclusive Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Industry Insights</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
