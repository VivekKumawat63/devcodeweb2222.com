import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { sanitizeEmail, validateRequestSize, logSecurityEvent } from "@/lib/security"
import type { NewsletterSubscription } from "@/lib/models/contact"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!validateRequestSize(body, 10)) {
      logSecurityEvent({
        type: "invalid_input",
        ip: request.ip || "unknown",
        path: "/api/newsletter",
        details: "Request too large",
      })
      return NextResponse.json({ error: "Request too large" }, { status: 413 })
    }

    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const sanitizedEmail = sanitizeEmail(email)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      logSecurityEvent({
        type: "invalid_input",
        ip: request.ip || "unknown",
        path: "/api/newsletter",
        details: "Invalid email format",
      })
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const db = await getDatabase()
    const newsletterCollection = db.collection<NewsletterSubscription>("newsletter_subscriptions")

    // Check if email already exists
    const existingSubscription = await newsletterCollection.findOne({
      email: sanitizedEmail,
    })

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
      } else {
        // Reactivate subscription
        await newsletterCollection.updateOne(
          { email: sanitizedEmail },
          {
            $set: {
              isActive: true,
              subscribedAt: new Date(),
            },
          },
        )
        return NextResponse.json({ success: true, message: "Subscription reactivated successfully" }, { status: 200 })
      }
    }

    const subscription: Omit<NewsletterSubscription, "_id"> = {
      email: sanitizedEmail,
      subscribedAt: new Date(),
      isActive: true,
      source: "website",
    }

    const result = await newsletterCollection.insertOne(subscription)

    console.log("New newsletter subscription:", {
      id: result.insertedId,
      email: subscription.email,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const db = await getDatabase()
    const newsletterCollection = db.collection<NewsletterSubscription>("newsletter_subscriptions")

    const result = await newsletterCollection.updateOne(
      { email: email.toLowerCase().trim() },
      { $set: { isActive: false } },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Subscription not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Successfully unsubscribed from newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
