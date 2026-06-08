"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { socialLinks } from "@/data/socialLinks";

const iconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterXIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Mail: Mail,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        backgroundColor: "var(--color-cream-200)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "3rem",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.3fr_0.7fr]"
        >
          {/* ── Left: Text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Location badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: "1.25rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.75rem",
                background: "var(--color-espresso-100)",
                border: "1px solid var(--color-border)",
                borderRadius: "999px",
                fontSize: "0.78rem", fontWeight: 500,
                color: "var(--color-espresso-600)",
                fontFamily: "var(--font-sans)",
              }}>
                <span style={{ width: "6px", height: "6px", background: "#4CAF50", borderRadius: "50%", display: "inline-block" }} />
                Based in Kenya
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-serif)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Monubi
              <br />
              <span style={{ color: "var(--color-espresso-600)" }}>Justin</span>
            </motion.h1>

            {/* Title */}
            <motion.p variants={itemVariants} style={{
              fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 500,
              color: "var(--color-espresso-600)", marginBottom: "1.25rem",
              borderLeft: "2px solid var(--color-espresso-600)", paddingLeft: "0.75rem",
            }}>
              Backend Engineer&nbsp;|&nbsp;Computer Science Student
            </motion.p>

            {/* Tagline */}
            <motion.p variants={itemVariants} style={{
              fontSize: "0.95rem", color: "var(--color-muted)",
              lineHeight: 1.75, maxWidth: "480px", marginBottom: "2rem",
              fontFamily: "var(--font-sans)",
            }}>
              Computer Science student passionate about building reliable backend
              systems, APIs, and software solutions that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={15} />
              </a>
              <a href="https://github.com/MonubiJustin" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <GithubIcon size={15} /> GitHub
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={15} /> Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Connect
              </span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "34px", height: "34px", borderRadius: "8px",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-cream-100)",
                        color: "var(--color-espresso-700)",
                        transition: "all 0.2s ease", textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "var(--color-espresso-800)";
                        el.style.color = "var(--color-cream-100)";
                        el.style.borderColor = "var(--color-espresso-800)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "var(--color-cream-100)";
                        el.style.color = "var(--color-espresso-700)";
                        el.style.borderColor = "var(--color-border)";
                      }}
                    >
                      {Icon && <Icon size={15} />}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "var(--color-cream-100)",
                border: "1px solid var(--color-border)",
                borderRadius: "18px",
                padding: "2rem 1.5rem",
                maxWidth: "280px", width: "100%",
                boxShadow: "0 16px 48px rgba(44,26,14,0.12)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
              }}
            >
              <div style={{ alignSelf: "flex-start" }}>
                <span style={{
                  fontSize: "0.7rem", color: "var(--color-muted)", fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  fontFamily: "var(--font-sans)",
                  padding: "0.2rem 0.5rem", background: "var(--color-cream-300)", borderRadius: "4px",
                }}>
                  Monubi Justin
                </span>
              </div>

              <div style={{ width: "130px", height: "130px", borderRadius: "50%", overflow: "hidden", border: "3px solid var(--color-espresso-200)", flexShrink: 0 }}>
                <Image src="/avatar.png" alt="Monubi Justin - Backend Engineer" width={130} height={130} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-espresso-900)", marginBottom: "0.25rem" }}>
                  Monubi Justin
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-espresso-600)", fontFamily: "var(--font-sans)", marginBottom: "0.75rem" }}>
                  Backend Engineer
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", justifyContent: "center" }}>
                  {["Node.js", "Spring Boot", "REST", "APIs"].map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: "0.65rem" }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{
                width: "100%", padding: "0.6rem 0.75rem",
                background: "var(--color-cream-200)", borderRadius: "8px",
                display: "flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid var(--color-cream-400)",
              }}>
                <span style={{ width: "8px", height: "8px", background: "#4CAF50", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontSize: "0.75rem", color: "var(--color-espresso-700)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                  Open to internships & junior roles
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
