export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: "Home" },
  { label: "About", href: "#about", icon: "UserRound" },
  { label: "Skills", href: "#skills", icon: "Code2" },
  { label: "Projects", href: "#projects", icon: "BriefcaseBusiness" },
  { label: "Contact", href: "#contact", icon: "Mail" },
];
