"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(237,232,220,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <style>{`
        .nav-desktop { display: none !important; }
        .nav-hamburger { display: flex !important; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; gap: 1.75rem; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>

      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--color-espresso-900)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              background: "var(--color-espresso-800)",
              color: "var(--color-cream-100)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.05em",
              fontFamily: "var(--font-sans)",
            }}
          >
            MJ
          </span>
          <span style={{ display: "none" }} className="sm:inline">Monubi Justin</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                color:
                  activeSection === item.href.replace("#", "")
                    ? "var(--color-espresso-900)"
                    : "var(--color-espresso-600)",
                fontWeight: activeSection === item.href.replace("#", "") ? 600 : 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-espresso-800)",
            alignItems: "center",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-cream-100)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", padding: "1rem 1.5rem", gap: "0.25rem" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "0.6rem 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--color-espresso-800)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--color-cream-300)",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
