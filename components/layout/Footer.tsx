"use client";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = ["Products", "Studio", "Clients", "Pricing", "Blog", "Privacy", "Terms"];

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ================= DESKTOP ================= */}
        <div className="hidden sm:block">

          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-32 h-32 rounded-md flex items-center justify-center">
              <Image
                src="/assets/images/logo.svg"
                alt="EverCare Logo"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-footer-muted hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="border-t border-dashed border-footer-border mb-6" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-footer-muted">
              © 2026 EverCare. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-footer-muted hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ≤ 430px ================= */}
        <div className="block sm:hidden">

          <div className="flex w-full justify-evenly gap-8 mb-8">

                <div className="flex flex-col gap-4 items-center text-center">
                  {footerLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm text-footer-muted hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-4 items-center justify-between">
                  {socialLinks.map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="text-footer-muted hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-dashed border-footer-border mb-6" />

          {/* Linha inferior */}
          <div className="flex items-center justify-between">

            <p className="text-xs text-footer-muted">
              © 2026 EverCare. All Rights Reserved.
            </p>

            <div className="w-16 h-16">
              <Image
                src="/assets/images/logo.svg"
                alt="EverCare Logo"
                width={64}
                height={64}
              />
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
