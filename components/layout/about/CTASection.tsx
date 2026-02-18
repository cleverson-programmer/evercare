"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Ready to Experience Total Care?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Let us take care of what matters most—your family's well-being and your home's safety.
          </p>
          <a
            href="tel:+1"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 text-base shadow-elevated"
          >
            <Phone className="w-5 h-5" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
