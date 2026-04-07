"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import LanguageSelector from "./language-selector";
import { useTranslation } from "./providers/locale-provider";

const sections = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "expertise", key: "expertise" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslation();

  return (
    <header className="site-header">
      <div className="site-container navbar-row">
        <a href="#home" className="brand-mark">
          <span className="brand-orb" />
          <div>
            <div className="brand-name">{siteConfig.name}</div>
            <div className="brand-role">{siteConfig.role}</div>
          </div>
        </a>

        <nav className="desktop-nav">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="nav-link">
              {t.nav[section.key]}
            </a>
          ))}
        </nav>

        <div className="desktop-actions">
          <LanguageSelector />
          <a href="#contact" className="primary-button">
            {t.nav.contactButton}
          </a>
        </div>

        <div className="mobile-actions">
          <LanguageSelector />
          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mobile-menu-wrap"
          >
            <div className="site-container">
              <div className="mobile-menu-panel">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="mobile-nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[section.key]}
                  </a>
                ))}
                <a href="#contact" className="primary-button w-full text-center" onClick={() => setOpen(false)}>
                  {t.nav.contactButton}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
