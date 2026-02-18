"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

import US from "country-flag-icons/react/3x2/US"
import BR from "country-flag-icons/react/3x2/BR"
import ES from "country-flag-icons/react/3x2/ES"

import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/components/ui/navbar-menu"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"


/* ============================
   LANGUAGE DROPDOWN
============================ */
const languages = [
  { code: "US", Flag: US },
  { code: "BR", Flag: BR },
  { code: "ES", Flag: ES },
]

export function LanguageDropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition"
      >
        <selected.Flag className="w-6 h-4 rounded-sm shadow-sm" />

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-3 w-28 rounded-xl border border-border
                       bg-card shadow-xl p-2 backdrop-blur-md"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelected(lang)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-center
                           px-3 py-2 rounded-lg hover:bg-primary transition"
              >
                <lang.Flag className="w-6 h-4 rounded-sm" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Bloquear scroll quando drawer aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto"
  }, [mobileOpen])

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300 ease-in-out hover:bg-white dark:bg-black">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl max-h-28 mx-auto">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="Company Logo"
            width={120}
            height={120}
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={null} item="Home" href="/" />
            <MenuItem setActive={setActive} active={active} item="Services" href="/services">
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-6">
                    
                    {/* LEFT — HOME CARE (4 itens) */}
                    <div>
                      <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Home Care
                      </h4>
                      <div className="flex flex-col gap-3">
                            <ProductItem
                            title="Cleaning"
                            description="Professional residential cleaning services."
                            href={`/services?section=homecare&service=assistencia-domiciliar`}
                            src="/assets/images/service1.jpg"
                            />

                            <ProductItem
                            title="Home Care"
                            description="Compassionate in-home assistance services."
                            href={`/services?section=homecare&service=assistencia-domiciliar`}
                            src="/assets/images/service2.jpg"
                            />

                            <ProductItem
                            title="Commercial"
                            description="Reliable commercial property maintenance."
                            href={`/services?section=commercial&service=manutencao-comercial`}
                            src="/assets/images/service3.jpg"
                            />

                            <ProductItem
                            title="Commercial"
                            description="Reliable commercial property maintenance."
                            href={`/services?section=commercial&service=manutencao-comercial`}
                            src="/assets/images/service3.jpg"
                            />
                      </div>
                    </div>

                    {/* RIGHT — CLEANING (6 itens) */}
                    <div>
                      <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Cleaning Services
                      </h4>
                      <div className="flex flex-col gap-3">
                          <ProductItem
                          title="Cleaning"
                          description="Professional residential cleaning services."
                          href={`/services?section=cleaning&service=limpeza-domestica`}
                          src="/assets/images/service1.jpg"
                          />

                          <ProductItem
                          title="Home Care"
                          description="Compassionate in-home assistance services."
                          href={`/services?section=home-care&service=assistencia-domiciliar`}
                          src="/assets/images/service2.jpg"
                          />

                          <ProductItem
                          title="Commercial"
                          description="Reliable commercial property maintenance."
                          href={`/services?section=commercial&service=manutencao-comercial`}
                          src="/assets/images/service3.jpg"
                          />

                          <ProductItem
                          title="Cleaning"
                          description="Professional residential cleaning services."
                          href={`/services?section=cleaning&service=limpeza-domestica`}
                          src="/assets/images/service1.jpg"
                          />
                      </div>
                    </div>
                  </div>
                </div>
            </MenuItem>

          <MenuItem setActive={setActive} active={null} item="About" href="/about">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/about">
                Company
              </HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={null} item="Contact" href="/contact">
          </MenuItem>
          </Menu>
        </div>
       {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* GET STARTED (sempre visível) */}
          <InteractiveHoverButton>
            Get Started
          </InteractiveHoverButton>

          {/* DESKTOP ONLY CONTROLS */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageDropdown />
            <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent transition-colors" />
          </div>

          {/* HAMBURGER (mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1"
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 6 : 0,
              }}
              className="w-6 h-0.5 bg-foreground rounded"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-foreground rounded"
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -6 : 0,
              }}
              className="w-6 h-0.5 bg-foreground rounded"
            />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-80 bg-background
                         shadow-2xl z-50 p-8 flex flex-col gap-6"
            >
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <LanguageDropdown />
                <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent transition-colors" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
