"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeUp, FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/Animations";
import { skillCategories } from "@/data/skills";
import { Server, Database, Monitor, Cloud, Wrench, Compass } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Server, Database, Monitor, Cloud, Wrench, Compass,
};

/* Split 6 categories into 3 columns of 2 each — matches screenshots layout */
const col1 = skillCategories.slice(0, 2); // Backend + Databases
const col2 = skillCategories.slice(2, 4); // Frontend + Cloud
const col3 = skillCategories.slice(4, 6); // Tools + Exploring

function SkillBlock({ cat }: { cat: (typeof skillCategories)[0] }) {
  const Icon = iconMap[cat.icon];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
        {Icon && <Icon size={13} style={{ color: "var(--color-espresso-600)" }} />}
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {cat.category}
        </span>
      </div>
      <div>
        {cat.skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <span className="skill-name">{skill.name}</span>
            {skill.note && <span className="skill-note">{skill.note}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "var(--color-cream-200)" }}>
      <div className="container">
        {/* ── Profile Header ── */}
        <FadeUp>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
            className="md:flex-row md:items-center md:gap-3"
          >
            {/* Avatar */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--color-espresso-200)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/avatar.png"
                alt="Monubi Justin"
                width={90}
                height={90}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Name + role */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--color-espresso-900)",
                  marginBottom: "0.3rem",
                  lineHeight: 1.15,
                }}
              >
                Monubi Justin
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--color-espresso-600)",
                }}
              >
                Backend Engineer | Computer Science Student at Kisii University
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                  marginTop: "0.25rem",
                }}
              >
                Hey! I&apos;m a CS student based in Kenya, turning real-world problems into reliable software solutions.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* ── Background ── */}
        <FadeUp delay={0.1}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              color: "var(--color-espresso-900)",
              marginBottom: "1rem",
            }}
          >
            Background
          </h3>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
            {[
              "I'm a Computer Science student at Kisii University with a strong focus on backend engineering and software architecture. What fascinates me most about software is the hidden layer that powers everything behind the scenes — the systems, APIs, databases, authentication mechanisms, and business logic that make applications actually work.",
              "I enjoy building practical solutions to real-world problems and continuously sharpening my engineering skills through personal projects. My stack spans Node.js, Spring Boot, and Django — giving me a broad view of different backend ecosystems and their tradeoffs.",
              "I believe in simplicity and maintainability over chasing unnecessary complexity. As Terry Davis put it: \"Idiots admire complexity, geniuses admire simplicity.\" I try to solve the problem directly in front of me before reaching for abstractions.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.92rem",
                  lineHeight: 1.8,
                  color: "var(--color-espresso-700)",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </FadeUp>

        {/* ── Technologies & Tools ── */}
        <FadeIn delay={0.15}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              color: "var(--color-espresso-900)",
              marginBottom: "1.5rem",
            }}
          >
            Technologies &amp; Tools
          </h3>
        </FadeIn>

        <StaggerContainer>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:grid-cols-3"
          >
            <StaggerChild>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {col1.map((cat) => <SkillBlock key={cat.category} cat={cat} />)}
              </div>
            </StaggerChild>
            <StaggerChild>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {col2.map((cat) => <SkillBlock key={cat.category} cat={cat} />)}
              </div>
            </StaggerChild>
            <StaggerChild>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {col3.map((cat) => <SkillBlock key={cat.category} cat={cat} />)}
              </div>
            </StaggerChild>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
