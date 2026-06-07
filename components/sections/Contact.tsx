"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/Animations";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { contactInfo } from "@/data/socialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — connect to Formspree/EmailJS/custom backend here
    // Example Formspree: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "var(--color-cream-200)" }}
    >
      <div className="container">
        <FadeUp>
          <SectionHeader
            title="Inquiry & Collaboration"
            subtitle="Ready to build something real? Let's talk."
          />
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
          className="md:grid-cols-[1.3fr_0.7fr]"
        >
          {/* ── Contact Form ── */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label htmlFor="contact-name" className="form-label">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  className="form-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="form-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <label htmlFor="contact-message" className="form-label" style={{ margin: 0 }}>Inquiry Details</label>
                  <span style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>
                    {form.message.length}/500
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  placeholder="Specify target architecture or project requirements..."
                  className="form-input"
                  rows={5}
                  maxLength={500}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ resize: "vertical", minHeight: "120px" }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "✓ Sent!"
                ) : (
                  <>
                    <Send size={14} /> Send Inquiry
                  </>
                )}
              </button>

              {status === "sent" && (
                <p style={{ fontSize: "0.85rem", color: "#2E7D32", fontFamily: "var(--font-sans)" }}>
                  Message received! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </FadeUp>

          {/* ── Contact Info ── */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Email */}
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.3rem", fontFamily: "var(--font-sans)" }}>
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--color-espresso-800)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  <Mail size={14} style={{ color: "var(--color-espresso-600)" }} />
                  {contactInfo.email}
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.3rem", fontFamily: "var(--font-sans)" }}>
                  GitHub
                </p>
                <a
                  href="https://github.com/MonubiJustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--color-espresso-800)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  <GithubIcon size={14} style={{ color: "var(--color-espresso-600)" }} />
                  github.com/MonubiJustin
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.3rem", fontFamily: "var(--font-sans)" }}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/monubi-justin-928014301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--color-espresso-800)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  <LinkedinIcon size={14} style={{ color: "var(--color-espresso-600)" }} />
                  Monubi Justin
                </a>
              </div>

              {/* Location */}
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.3rem", fontFamily: "var(--font-sans)" }}>
                  Location / University
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--color-espresso-800)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  <MapPin size={14} style={{ color: "var(--color-espresso-600)" }} />
                  {contactInfo.location} — {contactInfo.university}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
