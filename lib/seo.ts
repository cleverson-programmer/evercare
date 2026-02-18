// src/lib/seo.ts
import { Metadata } from "next"

type SEOProps = {
  title: string
  description: string
  url?: string
  image?: string
}

export function generateSEO({
  title,
  description,
  url = "https://evercarehomeservice.com",
  image = "/og-image.png",
}: SEOProps): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://evercarehomeservice.com"),

    openGraph: {
      title,
      description,
      url,
      siteName: "Evercare Home Service",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}
