import type React from "react"
import { render, type RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <div className="test-wrapper">{children}</div>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }

// Mock data for testing
export const mockTestimonials = [
  {
    name: "Test User",
    role: "Test Role",
    content: "Test testimonial content",
    rating: 5,
    image: "/test-image.jpg",
  },
]

export const mockBlogPosts = [
  {
    slug: "test-post",
    title: "Test Blog Post",
    excerpt: "Test excerpt",
    content: "Test content",
    author: "Test Author",
    publishedAt: new Date().toISOString(),
    tags: ["test"],
    image: "/test-image.jpg",
  },
]

export const mockFormData = {
  name: "Test User",
  email: "test@example.com",
  company: "Test Company",
  service: "web-development",
  budget: "5k-10k",
  message: "Test message",
}
