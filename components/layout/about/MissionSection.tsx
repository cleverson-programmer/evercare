"use client";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
              Stability & Support When It Matters Most
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed"
          >
            <p>
              At A&L Total Care Solutions, we provide the stability and support your family needs when it matters most.
            </p>
            <p>
              Our company was founded by the <strong className="text-foreground">Lopes & Almeida family</strong> with a clear mission: to integrate high-quality home care with professional environmental hygiene. We know that caring for a person with limited mobility—whether they are a senior, recovering from an accident, or bedridden—requires a <em className="text-primary font-medium">360-degree approach</em>.
            </p>
            <p>
              It's not just about physical assistance; it's about ensuring the home they live in is safe, sanitized, and serene.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
