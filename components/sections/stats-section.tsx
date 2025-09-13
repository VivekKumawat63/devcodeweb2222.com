"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"

const stats = [
  { number: 25, suffix: "+", label: "Projects Completed", description: "Successfully delivered projects" },
  { number: 98, suffix: "%", label: "Client Satisfaction", description: "Happy clients worldwide" },
  { number: 5, suffix: "+", label: "Team Members", description: "Expert professionals" },
  { number: 1, suffix: " Year", label: "Experience", description: "In digital innovation" },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-balance">
            Trusted by Businesses{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our track record speaks for itself. Here are the numbers that showcase our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} className="text-center group hover:scale-105 transition-all duration-300">
              <div className="font-heading font-black text-4xl lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                <CountUp end={stat.number} />
                {stat.suffix}
              </div>
              <h3 className="font-semibold text-lg mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
