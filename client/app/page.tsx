"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  CloudCog,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Radar,
  RadioTower,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useTranslation } from "@/components/providers/locale-provider";
import { siteConfig } from "@/lib/site-config";

const expertiseIcons = [RadioTower, BrainCircuit, Workflow, Cpu, Wrench, CloudCog];
const capabilityIcons = [Radar, Bot, ShieldCheck, Workflow, Cpu, CloudCog];

export default function HomePage() {
  const t = useTranslation();

  return (
    <div className="page-shell">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />
      <Navbar />

      <main>
        <section id="home" className="site-container hero-section">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="hero-badge">{t.hero.badge}</div>
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  {t.hero.primaryCta}
                </a>
                <a href="#contact" className="secondary-button">
                  {t.hero.secondaryCta}
                </a>
              </div>

              <div className="hero-metrics">
                {t.hero.metrics.map((item) => (
                  <div key={item.label} className="metric-card">
                    <div className="metric-label">{item.label}</div>
                    <div className="metric-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="hero-visual"
            >
              <div className="hero-visual-shell">
                <div className="hero-visual-top">
                  <div>
                    <div className="panel-label">Intelligent Systems</div>
                    <div className="panel-title">{siteConfig.name}</div>
                  </div>
                  <div className="status-chip">Live Build</div>
                </div>

                <div className="hero-stack-card">
                  <div className="stack-row">
                    <span>Devices</span>
                    <span>Cloud</span>
                  </div>
                  <div className="stack-line" />
                  <div className="stack-row">
                    <span>AI Decisions</span>
                    <span>Robotics</span>
                  </div>
                </div>

                <div className="hero-mini-grid">
                  {["IoT", "AI", "Agents", "Robotics"].map((item) => (
                    <div key={item} className="mini-panel">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="site-container section-block">
          <div className="section-eyebrow">{t.about.eyebrow}</div>
          <div className="section-heading-wrap">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-description">{t.about.description}</p>
          </div>
          <div className="about-points">
            {t.about.points.map((point) => (
              <div key={point} className="about-point-card">
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="expertise" className="site-container section-block">
          <div className="section-eyebrow">{t.expertise.eyebrow}</div>
          <div className="section-heading-wrap">
            <h2 className="section-title">{t.expertise.title}</h2>
            <p className="section-description">{t.expertise.description}</p>
          </div>

          <div className="expertise-grid">
            {t.expertise.items.map((item, index) => {
              const Icon = expertiseIcons[index];
              return (
                <div key={item.title} className="expertise-card">
                  <div className="icon-shell">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-copy">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="site-container section-block">
          <div className="section-eyebrow">{t.projects.eyebrow}</div>
          <div className="section-heading-wrap">
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-description">{t.projects.description}</p>
          </div>

          <div className="projects-grid">
            {t.projects.items.map((project) => (
              <div key={project.title} className="project-card">
                <div className="project-preview" />
                <h3 className="card-title">{project.title}</h3>
                <p className="card-copy">{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  {t.projects.viewProject}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="site-container section-block compact-block">
          <div className="section-eyebrow">{t.capabilities.eyebrow}</div>
          <div className="section-heading-wrap">
            <h2 className="section-title">{t.capabilities.title}</h2>
          </div>

          <div className="capabilities-grid">
            {t.capabilities.items.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div key={item} className="capability-pill">
                  <Icon className="h-4 w-4" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="site-container section-block">
          <div className="section-eyebrow">{t.stack.eyebrow}</div>
          <div className="section-heading-wrap">
            <h2 className="section-title">{t.stack.title}</h2>
          </div>

          <div className="stack-grid">
            {t.stack.groups.map((group) => (
              <div key={group.title} className="stack-card">
                <h3 className="card-title">{group.title}</h3>
                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="site-container contact-section">
          <div className="contact-card">
            <div>
              <div className="section-eyebrow">{t.contact.eyebrow}</div>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-description">{t.contact.description}</p>
              <p className="contact-availability">{t.contact.availability}</p>
            </div>

            <div className="contact-actions">
              <a href={`mailto:${siteConfig.email}`} className="primary-button">
                <Mail className="h-4 w-4" />
                <span>{t.contact.primaryCta}</span>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="secondary-button">
                <Github className="h-4 w-4" />
                <span>{t.contact.secondaryCta}</span>
              </a>
            </div>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <div className="contact-meta-label">{t.contact.emailLabel}</div>
                <a href={`mailto:${siteConfig.email}`} className="contact-meta-value">
                  {siteConfig.email}
                </a>
              </div>
              <div className="contact-socials">
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="social-link">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="social-link">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
