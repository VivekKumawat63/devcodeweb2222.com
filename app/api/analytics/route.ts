import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase()

    // Get analytics data
    const [totalContacts, totalNewsletterSubscribers, recentContacts, contactsByService, contactsByMonth] =
      await Promise.all([
        // Total contacts
        db
          .collection("contacts")
          .countDocuments(),

        // Total active newsletter subscribers
        db
          .collection("newsletter_subscriptions")
          .countDocuments({ isActive: true }),

        // Recent contacts (last 30 days)
        db
          .collection("contacts")
          .countDocuments({
            createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
          }),

        // Contacts by service type
        db
          .collection("contacts")
          .aggregate([
            {
              $group: {
                _id: "$service",
                count: { $sum: 1 },
              },
            },
            { $sort: { count: -1 } },
          ])
          .toArray(),

        // Contacts by month (last 6 months)
        db
          .collection("contacts")
          .aggregate([
            {
              $match: {
                createdAt: { $gte: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000) },
              },
            },
            {
              $group: {
                _id: {
                  year: { $year: "$createdAt" },
                  month: { $month: "$createdAt" },
                },
                count: { $sum: 1 },
              },
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } },
          ])
          .toArray(),
      ])

    return NextResponse.json({
      summary: {
        totalContacts,
        totalNewsletterSubscribers,
        recentContacts,
        conversionRate: totalContacts > 0 ? ((recentContacts / totalContacts) * 100).toFixed(2) : "0",
      },
      contactsByService,
      contactsByMonth,
    })
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
