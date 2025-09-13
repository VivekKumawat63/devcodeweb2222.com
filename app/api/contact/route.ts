import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { sendContactNotification } from "@/lib/email"
import { sanitizeInput, sanitizeEmail, validateRequestSize, logSecurityEvent } from "@/lib/security"
import type { ContactSubmission } from "@/lib/models/contact"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!validateRequestSize(body, 50)) {
      logSecurityEvent({
        type: "invalid_input",
        ip: request.ip || "unknown",
        path: "/api/contact",
        details: "Request too large",
      })
      return NextResponse.json({ error: "Request too large" }, { status: 413 })
    }

    const { name, email, company, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeEmail(email)
    const sanitizedCompany = company ? sanitizeInput(company) : ""
    const sanitizedMessage = sanitizeInput(message)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      logSecurityEvent({
        type: "invalid_input",
        ip: request.ip || "unknown",
        path: "/api/contact",
        details: "Invalid email format",
      })
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate service selection
    const validServices = [
      "web-development",
      "ui-ux-design",
      "mobile-development",
      "ecommerce",
      "seo-marketing",
      "consulting",
    ]
    if (!validServices.includes(service)) {
      logSecurityEvent({
        type: "invalid_input",
        ip: request.ip || "unknown",
        path: "/api/contact",
        details: "Invalid service selection",
      })
      return NextResponse.json({ error: "Invalid service selection" }, { status: 400 })
    }

    const db = await getDatabase()
    const contactsCollection = db.collection<ContactSubmission>("contacts")

    const contactSubmission: Omit<ContactSubmission, "_id"> = {
      name: sanitizedName,
      email: sanitizedEmail,
      company: sanitizedCompany,
      service,
      budget: budget || "",
      message: sanitizedMessage,
      createdAt: new Date(),
      status: "new",
      source: "contact-form",
    }

    // Save to database
    const result = await contactsCollection.insertOne(contactSubmission)

    // Send email notifications
    try {
      await sendContactNotification({
        name: contactSubmission.name,
        email: contactSubmission.email,
        company: contactSubmission.company,
        service: contactSubmission.service,
        budget: contactSubmission.budget,
        message: contactSubmission.message,
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Don't fail the entire request if email fails
      // The form submission is still saved to database
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully. We'll get back to you within 24 hours!",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")

    const db = await getDatabase()
    const contactsCollection = db.collection<ContactSubmission>("contacts")

    const filter: any = {}
    if (status) {
      filter.status = status
    }

    const skip = (page - 1) * limit

    const [contacts, total] = await Promise.all([
      contactsCollection.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray(),
      contactsCollection.countDocuments(filter),
    ])

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
