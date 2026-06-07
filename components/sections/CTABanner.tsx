"use client";

import { FadeUp } from "@/components/ui/Animations";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function CTABanner() {
  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--color-cream-300)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <FadeUp>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "var(--color-espresso-900)",
              marginBottom: "0.75rem",
            }}
          >
            Ready to Build Your Next System?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--color-muted)",
              marginBottom: "2rem",
              fontFamily: "var(--font-sans)",
            }}
          >
            I am currently open to internships, junior backend roles, and strategic collaborations.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">
              Get In Touch <ArrowRight size={15} />
            </a>
            <a
              href="https://github.com/MonubiJustin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
