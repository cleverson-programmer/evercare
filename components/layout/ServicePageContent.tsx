import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import type { ServicePageData } from "@/components/data/serviceData";

interface ServicePageContentProps {
  data: ServicePageData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicePageContent = ({ data }: ServicePageContentProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
        className="text-center py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          {data.hero.title}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
          {data.hero.subtitle}
        </p>
        <button
          onClick={scrollToForm}
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {data.hero.ctaText}
        </button>
      </motion.section>

      {/* Primary Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          {data.primaryServicesTitle}
        </motion.h2>
        <div
          className={`grid gap-6 ${
            data.primaryServices.length === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {data.primaryServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 1}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <Icon className="mx-auto mb-4 text-primary" size={36} />
                <h3 className="font-bold text-foreground mb-3 text-sm md:text-base">
                  {service.title}
                </h3>
                <ul className="text-left space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-xs md:text-sm flex items-start gap-2"
                    >
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Additional Services (Cleaning only) */}
      {data.additionalServices && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold text-foreground text-center mb-8"
          >
            {data.additionalServices.title}
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={1}
            className="bg-card border border-border rounded-xl p-6 shadow-card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.additionalServices.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                      {Icon && <Icon className="text-primary" size={18} />}
                      <h4 className="font-bold text-foreground text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>
      )}

      {/* Trust Section */}
      {data.trust.items.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold text-foreground text-center mb-6"
          >
            {data.trust.title}
          </motion.h2>
          <div className="flex flex-col items-center gap-3">
            {data.trust.items.map((item, i) => (
              <motion.div
                key={item.text}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-center gap-3"
              >
                <Check className="text-trust-check shrink-0" size={20} />
                <span className="text-foreground text-sm md:text-base">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Contact Form */}
      <motion.section
        id="contact-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl font-bold text-foreground text-center mb-2"
        >
          {data.contactForm.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8"
        >
          {data.contactForm.subtitle}
        </motion.p>

        <motion.form
          variants={fadeUp}
          custom={2}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.contactForm.fields.map((field) => {
              const colClass =
                field.colSpan === 2 ? "sm:col-span-2" : "sm:col-span-1";

              if (field.type === "select") {
                return (
                  <select
                    key={field.name}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={`${colClass} w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none`}
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                );
              }

              return (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`${colClass} w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {data.contactForm.submitText}
          </button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default ServicePageContent;
