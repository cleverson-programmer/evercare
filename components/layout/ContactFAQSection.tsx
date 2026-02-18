"use client";

import ContactSection from "@/components/common/ContactSection";
import FAQSection from "@/components/common/FaqSection";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const images = [
  "/assets/images/main1.jpg",
  "/assets/images/main2.jpg",
  "/assets/images/main3.jpg",
  "/assets/images/main4.jpg",
  "/assets/images/main5.jpg",
];

const ContactFAQSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🔥 Marquee Background */}
      <div className="absolute inset-0 -z-30 pointer-events-none">
        <ThreeDMarquee
          images={images}
          className="w-full h-full opacity-100"
        />
      </div>

      {/* 🔥 Overlay para contraste */}
      <div className="absolute inset-0 -z-10 bg-background/30" />

      {/* 🔥 Conteúdo */}
      <div className="relative z-10">
        <ContactSection />
        <FAQSection />
      </div>

    </section>
  );
};

export default ContactFAQSection;
