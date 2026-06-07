"use client";

import { FadeUp, StaggerContainer, StaggerChild } from "@/components/ui/Animations";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import {
  ExternalLink, CreditCard, ShoppingCart, CheckSquare, FileText,
  Server, Lock, Database, Package, ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

const iconMap: Record<string, React.ElementType> = {
  CreditCard, ShoppingCart, CheckSquare, FileText,
  Server, Lock, Database, Package,
};

/* Category color accents */
const categoryColors: Record<string, string> = {
  "Payment API":    "#6B4C9A",
  "E-Commerce API": "#2E6DA4",
  "Task API":       "#3A7A56",
  "Content API":    "#A0522D",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ backgroundColor: "var(--color-cream-100)" }}
    >
      <div className="container">
        <FadeUp>
          <SectionHeader
            title="Featured Projects"
            subtitle="Backend systems built across multiple ecosystems — REST APIs, authentication, payments, and more."
          />
        </FadeUp>

        <StaggerContainer>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
            className="md:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map((project) => {
              const Icon = iconMap[project.icon] ?? Server;
              const accentColor = categoryColors[project.category] ?? "var(--color-espresso-700)";

              return (
                <StaggerChild key={project.id}>
                  <div className="project-card">
                    {/* ── Card Header ── */}
                    <div
                      style={{
                        padding: "1.5rem 1.5rem 1rem",
                        borderBottom: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          background: `${accentColor}18`,
                          border: `1px solid ${accentColor}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} style={{ color: accentColor }} />
                      </div>

                      <div style={{ flex: 1 }}>
                        {/* Category */}
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: accentColor,
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {project.category}
                        </span>

                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            color: "var(--color-espresso-900)",
                            marginTop: "0.15rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* ── Card Body ── */}
                    <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.88rem",
                          lineHeight: 1.75,
                          color: "var(--color-espresso-700)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Features */}
                      <div>
                        <p
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--color-muted)",
                            marginBottom: "0.5rem",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          Key Features
                        </p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          {project.features.slice(0, 4).map((feature) => (
                            <li
                              key={feature}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontSize: "0.82rem",
                                color: "var(--color-espresso-700)",
                                fontFamily: "var(--font-sans)",
                              }}
                            >
                              <ArrowRight size={11} style={{ color: accentColor, flexShrink: 0 }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* ── Card Footer — matches screenshot ── */}
                    <div
                      style={{
                        padding: "1rem 1.5rem",
                        borderTop: "1px solid var(--color-border)",
                      }}
                    >
                      {/* Tech badges */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.85rem" }}>
                        {project.tech.map((tech) => (
                          <span key={tech} className="badge">{tech}</span>
                        ))}
                      </div>

                      {/* Links — exactly as in screenshot */}
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "var(--color-espresso-700)",
                            textDecoration: "none",
                            fontFamily: "var(--font-sans)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-900)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-700)"; }}
                        >
                          <GithubIcon size={14} />
                          GitHub
                        </a>

                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "var(--color-muted)",
                            fontFamily: "var(--font-sans)",
                            cursor: "default",
                          }}
                        >
                          <ExternalLink size={14} />
                          Not Deployed
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerChild>
              );
            })}
          </div>
        </StaggerContainer>

        {/* View all on GitHub */}
        <FadeUp delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="https://github.com/MonubiJustin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <GithubIcon size={15} />
              View all on GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
