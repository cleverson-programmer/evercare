import { generateSEO } from "@/lib/seo"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/common/Navbar"
// Importe o novo componente interativo que criaremos abaixo
import ServiceSectionManager from "@/components/layout/ServiceSectionManager"

export const metadata = generateSEO({
  title: "Professional Cleaning Services in USA",
  description:
    "Reliable, professional and trusted cleaning services for homes and offices across the USA.",
})

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evercare Home Service",
    image: "https://evercarehomeservice.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    description:
      "Professional cleaning and home care services in the United States.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <ServiceSectionManager />
      </main>

      <Footer />
    </>
  )
}