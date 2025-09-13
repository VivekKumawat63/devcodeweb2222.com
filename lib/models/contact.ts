export interface ContactSubmission {
  _id?: string
  name: string
  email: string
  company?: string
  service: string
  budget?: string
  message: string
  createdAt: Date
  status: "new" | "contacted" | "in-progress" | "completed"
  source: "contact-form" | "newsletter" | "chat"
}

export interface NewsletterSubscription {
  _id?: string
  email: string
  subscribedAt: Date
  isActive: boolean
  source: string
}

export interface ProjectInquiry {
  _id?: string
  contactId: string
  projectType: string
  estimatedBudget: string
  timeline: string
  requirements: string[]
  status: "inquiry" | "proposal-sent" | "negotiation" | "accepted" | "rejected"
  createdAt: Date
  updatedAt: Date
}
