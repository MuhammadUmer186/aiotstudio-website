"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Locale, locales, translations } from "@/lib/translations";
import { useLocale } from "./providers/locale-provider";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentTranslation = translations[locale];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="selector-trigger"
        aria-expanded={open}
        aria-label={currentTranslation.languageMenuLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="h-4 w-4" />
        <span className="hidden sm:inline">{currentTranslation.languages[locale]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="selector-popup"
          >
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                className={`selector-option ${item === locale ? "selector-option-active" : ""}`}
                onClick={() => {
                  setLocale(item as Locale);
                  setOpen(false);
                }}
              >
                <span>{translations[item].languages[item]}</span>
                {item === locale ? <span className="selector-dot" /> : null}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
