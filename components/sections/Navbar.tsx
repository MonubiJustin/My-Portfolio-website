"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, Code2, Home, Mail, UserRound } from "lucide-react";
import { navItems } from "@/data/navigation";

const iconMap = {
  Home,
  UserRound,
  Code2,
  BriefcaseBusiness,
  Mail,
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="floating-nav-shell">
      <nav className="floating-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`floating-nav-link${isActive ? " is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              title={item.label}
            >
              <Icon size={19} strokeWidth={isActive ? 2.25 : 1.8} aria-hidden="true" />
              <span className="floating-nav-label">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
