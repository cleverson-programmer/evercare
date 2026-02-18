// src/app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://evercarehomeservice.com"),
  title: {
    default: "Evercare Home Service | Cleaning Services",
    template: "%s | Evercare Home Service",
  },
  description:
    "Empresa americana especializada em cleaning services e home care.",
  keywords: [
    "cleaning services",
    "home care",
    "house cleaning USA",
    "professional cleaning",
  ],
  authors: [{ name: "Evercare Home Service" }],
  creator: "Evercare Home Service",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evercarehomeservice.com",
    siteName: "Evercare Home Service",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
