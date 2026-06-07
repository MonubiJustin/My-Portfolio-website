export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tech: string[];
  github: string;
  live?: string;
  category: string;
  featured: boolean;
  icon: string; // lucide icon name
}

export const projects: Project[] = [
  {
    id: "daraja-api",
    title: "Daraja API Integration",
    description:
      "M-Pesa Daraja API integration built with Express.js and TypeScript — enabling real-time mobile payments with STK Push, polling, and environment-configurable flows.",
    longDescription:
      "A production-ready M-Pesa payment integration that handles the full payment lifecycle: initiating STK Push requests, polling for transaction status, and returning real-time feedback to clients. Built with strict TypeScript and Zod validation.",
    features: [
      "STK Push Integration",
      "Payment Status Polling",
      "Real-time Feedback",
      "Responsive Payment Flow",
      "Environment Configuration",
    ],
    tech: ["TypeScript", "Node.js", "Express", "Axios", "Zod", "Bootstrap"],
    github: "https://github.com/MonubiJustin/daraja-api-express-with-typescript",
    category: "Payment API",
    featured: true,
    icon: "CreditCard",
  },
  {
    id: "store-api",
    title: "Store API",
    description:
      "Comprehensive e-commerce backend built with Spring Boot featuring JWT authentication, product management, shopping cart, order processing, and Stripe payment integration.",
    longDescription:
      "A full-featured e-commerce REST API built on Spring Boot with enterprise-grade patterns. Implements JWT-based authentication, role-based access control, database migrations with Flyway, and Stripe payments. Fully documented with Swagger/OpenAPI.",
    features: [
      "JWT Authentication",
      "Product Management",
      "Shopping Cart",
      "Order Processing",
      "Stripe Integration",
      "Swagger Documentation",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MariaDB", "Flyway", "Stripe"],
    github: "https://github.com/MonubiJustin/spring-boot-apis/tree/main/StoreAPI",
    category: "E-Commerce API",
    featured: true,
    icon: "ShoppingCart",
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "Full-stack task management system with secure JWT authentication, email integration, Docker support, and complete Swagger API documentation.",
    longDescription:
      "A robust task management API with user authentication, task CRUD operations, password reset via email, and comprehensive API documentation. Containerized with Docker for easy deployment and consistent environments.",
    features: [
      "User Authentication",
      "Task CRUD",
      "Password Reset",
      "Email Integration",
      "Swagger Documentation",
      "Docker Support",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "Swagger"],
    github: "https://github.com/MonubiJustin/Task-Manager-App",
    category: "Task API",
    featured: false,
    icon: "CheckSquare",
  },
  {
    id: "blogging-platform",
    title: "Blogging Platform API",
    description:
      "RESTful blogging platform built with Django and DRF — featuring JWT auth, categories, tags, search/filtering, role-based permissions, and OpenAPI documentation.",
    longDescription:
      "A fully-featured blogging REST API using Django REST Framework. Implements JWT authentication, CRUD for posts with categories and tags, advanced filtering and search, and role-based permissions separating authors from readers. Self-documented with OpenAPI.",
    features: [
      "JWT Authentication",
      "CRUD Operations",
      "Categories & Tags",
      "Search & Filtering",
      "Role-Based Permissions",
      "OpenAPI Documentation",
    ],
    tech: ["Python", "Django", "DRF", "MySQL", "SimpleJWT", "OpenAPI"],
    github: "https://github.com/MonubiJustin/Blogging-Platform-API",
    category: "Content API",
    featured: false,
    icon: "FileText",
  },
];
