"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the purpose of this website?",
    answer: "Our website provides high-quality products and services designed to help you achieve your goals efficiently.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team via email at support@yoursaas.ai or call us at +1 (800) 123 XX21.",
  },
  {
    question: "How do I find the best products?",
    answer: "Browse our curated collections or use the search feature to find exactly what you're looking for.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we offer a 30-day return policy for all products in their original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide with competitive shipping rates.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email to monitor your delivery.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Left - Title */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Right - Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center gap-4 py-5 text-left transition-colors"
              >
                {openIndex === index ? (
                  <Minus className="h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-primary" />
                )}
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;