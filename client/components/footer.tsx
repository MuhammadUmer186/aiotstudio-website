"use client";

import { siteConfig } from "@/lib/site-config";
import { useTranslation } from "./providers/locale-provider";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="footer-shell">
      <div className="site-container footer-grid">
        <div>
          <div className="brand-name">{siteConfig.name}</div>
          <p className="footer-copy">{t.footer.statement}</p>
        </div>

        <div>
          <div className="footer-title">{t.footer.quickLinks}</div>
          <div className="footer-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
        </div>

        <div>
          <div className="footer-title">{t.footer.connect}</div>
          <div className="footer-links">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>

      <div className="site-container footer-bottom">{t.footer.copyright}</div>
    </footer>
  );
}
