"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Locale, locales, rtlLocales, translations } from "@/lib/translations";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && locales.includes(value as Locale);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = localStorage.getItem("preferred-locale");
    if (isLocale(storedLocale)) {
      setLocaleState(storedLocale);
    }
  }, []);

  const direction: "ltr" | "rtl" = rtlLocales.includes(locale) ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.classList.toggle("font-rtl", direction === "rtl");
  }, [direction, locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    localStorage.setItem("preferred-locale", nextLocale);
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      direction,
    }),
    [locale, direction],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useTranslation() {
  const { locale } = useLocale();
  return translations[locale];
}
