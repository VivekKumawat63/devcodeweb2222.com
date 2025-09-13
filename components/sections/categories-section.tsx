"use client"

import { useState } from "react"
import { Monitor, Smartphone, ShoppingCart, Briefcase, Heart, Gamepad2 } from "lucide-react"

const categories = [
  { id: "all", name: "All Projects", icon: Monitor, count: 30 },
  { id: "web", name: "Web Development", icon: Monitor, count: 16 },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone, count: 4 },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, count: 4 },
  { id: "corporate", name: "Corporate", icon: Briefcase, count: 2 },
  { id: "healthcare", name: "Healthcare", icon: Heart, count: 2 },
  { id: "gaming", name: "Gaming", icon: Gamepad2, count: 2 },
]

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Project{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our work by category to see how we've helped businesses across different industries achieve their
            digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-white/50 backdrop-blur-sm border border-border hover:border-primary/30 text-foreground hover:bg-primary/5"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span className="font-medium">{category.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id ? "bg-white/20" : "bg-primary/10 text-primary"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
