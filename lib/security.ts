import DOMPurify from "isomorphic-dompurify"

// Input sanitization utilities
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") return ""

  // Remove HTML tags and sanitize
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })

  // Additional sanitization
  return sanitized
    .trim()
    .replace(/[<>]/g, "") // Remove any remaining angle brackets
    .slice(0, 1000) // Limit length
}

export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== "string") return ""

  return email
    .toLowerCase()
    .trim()
    .replace(/[^\w@.-]/g, "") // Only allow word chars, @, ., and -
    .slice(0, 254) // RFC 5321 limit
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  // Simple CSRF validation - in production, use crypto.timingSafeEqual
  return token === sessionToken && token.length > 20
}

// Request size validation
export function validateRequestSize(body: any, maxSizeKB = 10): boolean {
  const bodySize = JSON.stringify(body).length
  const maxSizeBytes = maxSizeKB * 1024
  return bodySize <= maxSizeBytes
}

// Environment variable validation
export function validateEnvironmentVariables(): void {
  const required = ["MONGODB_URI", "RESEND_API_KEY"]

  const missing = required.filter((key) => !process.env[key])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`)
  }

  // Validate MongoDB URI format
  if (process.env.MONGODB_URI && !process.env.MONGODB_URI.startsWith("mongodb")) {
    throw new Error("Invalid MONGODB_URI format")
  }
}

// Generate secure random token
export function generateSecureToken(length = 32): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}

// Request logging for security monitoring
export function logSecurityEvent(event: {
  type: "rate_limit" | "invalid_input" | "csrf_failure" | "auth_failure"
  ip: string
  userAgent?: string
  path: string
  details?: any
}): void {
  const timestamp = new Date().toISOString()

  console.warn(`[SECURITY] ${timestamp} - ${event.type.toUpperCase()}`, {
    ip: event.ip,
    path: event.path,
    userAgent: event.userAgent,
    details: event.details,
  })

  // In production, send to security monitoring service
}
