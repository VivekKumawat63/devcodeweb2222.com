"use client"

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DEVCODEWEB",
  description:
    "Leading web development agency in Jaipur, India specializing in custom websites, mobile apps, and digital solutions.",
  url: "https://devcodeweb.com",
  logo: "https://devcodeweb.com/logo.png",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Nikhil Kumawat",
      jobTitle: "Co-Founder & CEO",
    },
    {
      "@type": "Person",
      name: "Vivek Kumawat",
      jobTitle: "Co-Founder & CTO",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/devcodeweb",
    "https://www.twitter.com/devcodeweb",
    "https://www.linkedin.com/company/devcodeweb",
    "https://www.instagram.com/devcodeweb",
  ],
  serviceArea: {
    "@type": "Place",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description: "Professional custom website development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile app development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Solutions",
          description: "Complete e-commerce website and app development",
        },
      },
    ],
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DEVCODEWEB",
  url: "https://devcodeweb.com",
  description: "Leading web development agency in Jaipur, India",
  publisher: {
    "@type": "Organization",
    name: "DEVCODEWEB",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://devcodeweb.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}
