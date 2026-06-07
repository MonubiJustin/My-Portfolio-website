export interface Skill {
  name: string;
  note?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", note: "REST APIs, middleware" },
      { name: "Express.js", note: "Server-side logic" },
      { name: "TypeScript", note: "Type safety" },
      { name: "Spring Boot", note: "Enterprise APIs" },
      { name: "Java", note: "OOP, enterprise" },
      { name: "Django", note: "Python web framework" },
      { name: "Django REST Framework", note: "Python APIs" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MariaDB", note: "Relational" },
      { name: "MySQL", note: "Relational" },
      { name: "MongoDB", note: "Document store" },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML", note: "Semantic markup" },
      { name: "CSS", note: "Responsive design" },
      { name: "JavaScript", note: "DOM, async" },
      { name: "React", note: "Learning" },
      { name: "Next.js", note: "Learning" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", note: "Cloud services" },
      { name: "Docker", note: "Containerization" },
      { name: "Render", note: "Deployment" },
      { name: "Vercel", note: "Deployment" },
      { name: "Heroku", note: "Deployment" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Collaboration" },
      { name: "Linux (Ubuntu)", note: "Daily driver" },
    ],
  },
  {
    category: "Exploring",
    icon: "Compass",
    skills: [
      { name: "Rust", note: "Systems programming" },
      { name: "C", note: "Low-level" },
      { name: "Blockchain", note: "Web3" },
      { name: "Stellar Ecosystem", note: "DeFi protocols" },
    ],
  },
];

export const learningItems = [
  {
    name: "React",
    description: "Component architecture and state management",
    icon: "Layers",
    status: "In Progress",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework with App Router",
    icon: "Zap",
    status: "In Progress",
  },
  {
    name: "Rust",
    description: "Systems programming and memory safety",
    icon: "Shield",
    status: "Exploring",
  },
  {
    name: "Systems Programming",
    description: "OS concepts, networking, low-level design",
    icon: "Cpu",
    status: "Exploring",
  },
  {
    name: "Software Architecture",
    description: "Design patterns, microservices, DDD",
    icon: "GitBranch",
    status: "Ongoing",
  },
];
