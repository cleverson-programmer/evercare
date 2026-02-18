"use client";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Dedicated Patient Support",
    description:
      "With a professionally certified caregiver leading our team, we provide specialized assistance for those with mobility challenges. We handle every person with the dignity, patience, and technical skill they deserve.",
  },
  {
    icon: Sparkles,
    title: "Health-Focused Cleaning",
    description:
      "We go beyond traditional cleaning. We focus on creating a sanitized environment that is essential for recovery and long-term health, preventing infections and promoting well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Trust",
    description:
      "As a family-owned business in Massachusetts, our reputation is built on integrity. We are fully insured and bonded, providing our clients with the absolute peace of mind that their loved ones and their property are protected.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const PillarsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            What We Stand For
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
            The Pillars of Our Service
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group bg-card rounded-lg p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-card-foreground font-semibold mb-4">
                {pillar.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
