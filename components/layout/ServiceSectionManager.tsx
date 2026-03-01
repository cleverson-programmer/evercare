"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionSelector, { type Section } from "@/components/common/SectionSelector";
import ServicePageContent from "@/components/layout/ServicePageContent";
import { cleaningData, homecareData } from "@/components/data/serviceData";

export default function ServiceSectionManager() {
  const [selected, setSelected] = useState<Section>(null);

  return (
    <>
      <SectionSelector selected={selected} onSelect={setSelected} />

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ServicePageContent
              data={selected === "cleaning" ? cleaningData : homecareData}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
