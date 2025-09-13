// Database setup script for MongoDB
const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DB_NAME = "devcodeweb_agency"

async function setupDatabase() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db(DB_NAME)

    // Create collections with validation
    await db.createCollection("contacts", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "email", "service", "message", "createdAt", "status"],
          properties: {
            name: {
              bsonType: "string",
              description: "Name is required and must be a string",
            },
            email: {
              bsonType: "string",
              pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
              description: "Email must be a valid email address",
            },
            company: {
              bsonType: "string",
              description: "Company name must be a string",
            },
            service: {
              bsonType: "string",
              enum: [
                "web-development",
                "ui-ux-design",
                "mobile-development",
                "ecommerce",
                "seo-marketing",
                "consulting",
              ],
              description: "Service must be one of the predefined options",
            },
            budget: {
              bsonType: "string",
              enum: ["under-5k", "5k-10k", "10k-25k", "25k-50k", "over-50k"],
              description: "Budget must be one of the predefined ranges",
            },
            message: {
              bsonType: "string",
              description: "Message is required and must be a string",
            },
            createdAt: {
              bsonType: "date",
              description: "Created date is required",
            },
            status: {
              bsonType: "string",
              enum: ["new", "contacted", "in-progress", "completed"],
              description: "Status must be one of the predefined options",
            },
            source: {
              bsonType: "string",
              enum: ["contact-form", "newsletter", "chat"],
              description: "Source must be one of the predefined options",
            },
          },
        },
      },
    })

    await db.createCollection("newsletter_subscriptions", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["email", "subscribedAt", "isActive"],
          properties: {
            email: {
              bsonType: "string",
              pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
              description: "Email must be a valid email address",
            },
            subscribedAt: {
              bsonType: "date",
              description: "Subscription date is required",
            },
            isActive: {
              bsonType: "bool",
              description: "Active status is required",
            },
            source: {
              bsonType: "string",
              description: "Source must be a string",
            },
          },
        },
      },
    })

    await db.createCollection("project_inquiries", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["contactId", "projectType", "status", "createdAt"],
          properties: {
            contactId: {
              bsonType: "string",
              description: "Contact ID is required",
            },
            projectType: {
              bsonType: "string",
              description: "Project type is required",
            },
            estimatedBudget: {
              bsonType: "string",
              description: "Estimated budget must be a string",
            },
            timeline: {
              bsonType: "string",
              description: "Timeline must be a string",
            },
            requirements: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
              description: "Requirements must be an array of strings",
            },
            status: {
              bsonType: "string",
              enum: ["inquiry", "proposal-sent", "negotiation", "accepted", "rejected"],
              description: "Status must be one of the predefined options",
            },
            createdAt: {
              bsonType: "date",
              description: "Created date is required",
            },
            updatedAt: {
              bsonType: "date",
              description: "Updated date is required",
            },
          },
        },
      },
    })

    // Create indexes for better performance
    await db.collection("contacts").createIndex({ email: 1 })
    await db.collection("contacts").createIndex({ createdAt: -1 })
    await db.collection("contacts").createIndex({ status: 1 })
    await db.collection("contacts").createIndex({ service: 1 })

    await db.collection("newsletter_subscriptions").createIndex({ email: 1 }, { unique: true })
    await db.collection("newsletter_subscriptions").createIndex({ subscribedAt: -1 })
    await db.collection("newsletter_subscriptions").createIndex({ isActive: 1 })

    await db.collection("project_inquiries").createIndex({ contactId: 1 })
    await db.collection("project_inquiries").createIndex({ status: 1 })
    await db.collection("project_inquiries").createIndex({ createdAt: -1 })

    console.log("Database setup completed successfully!")
    console.log("Collections created:")
    console.log("- contacts")
    console.log("- newsletter_subscriptions")
    console.log("- project_inquiries")
    console.log("Indexes created for optimal performance")
  } catch (error) {
    console.error("Database setup error:", error)
  } finally {
    await client.close()
  }
}

setupDatabase()
