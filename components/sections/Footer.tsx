"use client";

import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { contactInfo } from "@/data/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-cream-300)",
        borderTop: "1px solid var(--color-border)",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/MonubiJustin"
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
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-900)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-700)"; }}
          >
            <GithubIcon size={14} />
            GitHub
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--color-espresso-700)",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-900)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-espresso-700)"; }}
          >
            <Mail size={14} />
            {contactInfo.email}
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
            }}
          >
            <MapPin size={14} />
            {contactInfo.location}
          </span>
        </div>

        {/* Copyright */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "var(--color-muted)",
            fontFamily: "var(--font-sans)",
          }}
        >
          © {year} Monubi Justin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
