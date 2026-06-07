import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monubi Justin — Backend Engineer",
  description:
    "Computer Science student and Backend Engineer based in Kenya. Building reliable APIs, backend systems, and software solutions with Node.js, Spring Boot, Django, and more.",
  keywords: [
    "Monubi Justin",
    "Backend Engineer",
    "Kenya",
    "Node.js",
    "Spring Boot",
    "Django",
    "API Developer",
    "Software Engineer",
    "Kisii University",
  ],
  authors: [{ name: "Monubi Justin", url: "https://github.com/MonubiJustin" }],
  openGraph: {
    title: "Monubi Justin — Backend Engineer",
    description:
      "Computer Science student passionate about building reliable backend systems, APIs, and software solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monubi Justin — Backend Engineer",
    description: "CS student building reliable backend systems and APIs.",
    creator: "@MonubiJustin",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
