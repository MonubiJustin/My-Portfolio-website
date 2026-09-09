"use client";

import { FadeUp, StaggerContainer, StaggerChild } from "@/components/ui/Animations";
import SectionHeader from "@/components/ui/SectionHeader";
import { learningItems } from "@/data/skills";
import { Layers, Zap, Shield, Cpu, GitBranch } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers, Zap, Shield, Cpu, GitBranch,
};

const statusColors: Record<string, { bg: string; text: string }> = {
  "In Progress": { bg: "#E8F5E9", text: "#2E7D32" },
  "Exploring":   { bg: "#FFF3E0", text: "#E65100" },
  "Ongoing":     { bg: "#E3F2FD", text: "#1565C0" },
};

export default function CurrentlyLearning() {
  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--color-cream-200)" }}
    >
      <div className="container">
        <FadeUp>
          <SectionHeader
            title="Currently Exploring"
            subtitle="Technologies and topics I'm actively learning and experimenting with."
          />
        </FadeUp>

        <StaggerContainer>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {learningItems.map((item) => {
              const Icon = iconMap[item.icon] ?? Layers;
              const colors = statusColors[item.status] ?? { bg: "#F5F5F5", text: "#555" };
              return (
                <StaggerChild key={item.name}>
                  <div
                    className="card"
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {/* Icon + Status */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "var(--color-espresso-800)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={17} style={{ color: "var(--color-cream-200)" }} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: colors.text,
                          background: colors.bg,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--color-espresso-900)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--color-muted)",
                          fontFamily: "var(--font-sans)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Progress bar decoration */}
                    <div
                      style={{
                        height: "3px",
                        background: "var(--color-cream-400)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: item.status === "In Progress" ? "55%" : item.status === "Ongoing" ? "70%" : "25%",
                          background: "var(--color-espresso-700)",
                          borderRadius: "2px",
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                  </div>
                </StaggerChild>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
