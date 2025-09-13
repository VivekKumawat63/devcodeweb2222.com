import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMITS = {
  "/api/contact": { requests: 5, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  "/api/newsletter": { requests: 3, windowMs: 10 * 60 * 1000 }, // 3 requests per 10 minutes
}

function getRateLimitKey(ip: string, path: string): string {
  return `${ip}:${path}`
}

function isRateLimited(key: string, limit: { requests: number; windowMs: number }): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + limit.windowMs })
    return false
  }

  if (record.count >= limit.requests) {
    return true
  }

  record.count++
  return false
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === "https:") {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  }

  // Rate limiting for API routes
  const pathname = request.nextUrl.pathname
  const clientIP = request.ip || request.headers.get("x-forwarded-for") || "unknown"

  if (pathname.startsWith("/api/")) {
    const rateLimitConfig = RATE_LIMITS[pathname as keyof typeof RATE_LIMITS]

    if (rateLimitConfig) {
      const key = getRateLimitKey(clientIP, pathname)

      if (isRateLimited(key, rateLimitConfig)) {
        return new NextResponse(
          JSON.stringify({
            error: "Too many requests. Please try again later.",
            retryAfter: Math.ceil(rateLimitConfig.windowMs / 1000),
          }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": String(Math.ceil(rateLimitConfig.windowMs / 1000)),
            },
          },
        )
      }
    }
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
}
