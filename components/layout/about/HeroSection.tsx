"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/assets/images/foto-header.jpg"}
          alt="Caregiver providing compassionate home care"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/80 font-body text-sm tracking-[0.25em] uppercase mb-4"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight max-w-4xl mx-auto"
        >
          A&L Total Care Solutions
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-20 h-0.5 bg-accent mx-auto my-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Caring for people, protecting homes, and restoring peace of mind.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
