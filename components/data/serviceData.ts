import { Home, Search, Building2, HardHat, Truck, Wrench, HandHelping, Brain, UtensilsCrossed, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export interface AdditionalService {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface TrustItem {
  text: string;
}

export interface FormField {
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select";
  options?: string[];
  colSpan?: 1 | 2;
}

export interface ServicePageData {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  primaryServicesTitle: string;
  primaryServices: ServiceCard[];
  additionalServices?: {
    title: string;
    items: AdditionalService[];
  };
  trust: {
    title: string;
    items: TrustItem[];
  };
  contactForm: {
    title: string;
    subtitle: string;
    fields: FormField[];
    submitText: string;
  };
}

export const cleaningData: ServicePageData = {
  hero: {
    title: "Professional Cleaning Services in Massachusetts",
    subtitle: "High-standard residential and commercial cleaning with attention to detail and reliable scheduling.",
    ctaText: "Request a Free Estimate",
  },
  primaryServicesTitle: "Primary Services",
  primaryServices: [
    {
      icon: Home,
      title: "Residential Cleaning",
      items: ["Routine cleaning for homes", "Dusting and mopping", "Kitchen & bathroom cleaning"],
    },
    {
      icon: Search,
      title: "Deep Cleaning",
      items: ["Detailed cleaning of baseboards and behind appliances", "Mold and grime removal", "Full disinfection treatment"],
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      items: ["Office and retail cleaning", "Floor and carpet care", "Sanitization of restrooms"],
    },
  ],
  additionalServices: {
    title: "Additional Services",
    items: [
      { icon: HardHat, title: "Post-Construction Cleaning", description: "Post construction cleaning" },
      { icon: Truck, title: "Move-In / Move-Out", description: "Floor and carpet care" },
      { icon: Wrench, title: "Specialized Cleaning", description: "Restroom and restrooms" },
    ],
  },
  trust: {
    title: "Why Clients Choose EverCare",
    items: [],
  },
  contactForm: {
    title: "Request a Free Cleaning Estimate",
    subtitle: "Tell us about your cleaning needs and we will contact you shortly with a free, no-obligation quote.",
    fields: [
      { name: "fullName", placeholder: "Full Name", type: "text", colSpan: 1 },
      { name: "phone", placeholder: "Phone", type: "tel", colSpan: 1 },
      { name: "email", placeholder: "Email", type: "email", colSpan: 2 },
      { name: "serviceType", placeholder: "Type of Service", type: "select", colSpan: 2, options: ["Residential Cleaning", "Deep Cleaning", "Commercial Cleaning", "Post-Construction", "Move-In/Move-Out", "Specialized"] },
      { name: "propertyType", placeholder: "House / Apartment / Office", type: "select", colSpan: 2, options: ["House", "Apartment", "Office"] },
      { name: "size", placeholder: "Size (optional)", type: "text", colSpan: 2 },
    ],
    submitText: "Get My Free Quote",
  },
};

export const homecareData: ServicePageData = {
  hero: {
    title: "Compassionate In-Home Care in Massachusetts",
    subtitle: "Professional, state-certified CNA support focused on safety, dignity, and comfort at home.",
    ctaText: "Request a Care Consultation",
  },
  primaryServicesTitle: "Our Home Care Services",
  primaryServices: [
    {
      icon: HandHelping,
      title: "Personal Care Assistance",
      items: ["Bathing & hygiene", "Dressing support", "Mobility assistance", "Fall prevention"],
    },
    {
      icon: Brain,
      title: "Alzheimer's & Dementia Support",
      items: ["Routine structure", "Cognitive engagement", "Safety supervision", "Behavioral support"],
    },
    {
      icon: UtensilsCrossed,
      title: "Daily Living Assistance",
      items: ["Meal preparation", "Medication reminders", "Light housekeeping", "Appointment reminders"],
    },
    {
      icon: Stethoscope,
      title: "Post-Surgery & Recovery Care",
      items: ["Mobility support", "Recovery monitoring", "Comfort-focused assistance"],
    },
  ],
  trust: {
    title: "Why Families Trust EverCare",
    items: [
      { text: "State-certified CNA" },
      { text: "Alzheimer's specialized training" },
      { text: "Background-checked" },
      { text: "Family-owned" },
      { text: "Reliable and discreet" },
    ],
  },
  contactForm: {
    title: "Request a Care Consultation",
    subtitle: "Tell us about your situation and we will contact you to discuss the best care plan.",
    fields: [
      { name: "fullName", placeholder: "Full Name", type: "text", colSpan: 1 },
      { name: "phone", placeholder: "Phone Number", type: "tel", colSpan: 1 },
      { name: "email", placeholder: "Email", type: "email", colSpan: 2 },
      { name: "careType", placeholder: "Type of Care Needed", type: "select", colSpan: 2, options: ["Personal Care", "Alzheimer's & Dementia", "Daily Living", "Post-Surgery & Recovery"] },
    ],
    submitText: "Request Care Consultation",
  },
};
