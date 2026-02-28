"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Search,
  Building2,
  HardHat,
  Factory,
  Blinds,
  Stethoscope,
  Heart,
  Brain,
  Syringe,
  HandHelping,
} from "lucide-react";
import SectionSelector from "@/components/common/SectionSelector";
import ServiceCard from "@/components/common/ServiceCard";
import CleaningForm from "@/components/common/CleaningForm";
import HomeCareForm from "@/components/common/HomeCareForm";

type Section = "cleaning" | "homecare" | null;

const cleaningServices = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: [
      "• Routine sweeping and mopping",
      "• Dusting furniture and surfaces",
      "• Bathroom sanitization",
      "• Kitchen cleaning",
    ],
  },
  {
    icon: Search,
    title: "Deep Cleaning",
    description: [
      "• Cleaning behind appliances",
      "• Baseboards and detailed areas",
      "• Mold removal",
      "• Full disinfection treatment",
    ],
  },
  {
    icon: Building2,
    title: "Commercial / Office Cleaning",
    description: [
      "• Desk organization and sanitation",
      "• Carpet cleaning",
      "• Floor maintenance",
      "• Restroom and common area cleaning",
    ],
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description: [
      "• Fine dust removal",
      "• Paint and cement residue removal",
      "• Debris cleanup",
      "• Heavy-duty cleaning",
    ],
  },
  {
    icon: Factory,
    title: "Technical / Industrial Cleaning",
    description: [
      "• Chemical cleaning methods",
      "• Mechanical sanitation processes",
      "• Thermal cleaning techniques",
      "• Sensitive area decontamination",
    ],
  },
  {
    icon: Blinds,
    title: "Specialized Cleaning",
    description: [
      "• Window washing",
      "• Carpet cleaning",
      "• Upholstery sanitization",
      "• Outdoor area cleaning",
    ],
  },
];

const homeCareServices = [
  {
    icon: Stethoscope,
    title: "Personal Care Assistance",
    description: [
      "• Assistance with bathing and personal hygiene",
      "• Assistance with dressing and grooming",
      "• Bathroom and incontinence care",
      "• Safe mobility and transfers",
      "• Fall prevention support",
      "• Positioning and comfort",
    ],
  },
  {
    icon: Brain,
    title: "Alzheimer’s & Memory Care Support",
    description: [
      "• Structured routine support",
      "• Cognitive stimulation activities",
      "• Safety supervision",
      "• Redirection and calming techniques",
      "• Behavioral support assistance",
      "• Family communication updates",
      "• Specialized dementia care delivered with patience, training, and understanding",
    ],
  },
  {
    icon: HandHelping,
    title: "Daily Living Assistance",
    description: [
      "• Meal preparation and feeding assistance",
      "• Medication reminders",
      "• Light housekeeping related to care",
      "• Appointment reminders",
      "• Support with daily routines",
    ],
  },
  {
    icon: Syringe,
    title: "Post-Surgical & Recovery Support",
    description: [
      "• Mobility assistance during recovery",
      "• Support with daily activities",
      "• General health condition monitoring",
      "• Comfort-focused care assistance",
    ],
  },
];

const ServicesCards = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("cleaning");

  const handleSectionChange = (section: Section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <SectionSelector selected={selectedSection} onSelect={handleSectionChange} />
        <AnimatePresence mode="wait">
          {selectedSection === "cleaning" && (
            <motion.section
              key="cleaning"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pb-16 px-4"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-cleaning rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground">Cleaning Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {cleaningServices.map((service) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      theme="cleaning"
                    >
                      <CleaningForm serviceType={service.title} />
                    </ServiceCard>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {selectedSection === "homecare" && (
            <motion.section
              key="homecare"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pb-16 px-4"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-homecare rounded-full" />
                  <h2 className="text-[1rem] font-normal text-foreground">When Extra Support at Home Becomes Necessary.
                    Caring for a loved one can become physically and emotionally overwhelming.
                    EverCare provides dependable in-home support designed to protect their safety, dignity, and independence.
                    Our trained, background-checked caregivers are committed to delivering compassionate and professional care you can trust.
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {homeCareServices.map((service) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      theme="homecare"
                    >
                      <HomeCareForm serviceType={service.title} />
                    </ServiceCard>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ServicesCards;
