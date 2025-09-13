"use client"

import { Facebook, Twitter, Linkedin, MessageCircle, Link2, Check } from "lucide-react"
import { useState } from "react"

interface SocialShareButtonsProps {
  url: string
  title: string
  description?: string
  className?: string
}

export function SocialShareButtons({ url, title, description, className = "" }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400")
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className="text-sm text-muted-foreground font-medium">Share:</span>

      <button
        onClick={() => handleShare("facebook")}
        className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </button>

      <button
        onClick={() => handleShare("twitter")}
        className="w-9 h-9 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </button>

      <button
        onClick={() => handleShare("linkedin")}
        className="w-9 h-9 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </button>

      <button
        onClick={() => handleShare("whatsapp")}
        className="w-9 h-9 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </button>

      <button
        onClick={handleCopyLink}
        className="w-9 h-9 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Copy link"
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  )
}
